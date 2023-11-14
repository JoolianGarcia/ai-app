import { UserButton } from "@clerk/nextjs";
import { Bowlby_One } from "next/font/google";

const bowlbyone = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <main>
      <div className="h-screen max-w-[1096px] mx-auto pt-20">
        <h1 className={bowlbyone.className}>Chatlytics Discover</h1>
        <h4 className="mt-2 text-gray-600">
          Revolutionize Decision-Making with Chatlytics Discover: Harness the
          power of conversations to unveil key insights, drive engagement, and
          inspire innovation.
        </h4>
        <button className="bg-green-600 text-white px-4 py-2 mt-4 rounded-md">
          Try our product
        </button>
        <button className="bg-green-600 text-white px-4 py-2 mt-4 rounded-md">
          <UserButton afterSignOutUrl="/" />
        </button>
      </div>
    </main>
  );
}
