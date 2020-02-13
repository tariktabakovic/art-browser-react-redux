import {connect} from 'react-redux';
import ArtSearch from '../components/ArtSearch';
import { actionSearch } from '../actions';


function mapDispatchToProps(dispatch){
    return {
        handleClick: ()=> {
            dispatch(actionSearch('sunflowers'));
        }
    }
}

const reduxConnector = connect(null, mapDispatchToProps);
export default reduxConnector(ArtSearch);