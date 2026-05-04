import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import postApi from "../services/post";


const store = configureStore({
    //reducer
    reducer: {
        [postApi.reducerPath]: postApi.reducer
    },

    //middleware
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware),


})

//* helper function:- automatic refetch (dobara API call) enable karta hai
//* Ye sirf RTK Query ke data ko auto-refetch karta hai, reducers ko manually call nahi karta
setupListeners(store.dispatch)

export default store

