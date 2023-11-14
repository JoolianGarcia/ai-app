"use client";

import { createNewEntry } from "@/utils/api";
import { useRouter } from "next/navigation";

const NewEntryCard = () => {
  const router = useRouter();
  const handleOnClick = async () => {
    const data = await createNewEntry();
    router.push(`journal/${data.id}`);
  };
  return (
    <figure
      className="bg-white p-4 rounded-md cursor-pointer"
      onClick={handleOnClick}
    >
      <div>New Entry</div>
    </figure>
  );
};

export default NewEntryCard;
