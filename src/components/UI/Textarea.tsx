import { TextareaHTMLAttributes } from 'react'
export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className="w-full p-3 border border-campGray-dark rounded focus:outline-none focus:ring-2 focus:ring-forest" />
}