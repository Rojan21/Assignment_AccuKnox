import { useDispatch } from 'react-redux';
import './DashBoard.css'
import { widgetactions } from './Widgetslice';
import Modal from './Modal';
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
function DashBoardItem({data}){
    const dispatch = useDispatch()
    const Modaldata = useRef()

    const handleClick = () => {
      Modaldata.current.OpenModal()
    };

    function LeftScroll(id){
      dispatch(widgetactions.ScrollLeft(id))
    }
    function RightScroll(id){
      dispatch(widgetactions.ScrollRight(id))
    }
    return(
        <>
       
        <div className='Categories_button'>

        <p>{data.categoryName}</p>
        <button className='Add-widget-shortcut' onClick={handleClick}>+</button>
        <Modal ref={Modaldata}/>
        </div>
        <div className='categories_widget'>
            {data.Paginaton.Start>0&&<button onClick={()=>LeftScroll(data.Id)} className='scroll'>&lt;</button>}
            {console.log()}
            {data.widgets.slice(data.Paginaton.Start, data.Paginaton.End).map((widgetdata) => (
  <div key={widgetdata.title+Math.random()}>
    <p className='title'>{widgetdata.title}</p>
    <p className='description'>{widgetdata.text}</p>
  </div>
))}

           
           
            
          
            
            
          


            {data.widgets.length>=4&&data.Paginaton.End!==data.widgets.length&&<button onClick={()=>RightScroll(data.Id)} className='scroll'>&gt;</button>}
        </div>
        </>
    )
}


export default DashBoardItem;