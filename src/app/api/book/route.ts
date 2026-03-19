import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, date, notes } = body;

    // Validate required fields
    if (!name || !email || !phone || !service || !date) {
      return NextResponse.json(
        { error: "Name, email, phone, service, and date are required." },
        { status: 400 }
      );
    }

    // TODO: Replace with actual backend API call
    // Example: Send to Express backend
    // const response = await fetch('https://api.thecloudrental.com/api/book', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ name, email, phone, service, date, notes }),
    // });

    console.log("Booking submission:", {
      name,
      email,
      phone,
      service,
      date,
      notes,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Booking confirmed! We will contact you shortly to confirm details.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
