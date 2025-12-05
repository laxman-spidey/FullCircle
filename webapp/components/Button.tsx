"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import styled from "styled-components"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Spinner } from "./Spinner"

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 ring-offset-background",
    {
        variants: {
            variant: {
                primary: "!bg-white !text-primary-dark hover:!bg-primary-500 hover:!text-white !shadow-sm",
                secondary: "!bg-primary-700 !text-white hover:!bg-primary-500",
                outline: "!border !border-input !bg-background hover:!bg-accent hover:!text-accent-foreground",
                ghost: "hover:!bg-accent hover:!text-accent-foreground",
                link: "!text-primary !underline-offset-4 hover:!underline",
                whatsapp: "!bg-[#25D366] !text-white hover:!bg-[#128c7e] !shadow-sm",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-full! px-3",
                lg: "h-12 rounded-full! px-8 text-base",
                icon: "h-10 w-10",
            },
            fullWidth: {
                true: "w-full",
            }
        },
        defaultVariants: {
            variant: "primary",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
    isLoading?: boolean
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
    fullWidth?: boolean
}

// Use transient props (prefixed with $) to prevent them from being passed to the DOM
const StyledButtonRoot = styled.button.attrs<any>(props => ({
    className: cn(buttonVariants({ variant: props.$variant, size: props.$size, fullWidth: props.$fullWidth }), props.className)
}))`
  /* 
   * Specific overrides to protect against external CSS conflicts (e.g. Bootstrap).
   * Using &&& increases specificity to ensure these styles (and the injected Tailwind ones if specific enough) apply.
   * However, since we are moving the styles INTO className, standard CSS cascade applies.
   * If Bootstrap targets 'button' globally, Tailwind utilities usually override due to specificity or order.
   * If conflicts persist, we can force specific resets here.
   */
  
  &&& {
      /* Example: force no border if bootstrap sets one */
      /* border: none; (managed by tailwind classes like 'border-0' or specific border classes) */
  }
`

const StyledSlotRoot = styled(Slot).attrs<any>(props => ({
    className: cn(buttonVariants({ variant: props.$variant, size: props.$size, fullWidth: props.$fullWidth }), props.className)
}))`
    /* Same protections for Slot */
`

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, fullWidth, asChild = false, isLoading, leftIcon, rightIcon, children, ...props }, ref) => {

        const Component = asChild ? StyledSlotRoot : StyledButtonRoot

        return (
            <Component
                ref={ref}
                // Pass transient props for styling logic
                $variant={variant}
                $size={size}
                $fullWidth={fullWidth}
                // Do NOT pass asChild prop to the component
                disabled={isLoading || props.disabled}
                className={className}
                {...props}
            >
                {/* If asChild is true, Slot expects a single child. We can't wrap contents in Fragment if it's a Slot. 
            Radix Slot merges props onto the child. 
            So we must return the child directly if proper Slot behavior is desired.
            BUT, we have isLoading/Icon logic which requires wrapping structure. 
            
            Standard Radix Slot pattern implies the CHILD is the element. 
            If we want to inject Icons inside the child element, that's tricky with Slot alone without cloning.
            
            However, our 'asChild' usage in page.tsx was wrapping an <a>. 
            <Button asChild><a href.../></Button>
            
            If we inject icons, we'd be trying to render:
            <Slot>
               <Spinner/>   <-- Slot explodes with multiple children
               <a>...</a>
            </Slot>
            
            CORRECT PATTERN for asChild + Icons:
            We cannot easily inject sibling icons *outside* the child when using Slot because Slot replaces itself with the child.
            The Icons must be *inside* the child (the anchor).
            
            If 'asChild' is true, we should probably NOT try to render helpful auxiliary icons automatically 
            OR we assume the user puts them in the child.
            
            BUT for 'isLoading', we usually want to replace content or overlay.
            
            Compromise: If asChild is true, we rely on the consumer to handle inner structure or we wrap the children. 
            But Slot expects single child.
            
            For now, to reproduce the previous behavior where we COULD inject icons:
            Actually, the previous implementation using 'Comp' (Slot or button) worked because:
            <Comp>  --> <Slot>
               <React.Fragment> --> Single Child? No.
                  <Icon/>
                  {children}
               </React.Fragment>
            </Comp>
            
            Wait, Slot fails if it receives >1 child. React.Fragment is not a single DOM element child? 
            Actually Radix Slot allows Fragment IF the Fragment contains one element? No, Slot merges props into the *immediate* React child.
            
            If we render:
            <Slot>
              <> <Icon/> <a/> </>
            </Slot>
            Radix Slot will try to merge props into the Fragment? That fails/warns.
            
            Fix: If asChild is true, we treat 'children' as the ONE child. 
            If we have icons/loading, we might have to render them *inside* that child if possible, 
            or warn/disable asChild usage with these helpers.
            
            Original shadcn button creates this structure:
             <Comp ...>
                {props.children}
             </Comp>
             It does NOT usually auto-inject icons with asChild.
             
             However, my previous code DID try to inject icons.
             
             Let's support the icons for the standard button case (asChild=false). 
             For asChild=true, we output children directly, assuming user handles content.
             User's page.tsx usage:
             <Button asChild> <a ...>Get Started</a> </Button>
             This works fine.
             
             The "Chat on WhatsApp" button uses standard button (asChild=false implied? No, user removed asChild in their edit?).
        */}

                {asChild ? (
                    children
                ) : (
                    <>
                        {isLoading ? (
                            <Spinner className="-ml-1 mr-2" />
                        ) : (
                            leftIcon && <span className="mr-2 flex items-center">{leftIcon}</span>
                        )}
                        {children}
                        {!isLoading && rightIcon && <span className="ml-2 flex items-center">{rightIcon}</span>}
                    </>
                )}
            </Component>
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
