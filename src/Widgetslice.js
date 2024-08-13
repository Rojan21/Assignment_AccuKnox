import { createSlice } from "@reduxjs/toolkit";
import Data from './Data.js'
const Widgetslice = createSlice({

    name:'Widgetslice',
    initialState:Data,
    reducers:{
      updatepagination : (state,action)=>{
        console.log(state)
        
      }
    }

})

export default Widgetslice;

export const widgetactions = Widgetslice.actions;

