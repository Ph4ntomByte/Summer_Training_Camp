'use client'
import { useState } from 'react'

export default function SubscribeForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error(await res.text())
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        type="email"
        required
        value={email}
        onChange={e=>setEmail(e.target.value)}
        placeholder="Your email"
        className="px-4 py-2 rounded-md w-full"
      />
      <button
        type="submit"
        disabled={status==='sending' || status==='success'}
        className="px-6 py-2 bg-green-600 rounded-md text-white"
      >
        {status==='sending' ? 'Signing up…'
         : status==='success' ? 'You’ll hear from us!'
         : 'Notify me'}
      </button>
      {status==='error' && <p className="text-red-400">Oops! Try again.</p>}
    </form>
  )
}