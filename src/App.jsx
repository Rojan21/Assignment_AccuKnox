import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Provider } from 'react-redux'
import './App.css'
import Home from "./Home"





import Store from "./Store"
import Mainnavigation from "./Mainnavigation"
import DashBoard from "./DashBoard"

const route = createBrowserRouter([
  {path:'/',element: <Mainnavigation/>,children:[

    {index:true,element: <Home/>},
    {path:'DashBoard',element: <DashBoard/>},
    

  ]},


])





function App() {


  return (

    <Provider store={Store}>

    <RouterProvider router={route}/>
    </Provider>
  )
}

export default App
