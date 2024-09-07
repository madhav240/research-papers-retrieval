import { createContext } from "react";
import { PaperType } from "./types";

type SavedPapersContextType = [
  PaperType[],
  React.Dispatch<React.SetStateAction<PaperType[]>>
];

export const SavedPapersContext = createContext<SavedPapersContextType>([
  [],
  () => [],
]);
