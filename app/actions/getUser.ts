import prisma from '@/app/libs/prismadb'

const getUser = async (id: string) => {
  try {
    if (!id) {
      return null
    }

    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    })

    if (!user) {
      return null
    }

    return user
  } catch (error: any) {
    return null
  }
}

export default getUser
