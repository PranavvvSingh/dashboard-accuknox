import { Button } from "./ui/button"
import { json_data } from "@/data/data"
import { HiOutlineRefresh as RefreshIcon } from "react-icons/hi"
import { CiMenuKebab as MenuIcon } from "react-icons/ci"
import { CategoryType, WidgetCategoryType } from "@/types/types"
import Widget from "./widget"
import AddWidget from "./addWidget"
import Offcanvas from "./offcanvas"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/app/store"
import { useMemo } from "react"
import Time from "./time"
import { updateWidgets } from "@/slices/widgets"
import { updateTimeFilter } from "@/slices/filter"
import { updateQuery } from "@/slices/query"

const Content = () => {
   const data = useSelector((state: RootState) => state.widgetReducer.widgets)
   const query = useSelector((state: RootState) => state.searchReducer.query)
   const timeFilter = useSelector(
      (state: RootState) => state.filterReducer.time,
   )
   const dispatch = useDispatch()

   // reset the dashboard
   const onClickReset = () => {
      dispatch(updateWidgets(json_data))
      dispatch(updateTimeFilter("all"))
      dispatch(updateQuery(""))
   }

   const filterData = () => {
      if (query === "" && timeFilter === "all") return data
      const cutoffDate = new Date()
      if (timeFilter !== "all") {
         cutoffDate.setDate(cutoffDate.getDate() - parseInt(timeFilter))
      }
      const newData: WidgetCategoryType = {} as WidgetCategoryType
      // filter data based on query and time filter
      Object.keys(data).forEach((key) => {
         const categoryKey = key as CategoryType
         const filteredWidgets = data[categoryKey].filter((widget) => {
            const matchesQuery =
               query === "" ||
               widget.widgetName.toLowerCase() === query.toLowerCase()
            const matchesTime =
               timeFilter === "all" || new Date(widget.date) >= cutoffDate

            return matchesQuery && matchesTime
         })
         if (filteredWidgets.length > 0) {
            newData[categoryKey] = filteredWidgets
         }
      })
      return newData
   }

   const filteredData = useMemo(() => filterData(), [query, data, timeFilter])

   return (
      <div className="h-[calc(100vh-50px)] bg-blue-50 overflow-y-scroll px-4 py-1 md:px-7 md:py-3 lg:px-10 lg:py-5">
         <div className="flex justify-between mb-5">
            <h1 className="font-semibold text-lg">CNAPP Dashboard</h1>
            <div className="flex gap-2">
               <Offcanvas />
               <Button
                  variant="secondary"
                  className="border"
                  onClick={onClickReset}
               >
                  <RefreshIcon className="inline-block text-lg" />
               </Button>
               <Button variant="secondary" className="border">
                  <MenuIcon className="inline-block text-lg" />
               </Button>
               <Time />
            </div>
         </div>
         <div className="px-5">
            {Object.keys(filteredData).map((key) => {
               const typedKey = key as keyof WidgetCategoryType
               return (
                  <div key={key}>
                     <h2 className="font-semibold mb-2">{key} Dashboard</h2>
                     <div className="flex flex-wrap justify-start gap-3 md:gap-4 lg:gap-5 mb-10">
                        {filteredData[typedKey].map((widget, index) => (
                           <Widget
                              key={index}
                              widget={widget}
                              category={typedKey}
                           />
                        ))}
                        <AddWidget category={typedKey} />
                     </div>
                  </div>
               )
            })}
         </div>
      </div>
   )
}

export default Content
