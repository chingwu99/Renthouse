'use client'

import React from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

import useFavorite from '../hook/useFavorite'
import { SafeUser } from '../types'

interface HeartButtonProp {
  listingId: string
  currentUser?: SafeUser | null
}

const HeartButton: React.FC<HeartButtonProp> = ({ listingId, currentUser }) => {
  const { hasFavorited, toggleFavorite } = useFavorite({
    listingId,
    currentUser,
  })

  return (
    <div onClick={toggleFavorite} className="relative cursor-pointer transition hover:opacity-80">
      <AiOutlineHeart size={28} className="absolute -right-[2px] -top-[2px] fill-white" />

      <AiFillHeart size={24} className={hasFavorited ? `fill-rose-500` : `fill-neutral-500/70`} />
    </div>
  )
}

export default HeartButton
