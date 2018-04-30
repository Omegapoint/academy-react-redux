
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./reducers/reducers";

const configureStore = (preloadedState) => {

    const middleware = [
        thunk,
        logger
    ];

    return createStore(rootReducer, preloadedState, composeWithDevTools(applyMiddleware(...middleware)));
};

export default configureStore;