const redux = require('redux')
const createStore=redux.createStore
const combineReducers=redux.combineReducers

function cake_Action(){
    return {
        type:'BUY_CAKE'
    }
}

function iceCream_Action(){
    return{
        type:'BUY_ICECREAM'
    }
}

const cakeState={
    noOf_cakes:10
}
const iceCreamState={
    noOf_iceCreams:20
}

const cakeReducer=(state=cakeState,action)=>{
    switch(action.type){
        case "BUY_CAKE":
            return{
                ...state,
                noOf_cakes:state.noOf_cakes-1
            }
        default:
            return state
    }
}
const iceCreamReducer=(state=iceCreamState,action)=>{
    switch(action.type){
        case "BUY_ICECREAM":
            return{
                ...state,
                noOf_iceCreams:state.noOf_iceCreams-1
            }
        default:
            return state
    }
}

const rootReducer=combineReducers({
    cake:cakeReducer,
    icecream:iceCreamReducer
}
)

const store = createStore(rootReducer);
console.log('initial store',store.getState())
// -- creating subscription
 const unsubscribe = store.subscribe(() => console.log("store updating",store.getState()));
//-- calling the action and decreasing the number
store.dispatch(cake_Action());
store.dispatch(cake_Action());
store.dispatch(cake_Action());
store.dispatch(iceCream_Action());
store.dispatch(iceCream_Action());

//
unsubscribe()

//
//to see the  output use the 'node component-name ' while run on the cmd.
