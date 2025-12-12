"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

interface ImageSliderProps {
    images: Array<string | { src: string }>; // Accept either string paths or imported image objects
    autoPlay?: boolean;
    interval?: number;
    showControls?: boolean;
    showIndicators?: boolean;
    className?: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
    images = [],
    autoPlay = true,
    interval = 5000,
    showControls = true,
    showIndicators = true,
    className = "",
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // Auto-play functionality
    useEffect(() => {
        if (autoPlay && !isPaused && images.length > 1) {
            intervalRef.current = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, interval);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [autoPlay, isPaused, images.length, interval]);

    // Handle manual navigation
    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1,
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1,
        );
    };

    // Pause auto-play when hovering over the slider
    const handleMouseEnter = () => {
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
    };

    if (images.length === 0) {
        return (
            <div className="w-full h-64 flex items-center justify-center bg-gray-200">
                No images available
            </div>
        );
    }

    return (
        <div
            className={`relative  rounded-lg ${className} ImageSlider`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Slides container with liquid glass effect */}
            <div className="relative w-full liquid-glass  aspect-video">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === currentIndex
                            ? "opacity-100 z-10"
                            : "opacity-0 z-0"
                            }`}
                    >
                        {/* Blurred background image */}
                        <div className="absolute inset-0 overflow-hidden rounded-lg z-0">
                            <Image
                                src={typeof image === 'string' ? image : image.src}
                                alt={`Slide ${index + 1} background`}
                                fill
                                className="w-full h-full object-cover brightness-[0.9] saturate-150 blur-sm"
                                priority={false}
                            />
                        </div>

                        {/* Main image */}
                        <Image
                            src={typeof image === 'string' ? image : image.src}
                            alt={`Slide ${index + 1}`}
                            fill
                            className="w-full h-full object-contain rounded-lg z-10"
                            priority={index === 0}
                        />
                    </div>
                ))}
            </div>

            {/* Navigation arrows */}
            {showControls && images.length > 1 && (
                <>
                    <button
                        onClick={goToPrevious}
                        className="absolute -left-5 top-1/2 -translate-y-1/2 bg-[var(--glass-bg)] hover:bg-white text-[var(--teal-900)] rounded-full w-10 h-10 flex items-center justify-center shadow-md z-20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--teal-500)] backdrop-blur-[var(--glass-blur)] border border-[var(--glass-border)] !rounded-full shrink-0 overflow-hidden"
                        aria-label="Previous slide"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>

                    <button
                        onClick={goToNext}
                        className="absolute -right-5 top-1/2 -translate-y-1/2 bg-[var(--glass-bg)] hover:bg-white text-[var(--teal-900)] rounded-full w-10 h-10 flex items-center justify-center shadow-md z-20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--teal-500)] backdrop-blur-[var(--glass-blur)] border border-[var(--glass-border)] !rounded-full shrink-0 overflow-hidden"
                        aria-label="Next slide"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </>
            )}

            {/* Indicators */}
            {showIndicators && images.length > 1 && (
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                ? "bg-[var(--white)] w-6"
                                : "bg-[var(--glass-bg)] hover:bg-white/75 border border-[var(--glass-border)]"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ImageSlider;
