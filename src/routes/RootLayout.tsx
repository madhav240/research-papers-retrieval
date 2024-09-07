import { useState } from "react";
import { Outlet } from "react-router-dom";
import { PaperType } from "../types";
import { SavedPapersContext } from "../store";

export default function RootLayout() {
  const [savedPapers, setSavedPapers] = useState<PaperType[]>([]);

  return (
    <SavedPapersContext.Provider value={[savedPapers, setSavedPapers]}>
      <Outlet />
    </SavedPapersContext.Provider>
  );
}
