import { createSlice } from "@reduxjs/toolkit";
import Data from './Data.js'

const Widgetslice = createSlice({

    name:'Widgetslice',
    initialState:Data,
    reducers:{
      ScrollLeft : (state,action)=>{
        console.log(action.payload)
        const index = state.categories.findIndex(element => element.Id === action.payload);
        state.categories[index].Paginaton.Start-=1;
        state.categories[index].Paginaton.End-=1;
        
      },
      ScrollRight : (state,action)=>{
        console.log(action.payload)
        const index = state.categories.findIndex(element => element.Id === action.payload);
        state.categories[index].Paginaton.Start+=1;
        state.categories[index].Paginaton.End+=1;
        console.log(state)
        
      },
      AddWidget:(state,action)=>{
        console.log(action.payload.id)
        state.categories.forEach((e)=>console.log(e.Id))
        const index = state.categories.findIndex(element => element.Id === action.payload.id);
        state.categories[index].widgets.push(
          {
            "title": action.payload.name,
            "text": action.payload.text
          },
        )
      },
      Addcategory:(state,action)=>{
        
        
        
        state.categories.push(
          {
            "categoryName": action.payload.categoriename,
            "Id":Math.random().toString(36).slice(2, 11),
            "widgets": [
              {
                "title": action.payload.name,
                "text": action.payload.text
              },
              
            ],
            "Paginaton":{
              "Start":0,
              "End":3
            }
            
          },
        )
      }


    }

})

export default Widgetslice;

export const widgetactions = Widgetslice.actions;

