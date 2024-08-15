import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./Constants";

const chatSlice=createSlice({
    name:'chat',
    initialState:{
        messages:[]
    },
    reducers:{
        addMessage:(state,action)=>{
           //state.messages.push(action.payload); Not used becouse message are pushed from last and coming in ui latter
           state.messages.splice(OFFSET_LIVE_CHAT,1)
        //    state.messages.unshift(action.payload); ///commented becouse what i typed come to last in the input box
           state.messages.push(action.payload);
        }
    }
})

export const {addMessage}=chatSlice.actions;
export default chatSlice.reducer;