//import type { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request, context: any) {
    const data = await request.json();
    console.log('name =', data.name);
    console.log('email =', data.email);
    console.log('message =', data.message);
}