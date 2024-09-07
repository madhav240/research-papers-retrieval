import PaperCard from "../components/PaperCard";
import { PaperType } from "../types";
import { IoHomeOutline } from "react-icons/io5";
import { useContext } from "react";
import { SavedPapersContext } from "../store";
import { Link } from "react-router-dom";

export default function SavedPapers() {
  const [savedPapers] = useContext(SavedPapersContext);

  return (
    <>
      <div className="fixed top-3 left-0 right-0 mx-auto w-fit flex items-center gap-4">
        <Link
          to="/"
          className=" h-12 w-12 flex items-center justify-center rounded-full bg-white outline  outline-4 outline-slate-200"
        >
          <IoHomeOutline className="h-6 w-6 text-black " />
        </Link>
      </div>

      <div className="mt-24 space-y-4 px-1">
        {savedPapers?.map((paper: PaperType, index: number) => (
          <PaperCard key={index} paper={paper} />
        ))}
      </div>
    </>
  );
}
