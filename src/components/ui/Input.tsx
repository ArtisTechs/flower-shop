import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string
}

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string
  error?: string
}

export function Input({ label, error, id, ...props }: InputProps) {
  const inputId = id ?? props.name

  return (
    <label className="field" htmlFor={inputId}>
      <span>{label}</span>
      <input id={inputId} aria-invalid={Boolean(error)} aria-describedby={error ? `${inputId}-error` : undefined} {...props} />
      {error && <small id={`${inputId}-error`}>{error}</small>}
    </label>
  )
}

export function Textarea({ label, error, id, ...props }: TextareaProps) {
  const inputId = id ?? props.name

  return (
    <label className="field" htmlFor={inputId}>
      <span>{label}</span>
      <textarea id={inputId} aria-invalid={Boolean(error)} aria-describedby={error ? `${inputId}-error` : undefined} {...props} />
      {error && <small id={`${inputId}-error`}>{error}</small>}
    </label>
  )
}
