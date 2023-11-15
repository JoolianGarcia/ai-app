import EntryCard from "@/components/EntryCard";
import NewEntryCard from "@/components/NewEntryCard";
import { analyse } from "@/utils/ai";
import { getUserbyClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { emailAddresses } from "@clerk/nextjs/api";
import Link from "next/link";

const getEntries = async () => {
  const user = await getUserbyClerkID();
  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return entries;
};

// const getUserEmail = async () => {
//   const userEmail = await prisma.user.findUnique({
//     where: {
//       email,
//     },
//   });
//   return userEmail;
// };
const JournalPage = async () => {
  // console.log(getUserEmail() + "test");
  const entries = await getEntries();
  // console.log("entries", entries);
  return (
    <div className="p-4 bg-gray-200/50 h-screen">
      <h4>Entries</h4>
      <div className="grid grid-cols-4 gap-4 mt-4">
        <NewEntryCard />
        {entries.map((entry) => (
          <Link href={`/journal/${entry.id}`} key={entry.id}>
            <EntryCard entry={entry} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default JournalPage;
