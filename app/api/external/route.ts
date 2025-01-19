import { NextResponse } from "next/server";

const EXTERNAL_API_URL = "https://jsonplaceholder.typicode.com/posts";

export async function GET() {
    try {
        const response = await fetch(EXTERNAL_API_URL);

        if (!response.ok) {
            return NextResponse.json(
                { success: false, message: "Failed to fetch the data from the API" },
                { status: response.status }
            );
        }

        const data = await response.json();

        return NextResponse.json({ success: true, data });
    } catch (error) {
        if (error instanceof Error) {
            console.error("Fetch error:", error); // Server logs for debugging
            return NextResponse.json(
                { success: false, message: "An error occurred", error: error.message },
                { status: 500 }
            );
        }
        console.error("Unknown error:", error);
        return NextResponse.json(
            { success: false, message: "An unknown error occurred" },
            { status: 500 }
        );
    }
}
