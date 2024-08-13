import { NavLink } from 'react-router-dom';
import './Breadcrumbs.css'


function Breadcrumbs(){
    return(
       <div className='Breadcrumbs'>
        
        <NavLink to="/" className={({isActive})=>isActive?'active':undefined}>Home</NavLink>
        <div className='active'>&gt;</div>
        <NavLink to="DashBoard" className={({isActive})=>isActive?'active':undefined}>DashBoard</NavLink>
        <NavLink to="DashBoard/2" className={({isActive})=>isActive?'active':undefined}>DashBoard</NavLink>


       </div>
    )
}

export default Breadcrumbs;