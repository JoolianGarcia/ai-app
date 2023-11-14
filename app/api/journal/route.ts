import { getUserbyClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async () => {
  const user = await getUserbyClerkID();
  const entry = await prisma.journalEntry.create({
    data: {
      userId: user.id,
      content: "new data entry",
    },
  });

  return NextResponse.json({ data: entry });
};
