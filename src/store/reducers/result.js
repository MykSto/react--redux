import * as actionTypes from '../actions/actionTypes';

const initialState = {
    result: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULTS:
            const newResult = state.result.concat({ id: new Date(), value: action.result });
            return {
                ...state,
                result: newResult,
            }
        case actionTypes.DELETE_RESULTS:
            const newArray = state.result.filter(value => value.id !== action.resultElId);
            return {
                ...state,
                result: newArray
            }
    }
    return state;
}

export default reducer;
