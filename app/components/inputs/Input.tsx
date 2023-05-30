'use client'

import clsx from 'clsx'

interface InputProps {
  id: string
  type?: string
  disabled?: boolean
  placeholder?: string
}

const Input: React.FC<InputProps> = ({ id, type, disabled, placeholder }) => {
  return (
    <input
      id={id}
      type={type}
      autoComplete={id}
      disabled={disabled}
      placeholder={placeholder}
      className={clsx(
        `
    inline-block w-full rounded border-0 px-2 py-2 text-white bg-slate-700
    shadow-sm ring-1 ring-inset ring-slate-800 placeholder:text-gray-500
    focus:outline-none focus:ring-slate-800 sm:text-sm sm:leading-6`,
        disabled && 'opacity-50 cursor-default'
      )}
    />
  )
}

export default Input
