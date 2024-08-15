import { useRef } from 'react';
import './DashBoard.css'
import DashBoardItem from './DashBoardItem';
import { useSelector } from 'react-redux';
import Modal2 from './Modal2';
import EditCategoryModal from './EditCategoryModal';
import edit from './edit.svg'
import NoResults from './NoResults';

function DashBoard(){

    const Modaldata = useRef()
    const EditModal = useRef()
    const Data = useSelector((state)=>state.widget.categories)
    const Filtered_Data = useSelector((state)=>state.widget.Filtered_Data)
    const searchterm = useSelector((state)=>state.widget.Searchterm)

    const disable = Filtered_Data.length===0&&searchterm!=='';
    const disable2 = Filtered_Data.length>0;
    
        const handleClick = () => {
            
          Modaldata.current.OpenModal()
        };

        const handleClick2 = () => {
            
            EditModal.current.OpenModal()
          };
    
  

    return(
        <div className='DashBoard'>
            <div className='DashBoard_header'>
                
            <div>CNAPP DashBoard</div>
            {!(disable || disable2)&&<button onClick={handleClick2}  className='edit_button2'><img src={edit} alt="" />Edit</button>}
            <EditCategoryModal ref={EditModal}/>
            {!(disable || disable2)&&<button onClick={handleClick} disabled={disable||disable2}  className='edit_button'>Add categories</button>}

            <Modal2 ref={Modaldata}/>
            </div>
            <div className='categories_grid'>
               
               {Filtered_Data.length===0&&searchterm===''&&Data.filter(item => item.checked).map((data)=><DashBoardItem data={data} key={data.categoryName}/>)}
               {Filtered_Data.map((data)=><DashBoardItem data={data} key={data.categoryName}/>)}
               {Filtered_Data.length===0&&searchterm!==''&&<NoResults/>}
               {Data.filter(item => item.checked).length===0&&<NoResults/>}
               
            </div>
        </div>
    )
}

export default DashBoard;