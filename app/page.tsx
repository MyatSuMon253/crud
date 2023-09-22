import { faker } from "@faker-js/faker";
import { revalidatePath } from "next/cache";
import Button from "./components/Button";
import db from "./modules/db";

const Home = async () => {
  const posts = await db.post.findMany({orderBy: {createdAt: 'desc'}})

  const generatePosts = async () => {
    'use server';

    await db.post.createMany({
      data: [
        {content: faker.lorem.sentence()},
        {content: faker.lorem.sentence()},
        {content: faker.lorem.sentence()},
      ]
    });
    revalidatePath('/')
  }

  return (
    <main>
      <Button onClick={generatePosts} className=" border-green-500">Generate Posts</Button>

      {posts?.map(post => (<div key={post.id}>{post.content}</div>))}
    </main>
  )
}

export default Home