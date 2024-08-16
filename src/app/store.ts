import { configureStore } from "@reduxjs/toolkit"
import widgetReducer from "@/slices/widgets"
import searchReducer from "@/slices/query"
import filterReducer from "@/slices/filter"

export const store = configureStore({
   reducer: {
      widgetReducer,
      searchReducer,
      filterReducer
   },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
