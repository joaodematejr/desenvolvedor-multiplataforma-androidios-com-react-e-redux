//CONTADOR

//REDUCERS
function contador(state = 0, action) {
    switch (action.type) {
        case 'INCREMENTO':
            return state + 1;
        case 'DECREMENTO':
            return state - 1;
        case 'ZERAR_CONTADOR':
            return 0;
        default:
            return state;

    }

}

//CRIAR STORE
let store = Redux.createStore(contador);

//RECUPERAR ESTADO
document.write(store.getState() + "<br/>");

//RECUPERAR DISPATCH
store.dispatch({ type: 'INCREMENTO' });


document.write(store.getState() + "<br/>");

//RECUPERAR DISPATCH
store.dispatch({ type: 'DECREMENTO' });

document.write(store.getState() + "<br/>");

store.dispatch({ type: 'ZERAR_CONTADOR' });