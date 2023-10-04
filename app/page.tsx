import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { AuthOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(AuthOptions);

  return (
    <main className="relative h-screen">
      <h1>
        Hello {session && <span>{session.user!.name}</span>}
      </h1>

      {/* <Image
        src="https://bit.ly/react-cover"
        alt="project photo"
        fill
        className="object-cover"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={75}
        priority
      /> */}
    </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const product = await fetch('');
  return {
    title: 'product.title',
    description: "..."
  }
}
