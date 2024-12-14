'use client'

import { useRouter } from 'next/navigation'
import { AiOutlineMenu } from 'react-icons/ai'
import { useCallback, useState } from 'react'
import { signOut } from 'next-auth/react'

import useRegisterModal from '@/app/hook/useRegisterModal'
import useLoginModal from '@/app/hook/useLoginModal'
import useRentModal from '@/app/hook/useRentModal'
import { SafeUser } from '@/app/types'

import Avatar from '../Avatar'

import MenuItem from './MenuItem'

interface UserMenuProps {
  currentUser?: SafeUser | null
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const router = useRouter()
  const loginModal = useLoginModal()
  const registerModal = useRegisterModal()
  const rentModal = useRentModal()

  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value)
  }, [])

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen()
    }

    // Open Rent Modal
    rentModal.onOpen()
  }, [currentUser, loginModal, rentModal])

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={onRent}
          className="hidden cursor-pointer rounded-full px-4 py-3 text-sm font-semibold hover:bg-neutral-100 md:block"
        >
          Renthouse your home
        </div>
        <div
          onClick={toggleOpen}
          // eslint-disable-next-line max-len
          className="md-px-2 flex cursor-pointer flex-row items-center gap-3 rounded-full border-[1px] border-neutral-200 p-4 transition hover:shadow-md md:py-1"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>

      {isOpen && (
        // eslint-disable-next-line max-len
        <div className="absolute right-0 top-12 w-[40vw] overflow-hidden rounded-xl bg-white text-sm shadow-md md:w-3/4">
          <div className="flex cursor-pointer flex-col">
            {currentUser ? (
              <>
                <MenuItem onClick={() => router.push(`/trips`)} label="My trips" />
                <MenuItem onClick={() => router.push(`/favorites`)} label="My favorites" />
                <MenuItem onClick={() => router.push(`/reservations`)} label="My reservations" />
                <MenuItem onClick={() => router.push(`/properties`)} label="My properties" />
                <MenuItem onClick={rentModal.onOpen} label="Renthouse my home" />
                <hr />
                <MenuItem label="Logout" onClick={() => signOut()} />
              </>
            ) : (
              <>
                <MenuItem onClick={loginModal.onOpen} label="Login" />
                <MenuItem onClick={registerModal.onOpen} label="Sign up" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default UserMenu
