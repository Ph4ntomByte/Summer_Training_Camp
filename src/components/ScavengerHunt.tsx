'use client'

import { useState } from 'react'
import { Button } from '@/components/UI/Button'

interface HuntItem {
    label: string
    hint: string
}

const ITEMS: HuntItem[] = [
    { label: 'Lotus Flower', hint: 'Find a pink lotus in our lobby garden.' },
    { label: 'Camp Sign', hint: 'Locate the big “Welcome” sign at the entrance.' },
    { label: 'Map Board', hint: 'Snap a pic of the map board in the main hall.' },
]

export default function ScavengerHunt() {
    const [step, setStep] = useState(0)
    const [file, setFile] = useState<File | null>(null)
    const [status, setStatus] = useState<'idle' | 'uploaded' | 'error'>('idle')

    const item = ITEMS[step]

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files?.[0] ?? null)
        setStatus('idle')
    }

    async function handleSubmit() {
        if (!file) {
            setStatus('error')
            return
        }
        const formData = new FormData()
        formData.append('file', file)

        const res = await fetch('/api/hunt', {
            method: 'POST',
            body: formData,
        })

        if (res.ok) {
            setStatus('uploaded')
        } else {
            setStatus('error')
        }
    }

    return (
        <div className="max-w-md mx-auto bg-white/10 p-6 rounded-lg space-y-4">
            <h2 className="text-2xl font-bold text-white">
                Hunt for: {item.label}
            </h2>
            <p className="text-white/80">{item.hint}</p>

            <input
                type="file"
                accept="image/*,video/*"
                onChange={handleFileChange}
                className="text-sm text-white"
            />

            {status === 'error' && (
                <p className="text-red-400 text-sm">Please upload a photo or video.</p>
            )}
            {status === 'uploaded' && (
                <p className="text-green-400 text-sm">Nice! Ready for the next one.</p>
            )}

            <div className="flex justify-between">
                <Button
                    onClick={() => setStep(s => Math.max(0, s - 1))}
                    disabled={step === 0}
                >
                    ← Prev
                </Button>
                {status === 'uploaded' ? (
                    <Button
                        onClick={() => {
                            setFile(null)
                            setStatus('idle')
                            setStep(s => Math.min(ITEMS.length - 1, s + 1))
                        }}
                    >
                        Next →
                    </Button>
                ) : (
                    <Button onClick={handleSubmit}>Submit</Button>
                )}
            </div>

            {step === ITEMS.length - 1 && status === 'uploaded' && (
                <p className="text-center text-white font-semibold">
                    🎉 You’ve completed the Scavenger Hunt!
                </p>
            )}
        </div>
    )
}