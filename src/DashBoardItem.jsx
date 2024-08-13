import './DashBoard.css'
function DashBoardItem({data}){
    console.log(data)
    return(
        <>
       
        <div className='Categories_button'>

        <p>{data.categoryName}</p>
        <button>+</button>
        </div>
        <div className='categories_widget'>
            <button onClick={()=>console.log(data)} className='scroll'>&lt;</button>
            {data.widgets.slice(data.Paginaton.Start, data.Paginaton.End).map((widgetdata) => (
  <div key={widgetdata.title}>
    <p className='title'>{widgetdata.title}</p>
    <p className='description'>{widgetdata.text}</p>
  </div>
))}

           
           
            
          
            
            
          


            <button className='scroll'>&gt;</button>
        </div>
        </>
    )
}


export default DashBoardItem;