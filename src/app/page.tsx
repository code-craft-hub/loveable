import prisma from "@/lib/db"

const Home = async() => {
  const users  = await prisma.user.findMany()
  console.log(users)
  return (
    <div>
      <h1>Home</h1>
      {JSON.stringify(users, null, 2)}
    </div>
  )
}

export default Home
