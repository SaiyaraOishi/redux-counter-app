const {createStore} = require("redux");

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

//state
const initialState = {
    count: 0
}

//actions
const incrementCounterAction = (value) =>{
    return {
        type : INCREMENT,
        payload : value
    }
}

const decrementCounterAction = (value) =>{
    return {
        type : DECREMENT,
        payload : value
    }
}

const resetCounterAction = () =>{
    return {
        type : RESET
    }
}

//reducer
const counterReducer = (state=initialState,action) =>{
    switch(action.type){
        case INCREMENT:
            return {
                count: state.count+action.payload
            }
        case DECREMENT:
            return {
                count: state.count-action.payload
            }

        case RESET:
            return{
                count: 0
            }

        default:
            state;
    }
} 

//store
const counterStore = createStore(counterReducer);

counterStore.subscribe(()=>{
    console.log(counterStore.getState());
});

counterStore.dispatch(incrementCounterAction(5));
counterStore.dispatch(incrementCounterAction(5));
counterStore.dispatch(incrementCounterAction(5));
counterStore.dispatch(decrementCounterAction(5));
