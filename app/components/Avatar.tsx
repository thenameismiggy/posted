'use client'

import { User } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'

interface AvatarProps {
  user?: User
}

const Avatar: React.FC<AvatarProps> = ({ user }) => {
  return (
    <div className="relative inline-block rounded-3xl overflow-hidden h-9 w-9 md:h-11 md:w-11 hover:rounded-md transition-all">
      <Link href={`/users/${user?.id}`}>
        <Image fill src={user?.image || 'next.svg'} alt="Avatar" />
      </Link>
    </div>
  )
}

export default Avatar
