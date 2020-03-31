const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    number: 1,
}

// Reducer
const rootReducer = (state, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.number + 2,
        }
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.number + action.value,
        }
    }
    return state = initialState;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());


// Subscription action
store.subscribe(()=>{
    console.log('[Sub]', store.getState())
})

// Dispatching Action
store.dispatch({type: 'INC_COUNTER'})
store.dispatch({type: 'ADD_COUNTER', value: 10})
console.log(store.getState())

