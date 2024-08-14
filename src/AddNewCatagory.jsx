function AddNewCategory(){
    return(
        <>
        
        <label htmlFor="categorie">Select a category</label>
        <label htmlFor="catogoryname">CategoryName</label>
        <input type="text" required name="categoriename" />
                <label htmlFor="WidgetName">WidgetName</label>
                <input type="text" required name="widgetname" />
                <label htmlFor="WidgetName">WidgetText</label>
                <input type="text" required name="widgettext" />
                </>
    )
}

export default AddNewCategory;