'use client'

import useRoutes from '@/app/hooks/useRoutes'
import { User } from '@prisma/client'
import Avatar from '../Avatar'
import DesktopItem from './DesktopItem'

interface DesktopSidebarProps {
  currentUser: User
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({ currentUser }) => {
  const routes = useRoutes()

  return (
    <div className="hidden lg:w-16 xl:px-6 lg:overflow-y-auto lg:bg-slate-800 lg:border-slate-800 lg:border-r-[1px] lg:pb-4 lg:flex lg:flex-col justify-between">
      <nav className="mt-4 flex flex-col justify-between">
        <ul role="list" className="flex flex-col items-center space-y-2">
          {currentUser !== null
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
      <nav className="mt-4 flex flex-col justify-between items-center">
        <div className="cursor-pointer">
          <Avatar user={currentUser} />
        </div>
      </nav>
    </div>
  )
}

export default DesktopSidebar
