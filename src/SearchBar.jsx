import { useDispatch } from 'react-redux';
import './Breadcrumbs.css'
import { widgetactions } from './Widgetslice';
function SearchBar(){
    const dispatch = useDispatch()
    function SearchHanlder (e){
        
     dispatch(widgetactions.Searchdata(e.target.value))
    }
return(
    <input className="searchwidget" type="search" onChange={SearchHanlder} placeholder='Search Widgets' />
)
}

export default SearchBar;