import { NextResponse } from 'next/server';

// This simple API endpoint can be used as a baseline for k6 load tests.
export async function GET() {
  return NextResponse.json({ status: 'ok' });
}