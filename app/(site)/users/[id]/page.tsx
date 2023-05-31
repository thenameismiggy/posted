import getUser from '@/app/actions/getUser'

const UserProfile = async ({ params }: { params: { id: string } }) => {
  const user = await getUser(params.id)

  return (
    <div className="flex flex-row justify-center space-x-4">
      <div className="bg-slate-600 rounded drop-shadow-md w-full">a</div>
      <div className="bg-slate-600 rounded drop-shadow-md w-80">a</div>
    </div>
  )
}

export default UserProfile
