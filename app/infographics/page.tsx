"use client";

import { useState, useEffect } from "react";
import ImageSlider from "@/components/ImageSlider";
import { Header } from "@/components/Header";

export default function InfographicsPage() {
    const [infographics, setInfographics] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchInfographics = async () => {
            try {
                const response = await fetch("/api/infographics");
                if (!response.ok) {
                    throw new Error("Failed to fetch infographics");
                }
                const data = await response.json();
                setInfographics(data.infographics);
            } catch (err) {
                setError(
                    err instanceof Error
                        ? err.message
                        : "An unknown error occurred",
                );
            } finally {
                setLoading(false);
            }
        };

        fetchInfographics();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500 mx-auto"></div>
                    <p className="mt-4 text-lg text-gray-700">
                        Loading infographics...
                    </p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-red-600">
                        Error Loading Infographics
                    </h2>
                    <p className="mt-2 text-gray-700">{error}</p>
                    <p className="mt-4 text-gray-600">
                        Please try again later.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="py-12 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
                            Service Infographics
                        </h1>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                            Discover how we can help with various services
                            through our visual guides.
                        </p>
                    </div>

                    <div id="image-slider" className="liquid-glass p-6 mb-12">
                        <ImageSlider
                            images={infographics}
                            autoPlay={true}
                            interval={5000}
                            showControls={true}
                            showIndicators={true}
                            className="w-full h-full"
                        />
                    </div>

                    <div id="image-slider" className="liquid-glass p-6 mb-12">
                        <ImageSlider
                            images={infographics}
                            autoPlay={true}
                            interval={5000}
                            showControls={true}
                            showIndicators={true}
                            className="w-full h-full"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {infographics.map((image, index) => {
                            // Extract title from image filename
                            const title =
                                image
                                    .split("/")
                                    .pop() // Get the filename
                                    ?.replace(".jpeg", "") // Remove extension
                                    .replace(/-/g, " ") // Replace hyphens with spaces
                                    .split(" ")
                                    .map(
                                        (word) =>
                                            word.charAt(0).toUpperCase() +
                                            word.slice(1),
                                    )
                                    .join(" ") || `Infographic ${index + 1}`;

                            return (
                                <div
                                    key={index}
                                    className="liquid-glass overflow-hidden hover:shadow-lg transition-shadow"
                                >
                                    <img
                                        src={image}
                                        alt={`Infographic ${index + 1}`}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="font-medium text-[var(--teal-900)]">
                                            {title}
                                        </h3>
                                        <p className="text-sm text-[var(--teal-900)] opacity-75 mt-1">
                                            Service Guide
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
