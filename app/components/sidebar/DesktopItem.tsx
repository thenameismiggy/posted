import Link from 'next/link'

interface DesktopItemProps {
  label: string
  icon: any
  href: string
  onClick?: () => void
  active?: boolean
}

const DesktopItem: React.FC<DesktopItemProps> = ({
  label,
  href,
  icon: Icon,
  active,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick()
    }
  }

  return (
    <li onClick={handleClick} key={label}>
      <Link
        href={href}
        className="
            group 
            flex 
            gap-x-3 
            rounded-3xl
            p-3
            text-sm 
            leading-6 
            font-semibold 
            bg-slate-500
            text-slate-200
            transition-all
            hover:rounded-md">
        <Icon className="h-6 w-6 shrink-0" aria-hidden="true" />
        <span className="sr-only">{label}</span>
      </Link>
    </li>
  )
}

export default DesktopItem
