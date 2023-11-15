import { analyse } from "@/utils/ai";
import { getUserbyClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const POST = async () => {
  const user = await getUserbyClerkID();
  const entry = await prisma.journalEntry.create({
    data: {
      userId: user.id,
      content: "new data entry",
    },
  });

  const analysis = await analyse(entry.content);
  await prisma.analysis.create({
    data: {
      entryId: entry.id,
      ...analysis,
    },
  });
  revalidatePath("/journal");
  return NextResponse.json({ data: entry });
};
