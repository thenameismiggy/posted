import { signOut } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'
import { HiMail } from 'react-icons/hi'
import {
  HiArrowLeftOnRectangle,
  HiArrowRightOnRectangle,
  HiHome,
  HiUsers,
} from 'react-icons/hi2'

const useRoutes = () => {
  const pathname = usePathname()

  const routes = useMemo(
    () => [
      {
        label: 'Home',
        href: '/',
        icon: HiHome,
        active: pathname === '/',
      },
      {
        label: 'Friends',
        href: '/friends',
        icon: HiUsers,
        active: pathname === '/friends',
        visibility: 'loggedIn',
      },
      {
        label: 'Messages',
        href: '/messages',
        icon: HiMail,
        active: pathname === '/messages',
        visibility: 'loggedIn',
      },
      {
        label: 'Log Out',
        href: '#',
        onClick: () => signOut(),
        icon: HiArrowRightOnRectangle,
        visibility: 'loggedIn',
      },
      {
        label: 'Log In',
        href: '/api/auth/signin',
        icon: HiArrowLeftOnRectangle,
        visibility: 'loggedOut',
      },
    ],
    [pathname]
  )

  return routes
}

export default useRoutes
