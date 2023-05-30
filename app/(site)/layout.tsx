import CreatePost from '../components/inputs/CreatePost'

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full mx-4 my-4">
      {/* @ts-expect-error Server Component */}
      <CreatePost />
      {children}
    </div>
  )
}

export default HomeLayout
