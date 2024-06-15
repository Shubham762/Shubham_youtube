import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
        name:"search",
        initialState:{},
        reducers:{
            cacheResults:(state,action)=>{
                // console.log("state"+state);
                // console.log("Action"+action);
                // state={...action.payload,...state}
                state=Object.assign(state,action.payload)
                // console.log("state"+state);
            }
        }
})

export const {cacheResults}=searchSlice.actions;

export default searchSlice.reducer;