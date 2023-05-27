'use client'

import { useSession } from 'next-auth/react'

const Home = () => {
  const session = useSession()
  console.log(session)

  return (
    <>{session?.status === 'authenticated' ? 'logged in' : 'not logged in'}</>
  )
}

export default Home
