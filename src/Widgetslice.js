import { createSlice } from "@reduxjs/toolkit";
import Data from './Data.js'

const Widgetslice = createSlice({

    name:'Widgetslice',
    initialState:Data,
    reducers:{
      ScrollLeft : (state,action)=>{
        
        const index = state.categories.findIndex(element => element.Id === action.payload);
        state.categories[index].Paginaton.Start-=1;
        state.categories[index].Paginaton.End-=1;
        
      },
      ScrollRight : (state,action)=>{
       
        const index = state.categories.findIndex(element => element.Id === action.payload);
        state.categories[index].Paginaton.Start+=1;
        state.categories[index].Paginaton.End+=1;
        
        
      },
      AddWidget:(state,action)=>{
        
        
        const index = state.categories.findIndex(element => element.Id === action.payload.id);
        state.categories[index].widgets.unshift(
          {
            "Id":Math.random().toString(36).slice(2, 11),
            "checked":true,
            "title": action.payload.name,
            "text": action.payload.text
          },
        )
      },
      Addcategory:(state,action)=>{
        
        
        
        state.categories.unshift(
          {
            "categoryName": action.payload.categoriename,
            "checked":true,
            "Id":Math.random().toString(36).slice(2, 11),
            "widgets": [
              {
                "Id":Math.random().toString(36).slice(2, 11),
                "checked":true,
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
      },
      ToggleCategory:(state,action)=>{
        
        const index = state.categories.findIndex(element => element.Id === action.payload.id);
        state.categories[index].checked = !state.categories[index].checked;
      },
      ToggleWidget:(state,action)=>{
        const index = state.categories.findIndex(element => element.Id === action.payload.categoryid);
        
        const widgets = state.categories[index].widgets
        
        const widgetindex = widgets.findIndex(element => element.Id===action.payload.widgetid);
        
        widgets[widgetindex].checked = !widgets[widgetindex].checked;
      },
      DeleteCategory:(state,action)=>{
        
        const index = state.categories.findIndex(element => element.Id === action.payload.id);
        state.categories.splice(index,1)
      },
      DeleteWidget:(state,action)=>{
        const index = state.categories.findIndex(element => element.Id === action.payload.categoryid);
        
        const widgets = state.categories[index].widgets
        
        const widgetindex = widgets.findIndex(element => element.Id===action.payload.widgetid);
        
        widgets.splice(widgetindex,1)
      },

      Searchdata:(state,action)=>{
        state.Searchterm = action.payload;
        if(action.payload.trim()===''){
          state.Filtered_Data = [];
          return
        }
        state.Filtered_Data = state.categories.map(category => ({
          ...category,
          widgets: category.widgets.filter(widget =>
            widget.title.toLowerCase().includes(action.payload.toLowerCase())
          )
        })).filter(category => category.widgets.length > 0);
        

        

        
        
        
       
        

        
      }
      
      
      



    }

})

export default Widgetslice;

export const widgetactions = Widgetslice.actions;

