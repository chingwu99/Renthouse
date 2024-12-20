'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Logo = () => {
  const router = useRouter()
  return (
    <div>
      <Image
        onClick={() => router.push('/')}
        src="/images/logo.png"
        alt="Logo"
        className="hidden  cursor-pointer md:block"
        height="100"
        width="100"
      />
    </div>
  )
}

export default Logo
