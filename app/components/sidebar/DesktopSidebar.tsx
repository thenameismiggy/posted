'use client'

import useRoutes from '@/app/hooks/useRoutes'
import { User } from '@prisma/client'
import { useSession } from 'next-auth/react'
import DesktopItem from './DesktopItem'

interface DesktopSidebarProps {
  currentUser: User
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({ currentUser }) => {
  const routes = useRoutes()
  const session = useSession()

  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:w-16 xl:px-6 lg:overflow-y-auto lg:bg-slate-800 lg:border-slate-800 lg:border-r-[1px] lg:pb-4 lg:flex lg:flex-col justify-between">
      <nav className="mt-4 flex flex-col justify-between">
        <ul role="list" className="flex flex-col items-center space-y-2">
          {session?.status === 'authenticated'
            ? routes
                .filter((item) => item.visibility !== 'loggedOut')
                .map((item) => (
                  <DesktopItem
                    key={item.label}
                    href={item.href}
                    label={item.label}
                    icon={item.icon}
                    active={item.active}
                    onClick={item.onClick}
                  />
                ))
            : routes
                .filter((item) => item.visibility !== 'loggedIn')
                .map((item) => (
                  <DesktopItem
                    key={item.label}
                    href={item.href}
                    label={item.label}
                    icon={item.icon}
                    active={item.active}
                    onClick={item.onClick}
                  />
                ))}
        </ul>
      </nav>
    </div>
  )
}

export default DesktopSidebar
