import { createSlice } from "@reduxjs/toolkit";

const Widgetslice = createSlice({

    name:'Widgetslice',
    initialState:{
    value: 1
    },
    reducers:{
      updatevalue : (state,action)=>{
        console.log(action.payload)
        state.value = state.value+action.payload;
      }
    }

})

export default Widgetslice;

export const widgetactions = Widgetslice.actions;

