import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    result: [],
}

const deleteResult = (state, action) => {
    const newArray = state.result.filter(value => value.id !== action.resultElId);
    return updateObject(state, { result: newArray })
}

const storeResult = (state, action) => {
    const newResult = state.result.concat({ id: new Date(), value: action.result });
    return updateObject(state, { result: newResult })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULTS:
            return storeResult(state, action);
        case actionTypes.DELETE_RESULTS:
            return deleteResult(state, action);
    }
    return state;
}

export default reducer;
