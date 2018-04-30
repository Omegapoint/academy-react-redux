export const SET_BG_COLOR = "SET_BG_COLOR";

export const setBackgroundColor = (color) => {
    return {
        type: SET_BG_COLOR,
        payload: {
            color
        }
    };
};