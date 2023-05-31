import ChatList from '../components/ChatList'
import CreatePost from '../components/inputs/CreatePost'

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="w-full mx-4 my-4">{children}</div>
      <ChatList />
    </>
  )
}

export default HomeLayout
