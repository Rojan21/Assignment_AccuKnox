import { configureStore } from "@reduxjs/toolkit";
import Widgetslice from "./Widgetslice";
const Store = configureStore({reducer:{
    widget : Widgetslice.reducer
}})


export default Store;