import { configureStore } from "@reduxjs/toolkit";

import { articleApi } from "./article";

export const store = configureStore({

    reducer: {
        [articleApi.reducerPath]: articleApi.reducer
    },

    middleware: (getDefaultMiddlewear) => getDefaultMiddlewear().concat(articleApi.middleware)

});