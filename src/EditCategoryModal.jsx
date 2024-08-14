import { forwardRef, useImperativeHandle, useRef } from "react";
import './EditModal.css'


const EditCategoryModal = forwardRef((props,ref)=>{
    
    
    
    
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
                    <h3>Categories</h3>
                    <div>kdkfkdkdfd</div>
                    


                </div>
                <div >
                    <div className="edit_widget">Widgets</div>
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



