import './Home.css'
import { NavLink } from 'react-router-dom';
function Home(){
    return (
        <>
        <div className="Home">
        <h1>Welcome to the Home Page</h1>
        <NavLink to='DashBoard'>Dashboard</NavLink>
            </div>
        
        </>
    )
}


export default Home;

