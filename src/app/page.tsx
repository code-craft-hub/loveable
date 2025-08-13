"use client"
import prisma from "@/lib/db";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

const Home =  () => {
  // const users = await prisma.user.findMany();
  // console.log(users);

  const trpc = useTRPC();
  const { data } = useQuery(
    trpc.createAI.queryOptions({ text: "Hello world!" })
  );

  return (
    <div>
      <h1>Home</h1>
      {JSON.stringify(data, null, 2)}
    </div>
  );
};

export default Home;
