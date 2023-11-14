import { Bowlby_One } from "next/font/google";
import { auth } from "@clerk/nextjs";
import Link from "next/link";

const bowlby = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
});

export default async function Home() {
  const { userId } = await auth();

  let href = userId ? "/journal" : "/new-user";

  return (
    <main>
      <div className="h-screen max-w-[1096px] mx-auto pt-20">
        <h1 className={bowlby.className}>Chatlytics Discover</h1>
        <h4 className="mt-2 text-gray-600">
          Revolutionize Decision-Making with Chatlytics Discover: Harness the
          power of conversations to unveil key insights, drive engagement, and
          inspire innovation.
        </h4>
        <Link href={href}>
          <button className="bg-green-600 text-white px-4 py-2 mt-4 rounded-md">
            Try our product
          </button>
        </Link>
      </div>
    </main>
  );
}
