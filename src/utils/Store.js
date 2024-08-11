import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";
<<<<<<< HEAD
import SearchSlice from "./SearchSlice";
import ChatSlice from "./ChatSlice";

const store=configureStore({
    reducer:{
        app:AppSlice,
        search:SearchSlice,
        chat:ChatSlice
=======

const store=configureStore({
    reducer:{
        app:AppSlice
>>>>>>> d6586d7 (youtube clone)
    }
})

export default store;



