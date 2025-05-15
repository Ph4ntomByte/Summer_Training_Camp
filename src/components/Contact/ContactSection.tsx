import { ContactForm } from '@/components/Contact/ContactForm'
export function ContactSection() {
  return (
    <section className="container mx-auto py-16">
      <h2 className="text-3xl font-bold text-forest-dark mb-4">Contact Us</h2>
      <ContactForm />
    </section>
  )
}