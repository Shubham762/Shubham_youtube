import { createSlice } from "@reduxjs/toolkit";

const chatSlice=createSlice({
    name:'chat',
    initialState:{
        messages:[]
    },
    reducers:{
        addMessage:(state,action)=>{
           //state.messages.push(action.payload); Not used becouse message are pushed from last and coming in ui latter
           state.messages.unshift(action.payload);
        }
    }
})

export const {addMessage}=chatSlice.actions;
export default chatSlice.reducer;