import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import './EditModal.css'
import { useDispatch, useSelector } from "react-redux";
import dustbin from './dustbin.svg'
import { widgetactions } from "./Widgetslice";
import NoResults2 from "./Noresults2";


const EditCategoryModal = forwardRef((props,ref)=>{
const [active,setactive] = useState(0);
const dispatch = useDispatch()

    
    const data = useSelector((state)=>state.widget.categories)
    
    
    const dialogref = useRef();
    
    function Togglecategory(id){
        const data = {
            id
        }
        dispatch(widgetactions.ToggleCategory(data))
    }
    function Togglewidget(id){
        const Togglewidgetdata = {
            categoryid:data[active].Id,
            widgetid:id
        }
        dispatch(widgetactions.ToggleWidget(Togglewidgetdata))
    }

     
    function Deletecategory(id){
        const data = {
            id
        }
        dispatch(widgetactions.DeleteCategory(data))
        
        
    }
  
    function Deletewidget(id){
       
        const Togglewidgetdata = {
            categoryid:data[active].Id,
            widgetid:id
        }
        dispatch(widgetactions.DeleteWidget(Togglewidgetdata))
        
    }
    
    useImperativeHandle(ref,()=>({
      OpenModal(){
       dialogref.current.showModal()
      },
      closeModal(e) {
        
        
        dialogref.current.close();
    }
    }))


    return(
        <dialog className="EditModal"  ref={dialogref}>
            
            <h1>Customize your DashBoard</h1>
            <div className="Edit_div_main">
                <div className="edit_categories">
                    
                    <div className="categorie_head">
                    <h3>Categories</h3>
                        </div> 
                    
                    <div className="category_list">
                    {data.length===0&&<NoResults2/>}
                    {data.length>0&&data.map((item,index)=><div onClick={()=>setactive(index)} className={`category_div ${active===index?'active_category':undefined}`}key={index}>
                        <div className="checkboxdiv">
                        <input type="checkbox" checked={item.checked} onChange={()=>Togglecategory(item.Id)}  />
                         <img className="dustbin" onClick={(e)=>{e.stopPropagation(); setactive(pre=>pre-1===-1?0:pre-1);Deletecategory(item.Id)} } src={dustbin} alt="" />
                        </div>
                         {item.categoryName}
                         </div>)}
                    </div>
                    


                </div>
                <div>
                    <div className="edit_widget">

                    <div className="widget_head">
                    <h3>Widgets</h3>
                        </div> 
                    
                    <div className="widget_list">
                        {data.length===0&&<NoResults2/>}
                        
                        {data.length>0&&data[active].widgets.map((e)=><div key={e.title+Math.random()} className=" widget_divs">
                            <div className="checkboxdiv">
                                
                        <input type="checkbox" checked={e.checked&&data[active].checked} onChange={()=>Togglewidget(e.Id)}  />
                         <img className="dustbin" onClick={()=>Deletewidget(e.Id)} src={dustbin} alt="" />
                        </div>
                            {e.title}
                            </div>)}

                        
                             
                            




                            

                           

                       
                        
                       
                        

                   
                    </div>


                    </div>
                    <div className="edit_buttons">
                        <div className="edit-button-confirm">

                        

                        <button onClick={()=>dialogref.current.close()}>Close</button>
                        </div>
                    </div>

                </div>
            </div>
            
         
        </dialog>
    )
})

export default EditCategoryModal;



