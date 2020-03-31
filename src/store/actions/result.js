import * as actionTypes from './actionTypes';

const saveResults = (res) => {
    return {
        type: actionTypes.STORE_RESULTS,
        result: res,
    };
}
export const storeResults = (res) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(saveResults(res));
        }, 2000);
    }
}

export const deleteResults = (id) => {
    return {
        type: actionTypes.DELETE_RESULTS,
        resultElId: id,
    }
}