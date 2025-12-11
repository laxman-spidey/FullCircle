import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getInfographicImages } from "@/lib/infographics";

export async function GET(request: NextRequest) {
    try {
        // Convert imported image objects to string paths for API response
        const infographicsObjects = getInfographicImages();
        const infographics = infographicsObjects.map(img => typeof img === 'string' ? img : img.src);
        return NextResponse.json({ infographics });
    } catch (error) {
        console.error("Error fetching infographics:", error);
        return NextResponse.json(
            {
                error: "Failed to fetch infographics",
            },
            { status: 500 },
        );
    }
}
