import { forwardRef, useImperativeHandle, useRef } from "react";
import './EditModal.css'
import { useSelector } from "react-redux";


const EditCategoryModal = forwardRef((props,ref)=>{
    
    const data = useSelector((state)=>state.widget.categories)
    
    
    const dialogref = useRef();
    
    
  
    
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

                    {data.map((item)=><div>{item.categoryName}</div>)}
                    </div>
                    


                </div>
                <div >
                    <div className="edit_widget">

                    <div className="widget_head">
                    <h3>Widgets</h3>
                        </div> 
                    
                    <div className="widget_list">
                        <div className="widget_list_div">
                            <div>Widget1</div>
                            <div>Widget2</div>
                        </div>
                        <div className="widget_list_div">
                            <div>Widget1</div>
                            <div>Widget2</div>
                        </div>
                        <div className="widget_list_div">
                            <div>Widget1</div>
                            <div>Widget2</div>
                        </div>
                        <div className="widget_list_div">
                            <div>Widget1</div>
                            <div>Widget2</div>
                        </div>

                   
                    </div>


                    </div>
                    <div className="edit_buttons">
                        <div className="edit-button-confirm">

                        <button>Confirm</button>

                        <button>Cancel</button>
                        </div>
                    </div>

                </div>
            </div>
            
         
        </dialog>
    )
})

export default EditCategoryModal;



