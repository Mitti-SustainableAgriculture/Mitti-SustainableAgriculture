import { NextResponse } from 'next/server';

export async function POST(request) {
    const data = await request.json();

    try {
        const response = await fetch(`${process.env.CROP_RECOMMENDATION_BACKEND_URL}/predict`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to connect to Mitti backend' }, { status: 500 });
    }
}
