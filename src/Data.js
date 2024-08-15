const Data = {
    
    "Filtered_Data":[],
    "Searchterm":'',
    "categories": [
      {
        "categoryName": "Utilities",
        "checked":true,
        "Id":Math.random().toString(36).slice(2, 11),
        "widgets": [
          {
            "Id":Math.random().toString(36).slice(2, 11),
            "checked":true,
            "title": "Calculator",
            "text": "A tool for performing arithmetic calculations."
          },
          {
            "Id":Math.random().toString(36).slice(2, 11),
            "checked":true,
            "title": "Weather",
            "text": "Displays current weather conditions and forecasts."
          },
          {
            "Id":Math.random().toString(36).slice(2, 11),
            "checked":true,
            "title": "Currency Converter",
            "text": "Converts amounts between different currencies."
          },
          
        ],
        "Paginaton":{
          "Start":0,
          "End":3
        }
        
      },
      {
        "categoryName": "Entertainment",
        "checked":true,
        "Id":Math.random().toString(36).slice(2, 11),
        "widgets": [
          {
            "Id":Math.random().toString(36).slice(2, 11),
            "checked":true,
            "title": "Music Player",
            "text": "Plays and manages your music library."
          },
          {
            "Id":Math.random().toString(36).slice(2, 11),
            "checked":true,
            "title": "Video Player",
            "text": "Plays video files in various formats."
          },
          {
            "Id":Math.random().toString(36).slice(2, 11),
            "checked":true,
            "title": "Game Launcher",
            "text": "Launches and manages your installed games."
          }
        ],
        "Paginaton":{
          "Start":0,
          "End":3
        }
        
      },
      {
        "categoryName": "Productivity",
        "checked":true,
        "Id":Math.random().toString(36).slice(2, 11),
        "widgets": [
          {
            "Id":Math.random().toString(36).slice(2, 11),
            "checked":true,
            "title": "To-Do List",
            "text": "Helps you keep track of tasks and deadlines."
          },
          {
            "Id":Math.random().toString(36).slice(2, 11),
            "checked":true,
            "title": "Calendar",
            "text": "Displays and manages your schedule and events."
          },
          {
            "Id":Math.random().toString(36).slice(2, 11),
            "checked":true,
            "title": "Note Taker",
            "text": "Allows you to create and organize notes."
          }
        ],
        "Paginaton":{
          "Start":0,
          "End":3
        }
        
      },
      {
        "categoryName": "Social",
        "checked":true,
        "Id":Math.random().toString(36).slice(2, 11),
        "widgets": [
          {
            "Id":Math.random().toString(36).slice(2, 11),
            "checked":true,
            "title": "Chat",
            "text": "Facilitates instant messaging with others."
          },
          {
            "Id":Math.random().toString(36).slice(2, 11),
            "checked":true,
            "title": "Social Media Feed",
            "text": "Shows updates and posts from your social networks."
          },
          {
            "Id":Math.random().toString(36).slice(2, 11),
            "checked":true,
            "title": "Contact Manager",
            "text": "Stores and organizes your contact information."
          }
        ],
        "Paginaton":{
          "Start":0,
          "End":3
        }
        
      }
    ]
  }
  

export default Data;