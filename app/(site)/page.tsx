import CreatePost from '../components/inputs/CreatePost'

const Home = async () => {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <CreatePost />
    </>
  )
}

export default Home
