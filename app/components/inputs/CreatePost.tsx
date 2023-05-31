import getCurrentUser from '@/app/actions/getCurrentUser'
import Avatar from '../Avatar'
import PostBox from './PostBox'

const CreatePost = async () => {
  const currentUser = await getCurrentUser()

  return (
    <div className="bg-slate-600 w-full rounded px-4 py-4 flex flex-row space-x-4 drop-shadow-md">
      <Avatar user={currentUser!} />
      <PostBox />
    </div>
  )
}

export default CreatePost
