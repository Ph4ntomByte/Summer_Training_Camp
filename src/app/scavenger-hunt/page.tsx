'use client'

import { useState, FormEvent } from 'react'
import { SectionHeading } from '@/components/SectionHeading/SectionHeading'
import { Button } from '@/components/UI/Button'

export default function ScavengerHuntPage() {
    const [team, setTeam] = useState('')
    const [file, setFile] = useState<File | null>(null)
    const [msg, setMsg] = useState<string | null>(null)

    async function handleSubmit(e: FormEvent) {
        e.preventDefault()
        if (!team) {
            setMsg('Please select your team.')
            return
        }
        if (!file) {
            setMsg('Please choose a file to upload.')
            return
        }
        const form = new FormData()
        form.set('team', team)
        form.set('file', file)
        const res = await fetch('/api/hunt', { method: 'POST', body: form })
        const json = await res.json()
        setMsg(json.success ? 'Submission received!' : `Error: ${json.error}`)
    }

    return (
        <main className="min-h-screen bg-gradient-to-b from-[#2E7D32] via-[#E91E63] to-[#2E7D32] text-white py-16">
            <div className="container mx-auto px-4 max-w-lg space-y-8">
                <SectionHeading>Scavenger Hunt</SectionHeading>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <p className="mb-4">
                        <strong>Hint #1:</strong> Look for the lotus carving by the main entrance, take a photo, and upload it here along with your team name.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <label className="block">
                            <span>Team</span>
                            <select
                                className="mt-1 block w-full bg-white/20 text-white p-2 rounded"
                                value={team}
                                onChange={e => setTeam(e.target.value)}
                            >
                                <option value="" disabled>
                                    — Select Team —
                                </option>
                                <option>Team 1</option>
                                <option>Team 2</option>
                                <option>Team 3</option>
                                <option>Team 4</option>
                            </select>
                        </label>

                        <label className="block">
                            <span>Upload Photo</span>
                            <input
                                type="file"
                                accept="image/*,video/*"
                                className="mt-1 block w-full text-white"
                                onChange={e => setFile(e.target.files?.[0] ?? null)}
                            />
                        </label>

                        <Button type="submit">Submit</Button>
                    </form>

                    {msg && <p className="mt-4 text-center">{msg}</p>}
                </div>
            </div>
        </main>
    )
}