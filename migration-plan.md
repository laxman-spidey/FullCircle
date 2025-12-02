# FullCircle Static HTML to React/Next.js Migration Plan

## Confirmed Preferences
- **Next.js Router**: App Router (modern, server components, layouts)
- **TypeScript**: Full type safety for all components/props/state
- **Styling**: Tailwind CSS (responsive utilities, theme config for teal/glass) + CSS modules/global CSS for complex glassmorphism (backdrop-filter, custom animations)
- **Structure**: Follow specialist order - Component Library → Layouts → Pages
- **Hosting**: Update firebase.json for Next.js static export (matches current Firebase setup)

## Project Structure
```
FullCircle/
├── public/ (static assets: images, fonts - migrate to public/)
├── src/
│   ├── app/
│   │   ├── globals.css (Tailwind + custom glass vars)
│   │   ├── layout.tsx (Root layout)
│   │   └── page.tsx (Landing page)
│   ├── components/
│   │   ├── ui/ (Atomic - Button.tsx, GlassCard.tsx, IconBox.tsx, StepNumber.tsx)
│   │   ├── sections/ (Composite - Hero.tsx, ServicesSection.tsx, VerticalTimeline.tsx)
│   │   └── layout/ (MainLayout.tsx, Navbar.tsx, Sidebar.tsx, Footer.tsx)
│   ├── lib/
│   │   ├── utils.ts (cn, scroll hooks)
│   │   └── constants.ts (teal colors, services data)
│   └── assets/ (SVGs like whatsapp-icon.svg)
├── tailwind.config.ts
├── next.config.js (Image optimization)
├── firebase.json (Updated for Next.js)
├── package.json (Next.js 14+, TypeScript, Tailwind, lucide-react)
└── README.md (Component docs)
```

## Component Hierarchy & Dependencies

```mermaid
graph TD
    Root[app/layout.tsx] --> MainLayout[layout/MainLayout.tsx]
    
    MainLayout --> Navbar[layout/Navbar.tsx<br/>useScrollEffect, useSidebarToggle]
    MainLayout --> PageContent[app/page.tsx]
    MainLayout --> Footer[layout/Footer.tsx]
    MainLayout --> FloatingWA[ui/FloatingWhatsAppButton.tsx<br/>useScrollVisibility]
    
    Navbar -.-> Sidebar[layout/Sidebar.tsx<br/>overlay drawer]
    
    PageContent --> Hero[sections/Hero.tsx<br/>Next/Image]
    PageContent --> WhyChoose[sections/WhyChoose.tsx<br/>ServicesCard x3]
    PageContent --> HowWorks[sections/HowItWorks.tsx<br/>VerticalTimeline]
    PageContent --> ComingSoon[sections/ComingSoonBanner.tsx]
    PageContent --> ServicesGrid[sections/ServicesGrid.tsx<br/>ServicesCard x12]
    
    VerticalTimeline --> TLStep[ui/TimelineStep.tsx]:::composite
    TLStep --> StepNumber[ui/StepNumber.tsx]:::atomic
    TLStep --> GlassCard[ui/GlassCard.tsx]:::atomic
    
    ServicesCard --> GlassCard
    ServicesCard --> IconBox[ui/IconBox.tsx]:::atomic
    
    WhyChoose --> ServicesCard[ui/ServicesCard.tsx]:::composite
    
    Button[ui/Button.tsx<br/>variants: primary/outline/whatsapp]:::atomic
    
    classDef atomic fill:#e3f2fd,stroke:#2196f3
    classDef composite fill:#f3e5f5,stroke:#9c27b0
```

## Data Flow & State
- **Global**: No complex state (static landing) - use React Context if needed for theme
- **Local**:
  - Sidebar: `useState(open)` + `useEffect(scroll)`
  - Navbar: `useState(scrolled)`
  - Floating WA: `useState(visible)` based on scroll + hero visibility
- **Props**: Fully typed interfaces (e.g., `interface ServicesCardProps { title: string; desc: string; icon: LucideIcon }`)

## Styling Migration
```
CSS Variables → Tailwind config:
--teal-900: '#003d38' → theme.extend.colors.teal
--glass-bg: 'rgba(255,255,255,0.45)' → custom utilities [@apply backdrop-blur-md bg-glass/45 border-glass/60]
Liquid glass: CSS modules for ::before pseudo-elements, animations
Responsive: Tailwind classes matching existing @media breakpoints
```

## Todo List Progress
| # | Task | Status |
|---|------|--------|
| 1 | Assess existing code | [x] Completed |
| 2 | Identify UI patterns | [x] Completed |
| 3 | Detailed architecture w/ Mermaid | [-] In Progress (this file) |
| 4 | Next.js setup (App Router + TS + Tailwind) | [ ] Pending |
| ... (full list continues) |

## Implementation Phases (Specialist Order)
1. **Component Library** (todos 4-6): Atomic → Composite
2. **Layouts** (todos 7-13): Navbar/Sidebar/Footer/MainLayout
3. **Pages** (todos 14+): Assemble index, test, optimize

## Risks & Mitigations
- **Glassmorphism perf**: Use `will-change: transform` + hardware acceleration
- **Scroll effects**: Throttle with `useCallback` + `requestAnimationFrame`
- **Icons**: Migrate LineIcons to lucide-react (similar API)
- **Firebase**: Static export: `next build && next export`
- **SEO**: Metadata in app/layout.tsx

Ready for code mode execution.