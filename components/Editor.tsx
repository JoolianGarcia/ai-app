"use client";
import { updateEntry } from "@/utils/api";
import { useState } from "react";
import { useAutosave } from "react-autosave";

const Editor = ({ entry }) => {
  const [value, setValue] = useState(entry.content);
  const [isLoading, setIsLoading] = useState(false);
  useAutosave({
    data: value,
    onSave: async (_value) => {
      setIsLoading(true);
      const updated = await updateEntry(entry.id, _value);
      setIsLoading(false);
    },
  });
  return (
    <div className="w-full h-[50vh] p-8 rounded-lg">
      {isLoading && <h2>..loading</h2>}
      <textarea
        className="w-full h-full text-lg"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="bg-green-600 text-white px-4 py-2 mt-4 rounded-md">
        Save
      </button>
    </div>
  );
};

export default Editor;
