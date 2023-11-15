import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const DashboardLayout = ({ children }) => {
  return (
    <div className="h-screen w-screen relative">
      {/* <aside className="absolute top-0 left-0 h-full border-r w-[200px] ">
        AI app
      </aside> */}
      <div>
        <header className="h-auto border-b flex items-center px-4">
          <a href="">
            <Link href={"/journal"}>home</Link>
          </a>
          <div className=" w-full flex items-center justify-end p-4">
            <UserButton />
          </div>
        </header>
      </div>
      <div>{children}</div>
    </div>
  );
};
export default DashboardLayout;
