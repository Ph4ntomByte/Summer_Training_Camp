import { InputHTMLAttributes } from 'react'
export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className="w-full p-3 border border-campGray-dark rounded focus:outline-none focus:ring-2 focus:ring-forest" />
}