import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
  try {
    const rows = await query<{ text: string }>(
      'SELECT text FROM hints ORDER BY hint_number'
    );
    const hintTexts = rows.map((r) => r.text);
    return NextResponse.json({ hints: hintTexts });
  } catch (err) {
    console.error('Failed to fetch hints:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}