
function AddNewWidget({data}){

    
    
    return(
        <>
        
        <label htmlFor="categorie">Select a category</label>
       
                <select name="widgetcategory"   id="">
                    {data.map((data)=> <option key={data.Id}  value={data.Id} >{data.categoryName}</option>)}
                    
                </select>
                <label htmlFor="WidgetName">WidgetName</label>
                <input type="text" required name="widgetname" />
                <label htmlFor="WidgetName">WidgetText</label>
                <input type="text" required name="widgettext" />
                </>
    )
}


export default AddNewWidget;