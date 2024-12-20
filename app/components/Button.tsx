'use client'

import React from 'react'
import { IconType } from 'react-icons'

interface ButtonProps {
  label: string
  // eslint-disable-next-line
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  outline?: boolean
  small?: boolean
  icon?: IconType
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled, outline, small, icon: Icon }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    // eslint-disable-next-line max-len
    className={`relative w-full rounded-lg transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-70 ${outline ? `bg-white` : `bg-[#FFAC75]`} ${outline ? `border-black` : `bg-[#FFAC75]`} ${outline ? `text-black` : `text-white`} ${small ? `py-1` : `py-3`} ${small ? `text-sm` : `text-md`} ${small ? `font-light` : `font-semibold`} ${small ? `border-[1px]` : `border-2`} `}
  >
    {Icon && <Icon size={24} className="absolute left-4 top-3" />}
    {label}
  </button>
)

export default Button
