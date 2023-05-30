import getCurrentUser from '@/app/actions/getCurrentUser'
import Avatar from '../Avatar'

const CreatePost = async () => {
  const currentUser = await getCurrentUser()

  return (
    <div className="bg-slate-600 w-full rounded px-4 py-4 flex flex-row space-x-4 drop-shadow-md">
      <Avatar user={currentUser!} />
      <div className="w-full bg-slate-700 rounded px-2 py-2 text-gray-400 hover:bg-slate-800/75">
        Start a post
      </div>
    </div>
  )
}

export default CreatePost
