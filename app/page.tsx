"use client";
// import HeavyComponent from "@/components/HeavyComponent";
import _ from "lodash";
import { useState } from "react";

// const HeavyComponent = dynamic(() => import("../components/HeavyComponent"), {
//   ssr: false,
//   loading: () => <p>Loading...</p>,
// });

export default function Home() {
  const [visible, setVisible] = useState(false);

  return (
    <main className="relative h-screen">
      <h1>Hello </h1>
      <button className="bg-yellow-400" onClick={async () => {
        const x = (await import ('lodash')).default;
        console.log(x);
        const users = [
          {name: 'c'},
          {name: 'b'},
          {name: 'a'}
        ]
        const sorted = _.orderBy(users, ['name']);
        console.log(sorted);
      }} >Show</button>
      {/* {visible && <HeavyComponent />} */}
    </main>
  );
}

// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetch("");
//   return {
//     title: "product.title",
//     description: "...",
//   };
// }
