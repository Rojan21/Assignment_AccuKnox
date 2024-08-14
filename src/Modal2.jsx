import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import './Dialog.css'

import { Form } from "react-router-dom";
import Add
import { widgetactions } from "./Widgetslice";


import AddNewWidget from "./AddNewWidget";
import { useDispatch, useSelector } from "react-redux";

const Modal2 = forwardRef((props,ref)=>{
    const data = useSelector((state)=>state.widget.categories)
    const dispatch = useDispatch()
    
    
    const dialogref = useRef();
    
    const formref = useRef()
    function formHandler(e){
        e.preventDefault()
        const formData = new FormData(e.target);
        console.log(formData)
        const categoriename = formData.get('categoriename')?.trim();
        const name = formData.get('widgetname')?.trim();
        const text = formData.get('widgettext')?.trim();
        
        if (categoriename && name && text) {
            dialogref.current.close()
            const data = {
                id,
                name,
                text
            }
            dispatch(widgetactions.AddWidget(data))
        }
        
     
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
        <dialog className="Add_widget_dialog" ref={dialogref}>
             <div className="diaglog_form">
            <h1>Add New Widget</h1>
            <form onSubmit={formHandler} ref={formref}  >
             <AddNewWidget data={data}/>
                
                <div className="diaglogconfirm">

                <button >Confirm</button>
                <button type="button" onClick={()=>dialogref.current.close()} >Cancel</button>
                </div>
                
            </form>
            
        </div>
        </dialog>
    )
})

export default Modal2;



