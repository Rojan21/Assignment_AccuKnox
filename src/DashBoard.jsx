import './DashBoard.css'
import DashBoardItem from './DashBoardItem';
import { useSelector } from 'react-redux';
function DashBoard(){


    const Data = useSelector((state)=>state.widget.categories)
    
  

    return(
        <div className='DashBoard'>
            <div className='DashBoard_header'>
                
            <div>CNAPP DashBoard</div>
            <button className='edit_button'>Add categories</button>
            </div>
            <div className='categories_grid'>
               {Data.map((data)=><DashBoardItem data={data} key={data.categoryName}/>)}
              


                
            </div>
        </div>
    )
}

export default DashBoard;