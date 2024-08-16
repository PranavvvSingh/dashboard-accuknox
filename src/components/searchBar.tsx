import { RootState } from "@/app/store"
import { updateQuery } from "@/slices/query"
import { useDispatch, useSelector } from "react-redux"

const SearchBar = () => {
   const query = useSelector((state: RootState) => state.searchReducer.query)
   const dispatch = useDispatch()
   return (
      <div className="relative h-[35px] 200px md:w-[250px] lg:w-[300px]">
         <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
               className="w-4 h-4 text-gray-500"
               aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 20 20"
            >
               <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
               />
            </svg>
         </div>
         <input
            type="search"
            id="default-search"
            className="w-full h-full p-4 ps-10 text-sm text-gray-900 border border-blue-900 rounded-lg bg-neutral-200 outline-none"
            placeholder="Search anything..."
            required
            value={query}
            onChange={(e) => dispatch(updateQuery(e.target.value))}
         />
      </div>
   )
}

export default SearchBar
