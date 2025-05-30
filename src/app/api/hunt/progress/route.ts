import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const team = searchParams.get('team');

        if (!team) {
            return NextResponse.json(
                { error: 'Team is required' },
                { status: 400 }
            );
        }

        const result = await query<{ current_step: number; completed_hints: number[] }>(
            'SELECT current_step, completed_hints FROM team_progress WHERE team = $1',
            [team]
        );

        if (result.length === 0) {
            await query(
                'INSERT INTO team_progress (team, current_step, completed_hints) VALUES ($1, 0, $2)',
                [team, '[]']
            );
            return NextResponse.json({ currentStep: 0, completedHints: [] });
        }

        return NextResponse.json({
            currentStep: result[0].current_step,
            completedHints: result[0].completed_hints
        });
    } catch (error) {
        console.error('Progress fetch error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const { team, currentStep, completedHint } = await request.json();

        if (!team || currentStep === undefined || completedHint === undefined) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        await query(
            `UPDATE team_progress 
             SET current_step = $1, 
                 completed_hints = completed_hints || $2::jsonb
             WHERE team = $3`,
            [currentStep, JSON.stringify([completedHint]), team]
        );

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Progress update error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
} 