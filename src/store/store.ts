import { configureStore } from "@reduxjs/toolkit";
import nameReducer from "./name";

const store = configureStore({
	reducer: {
		name: nameReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
