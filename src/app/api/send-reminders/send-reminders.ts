import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // TODO: implement your reminder‐sending logic here.
    console.log('Running scheduled “send-reminders” task')

    return NextResponse.json({ sent: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Reminder send failed' }, { status: 500 })
  }
}