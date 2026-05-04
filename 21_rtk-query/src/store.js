import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import todoApi from "./apiSlice";

const store = configureStore({
    reducer: {
        [todoApi.reducerPath]: todoApi.reducer,

    },

    middleware: (gDM) => gDM().concat(todoApi.middleware)
})

setupListeners(store.dispatch)
export default store