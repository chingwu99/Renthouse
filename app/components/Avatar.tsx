'use client'

import Image from 'next/image'

interface AvatarProps {
  src: string | null | undefined
}

const Avatar: React.FC<AvatarProps> = ({ src }) => (
  <Image className="rounded-full" height="30" width="30" alt="Avater" src={src || '/images/placeholder.jpg'} />
)

export default Avatar
