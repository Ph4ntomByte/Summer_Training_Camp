import { ButtonHTMLAttributes } from 'react'

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props} className="px-6 py-3 rounded-xl font-semibold">{props.children}</button>
}