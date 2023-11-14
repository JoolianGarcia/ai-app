import { UserButton } from "@clerk/nextjs";

const DashboardLayout = ({ children }) => {
  return (
    <div className="h-screen w-screen relative">
      <aside className="absolute top-0 left-0 h-full border-r w-[200px] ">
        AI app
      </aside>
      <div className="ml-[200px] ">
        <header className="h-[60px] border-b">
          <div className=" w-full flex items-center justify-end p-4">
            <UserButton />
          </div>
        </header>
      </div>
      <div className="ml-[200px] ">{children}</div>
    </div>
  );
};
export default DashboardLayout;
