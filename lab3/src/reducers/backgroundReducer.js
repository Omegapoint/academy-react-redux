import { SET_BG_COLOR } from "../actions/backgroundActions";

const initialState = {
    bgColor: 'lavender'
};

const backgroundReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_BG_COLOR:
            return {
                bgColor: action.payload.color
            };
        default:
            return state;
    }
};

export default backgroundReducer;
