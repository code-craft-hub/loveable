import { ModeToggle } from "@/components/toggle-mode";
import prisma from "@/lib/db";
import { useTRPC } from "@/trpc/client";
import { caller } from "@/trpc/server";
import { useQuery } from "@tanstack/react-query";

const Home =  async () => {
  // const users = await prisma.user.findMany();
  // console.log(users);

  // const trpc = useTRPC();
  // const { data } = useQuery(
  //   trpc.createAI.queryOptions({ text: "Hello world!" })
  // );

const data = await caller.createAI({ text: "Hello world!" })
  return (
    <div>
      <h1>Home</h1>
      {JSON.stringify(data, null, 2)}
      <ModeToggle />
    </div>
  );
};

export default Home;
