import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducers/themeReducer";
import drawerReducer from "./reducers/drawerReducer";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    drawer: drawerReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    });
  },
});
export default store;
