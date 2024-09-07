import { useState } from "react";
import papersData from "../assets/papers.json";

import { CiSearch } from "react-icons/ci";
import PaperCard from "../components/PaperCard";
import { IoSaveOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { PaperType } from "../types";

export default function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<PaperType[]>([]);

  function handleSearch() {
    setResults(
      papersData.filter((paper) =>
        paper.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  }

  return (
    <>
      <div className="fixed top-3 left-0 right-0 mx-auto w-fit flex items-center gap-4">
        <Link
          to="/saved-papers"
          className=" h-12 w-12 flex items-center justify-center rounded-full bg-white outline  outline-4 outline-slate-200"
        >
          <IoSaveOutline className="h-6 w-6 text-black " />
        </Link>
        <form
          className="relative transition duration-500 "
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            name="query"
            className="sm:w-96 lg:w-[30rem] h-14 rounded-2xl outline  outline-4 outline-slate-200 px-4 focus-visible:outline-none placeholder:text-slate-400 font-medium"
            placeholder={`Search here...`}
            required
            onChange={(e) => setQuery(e.target.value)}
          />

          <button
            onClick={handleSearch}
            className="absolute right-3 top-1 p-3 hover:bg-black/10 transition duration-500 rounded-full bg-white"
          >
            <CiSearch className="h-6 w-6 text-black " />
          </button>
        </form>
      </div>

      <div className="mt-24 space-y-4 px-1">
        {results.map((paper, index) => (
          <PaperCard key={index} paper={paper} />
        ))}
      </div>
    </>
  );
}
