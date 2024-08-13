import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Provider } from 'react-redux'
import './App.css'
import Home from "./Home"
import Header from "./Header"



import Test from "./Test"
import Store from "./Store"
import Mainnavigation from "./Mainnavigation"
const route = createBrowserRouter([
  {path:'/',element: <Mainnavigation/>,children:[

    {path:'check',element: <p>hello</p>},
    {path:'DashBoard',element: <p>hello</p>},
    {path:':id',element:<p>hello</p>}

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
