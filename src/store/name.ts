import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface IName {
	name: string;
	element: string;
}

export interface NameState {
	firstName: IName;
	lastName: IName;
}

const initialState: NameState = {
	firstName: { name: "Breaking", element: "br" },
	lastName: { name: "Bad", element: "ba" },
};

const nameSlice = createSlice({
	name: "name",
	initialState,
	reducers: {
		setName: (state, action: PayloadAction<NameState>) => {
			const { firstName, lastName } = action.payload;
			state.firstName = firstName;
			state.lastName = lastName;
		},
	},
});

export const { setName } = nameSlice.actions;
export default nameSlice.reducer;
