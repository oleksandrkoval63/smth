import { useEffect, useState } from "react";
import { AppDispatch } from "../redux/store";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/searchSlice";

export default function ProductSearch() {

  const [searchValue, setSearchValue] = useState<string>('')
   const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(setSearch(searchValue))
  }, [searchValue, dispatch])
  return (
    <form
      className="
        relative w-full max-w-md
        flex items-center
      "
      action='#'
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="text"
        placeholder="Пошук товарів…"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        autoComplete="off"
        className="
          peer w-full rounded-md border border-gray-300 bg-white
          py-2 pl-11 pr-4 text-sm text-gray-900
          placeholder-gray-400
          focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500
        "
      />

      <svg
        className="
          absolute left-3 top-1/2 -translate-y-1/2
          h-5 w-5 text-gray-400 peer-focus:text-blue-500
        "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z"
        />
      </svg>
    </form>
  );
}
