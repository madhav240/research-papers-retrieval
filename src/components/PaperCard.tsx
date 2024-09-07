import { useContext } from "react";
import { PaperType } from "../types";
import { SavedPapersContext } from "../store";

export default function PaperCard({ paper }: { paper: PaperType }) {
  const [savedPapers, setSavedPapers] = useContext(SavedPapersContext);

  function handleSaveToggle() {
    if (savedPapers?.includes(paper)) {
      setSavedPapers(
        savedPapers.filter((savedPaper: PaperType) => savedPaper !== paper)
      );
    } else {
      setSavedPapers(savedPapers.concat(paper));
    }
  }

  return (
    <>
      <div className="border p-5 w-full rounded-md bg-white max-w-2xl mx-auto">
        <div>
          <p className="font-bold text-xl">{paper.title}</p>

          <table className="text-sm mt-1">
            <tbody>
              <tr>
                <td className="flex items-start pr-2">Authors</td>
                <td className="border-l pl-2 text-slate-600">
                  {paper.authors.join(", ")}
                </td>
              </tr>
              <tr>
                <td className="flex items-start pr-2">Publication Year</td>
                <td className="border-l pl-2 text-slate-600">{paper.year}</td>
              </tr>{" "}
              <tr>
                <td className="flex items-start pr-2">Citation Count</td>
                <td className="border-l pl-2 text-slate-600">
                  {paper.citation_count}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-row justify-end">
          <button
            onClick={handleSaveToggle}
            className="px-8 py-2 mt-6  border-2 text-center rounded-md text-sm"
          >
            {savedPapers?.includes(paper) ? "Saved" : "Save"}
          </button>
        </div>
      </div>
    </>
  );
}
