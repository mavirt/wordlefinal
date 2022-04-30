import{createStore} from "redux";
import initState from "./initState";
import rootReducer from "../reducers/rootReducer";

function configureStore(state = initState()){
    return createStore(rootReducer, state)
}

export default configureStore;