/* eslint-disable no-console */
/* eslint-disable no-shadow */

function reducer(state, action) {
  if (action.type === "INCREMENT") {
    return state + action.amount;
  } else if (action.type === "DECREMENT") {
    return state - action.amount;
  } else {
    return state;
  }
}

//a simulation to the built-in create store func. of the redux library
//using the factory design pattern
function createStore(reducer) {
  let state = 0;

  //the first method of the createStore(); responsible for getting the current state
  const getState = () => state;

  //the second method of the createStore(); responsible for sending the store actions
  const dispatch = (action) => {
    //dispatch is "fire-and-forget" , it just changes the state var, not return it
    state = reducer(state, action);
  };

  //we return an object that has the two functions as methods of it's own
  return {
    getState,
    dispatch,
  };
}

const store = createStore(reducer);

const incrementAction = {
  type: "INCREMENT",
  amount: 3,
};

store.dispatch(incrementAction);
console.log(store.getState()); // -> 3
store.dispatch(incrementAction);
console.log(store.getState()); // -> 6

const decrementAction = {
  type: "DECREMENT",
  amount: 4,
};

store.dispatch(decrementAction);
console.log(store.getState()); // -> 2
