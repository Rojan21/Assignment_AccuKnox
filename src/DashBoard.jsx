import './DashBoard.css'

function DashBoard(){

    return(
        <div className='DashBoard'>
            <div className='DashBoard_header'>
                
            <div>CNAPP DashBoard</div>
            <button>Edit categories</button>
            </div>
            <div className='categories_grid'>
                <p>First category</p>
                <div className='categories_widget'>
                    <div>
                        <p>First widget</p>
                        <p>This is the first widget</p>
                    </div>
                    
                  
                    
                    
                    <div className='Add_widget'> 
                        <button >Add Widget + </button>
                         </div>



                </div>
            </div>
        </div>
    )
}

export default DashBoard;