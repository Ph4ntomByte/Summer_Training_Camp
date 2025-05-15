import { useState } from 'react'
export function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="w-full p-3 border rounded" />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full p-3 border rounded" />
      <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" className="w-full p-3 border rounded h-32" />
      <button type="submit" className="px-6 py-3 bg-forest DEFAULT text-white rounded-xl">Send</button>
    </form>
  )
}