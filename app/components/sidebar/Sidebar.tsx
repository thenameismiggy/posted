import getCurrentUser from '@/app/actions/getCurrentUser'
import DesktopSidebar from './DesktopSidebar'

const Sidebar = async () => {
  const currentUser = await getCurrentUser()

  return <DesktopSidebar currentUser={currentUser!} />
}

export default Sidebar
