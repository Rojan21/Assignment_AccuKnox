import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { widgetactions } from "./Widgetslice";
function Test(){

   const value  = useSelector((state)=>state.widget.value)
   const dispatch = useDispatch()
   console.log(value)
   console.log(value)

   function Increase(){
    dispatch(widgetactions.updatevalue(2))
    
   }
    return(
        <>
        <div>{value}</div>
        <button onClick={Increase}>Increase by 2</button>
        </>
    )
}


export default Test;