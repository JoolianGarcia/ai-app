import Editor from "@/components/Editor";
import { getUserbyClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";

const getEntry = async (id) => {
  const user = await getUserbyClerkID();
  const entry = await prisma.journalEntry.findUnique({
    where: {
      userId_id: {
        userId: user.id,
        id,
      },
    },
    include: {
      analysis: true,
    },
  });

  return entry;
};

const EntryPage = async ({ params }) => {
  const entry = await getEntry(params.id);
  const analysisData = [
    { name: "Summary", value: entry?.analysis?.summary },
    { name: "Subject", value: entry?.analysis?.subject },
    { name: "Score", value: entry?.analysis?.negative ? "True" : "False " },
  ];
  return (
    <div className="p-4 bg-gray-200/75 h-screen w-full grid grid-cols-3">
      <div className="col-span-2">
        {params.id}
        <Editor entry={entry} />
      </div>
      <div className="border-l p-4">
        sidebar
        <ul>
          {analysisData.map((item) => (
            <li className="flex items-center justify-between" key={item.name}>
              {item.name}
              {item.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EntryPage;
