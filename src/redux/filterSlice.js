import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "filter",
    initialState: "",
    reducers: {
        setContactFilter(state, action) {
            return {                
                filter: action.payload,
            };
        }
    }
});

export const filterReducer = slice.reducer;
export const { setContactFilter } = slice.actions;


// export const setContactFilter = value => {
//     return {
//         type: "filter/setContactFilter",
//         payload: value,
//     }
// }

// export const filterReducer = (state = { filter: '' }, action) => {
//     switch (action.type) {
//         case "filter/setContactFilter":
//             return {
//                 ...state,
//                 filter: action.payload,
//             };
//         default:
//             return state;
//     }
// };