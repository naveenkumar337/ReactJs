const Redux = require("redux");

const BUY_CAKE='BUY_CAKE'
//action
function buyCake() {
  return {
    type: 'BUY_CAKE',
    info: "first redux action",
  };
}
//state
const initialState = {
  count: 10,
};
//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

//redux Store
//-- creating the store
const createStore = Redux.createStore;

//--asign store for reducer method name

const store = createStore(reducer);
console.log('initial store',store.getState())
// -- creating subscription
 const unsubscribe = store.subscribe(() => console.log("store updating",store.getState()));
//-- calling the action and decreasing the number
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
//
unsubscribe()