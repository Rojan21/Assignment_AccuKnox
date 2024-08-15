import './Noresults.css'
import noresult from './Noresult.svg'
function NoResults(){
    return (
        <div className="Noresults">
            <img src={noresult} alt="" />
            <h4>No Results Found</h4>
        </div>
    )
}

export default NoResults;