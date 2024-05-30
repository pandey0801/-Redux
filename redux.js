const redux = require('redux')

const INITAL_VALUE = {
    counter : 0
}

const reducer= (store = INITAL_VALUE , action)=>
{
    let newStore = store;
    if(action.type==='increment')
        {
            newStore = {counter:store.counter + 1};
        }
    else if(action.type ==='decrement')
        {
            newStore = {counter:store.counter -1}
        }


    return newStore;
}

const store = redux.createStore(reducer);

const sub = () =>
    {
        const state = store.getState();
        console.log(state);
    }

    store.subscribe(sub)

    store.dispatch({type:'increment'});
    store.dispatch({type:'increment'});
    store.dispatch({type:'increment'});
    store.dispatch({type:'increment'});
    store.dispatch({type:'increment'});
   
    store.dispatch({type:'decrement'})


// const redux = require('redux');

// const INITIAL_STATE = {
//     counter: 0
// };

// const reducer = (state = INITIAL_STATE, action) => {
//     switch (action.type) {
//         case 'INC':
//             return { counter: state.counter + 1 };
//         case 'DEC':
//             return { counter: state.counter - 1 };
//         default:
//             return state;
//     }
// };

// const store = redux.createStore(reducer);

// const sub = () => {
//     const state = store.getState();
//     console.log(state);
// };

// store.subscribe(sub);

// store.dispatch({ type: 'INC' });
// store.dispatch({ type: 'DEC' });
