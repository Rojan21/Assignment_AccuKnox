import { useDispatch } from 'react-redux';
import './Breadcrumbs.css'
import { widgetactions } from './Widgetslice';
import { useLocation } from 'react-router-dom';
function SearchBar(){
    const location = useLocation()
    const dispatch = useDispatch()
    function SearchHanlder (e){
        
     dispatch(widgetactions.Searchdata(e.target.value))
    }
return(
    <input disabled={location.pathname !== '/DashBoard'} className="searchwidget" type="search" onChange={SearchHanlder} placeholder='Search Widgets' />
)
}

export default SearchBar;