// STATE
const initialState = {
	phones : 5,
	laptops : 12,
	tvs : 8
};


// ACTION
const BUY_PHONE = 'BUY_PHONE';

function buyPhone(quantity = 1) {
	return {
		type: BUY_PHONE,
		quantity
	};
}


// REDUCER
// ( prevState, action ) => newState

const reducer = ( prevState = initialState, action ) => {
	switch( action.type ) {
		case BUY_PHONE:
			if( prevState.phones >= action.quantity ) {
				return {
					...prevState,
					phones : prevState.phones - action.quantity
				};
			}
			return prevState;
		default:
			return prevState;
	}
}

// CREATE STORE
const store = Redux.createStore(reducer);

// Display initial state from redux store
// console.log(store.getState());

// Function to dispatch buyPhone action on button click, then display new redux store state
// const buy = () => {
// 	store.dispatch(buyPhone(3));
// 	console.log(store.getState());
// }

// Initialize number of phones on store creation
const availablePhones = document.getElementById('count');
availablePhones.innerHTML = store.getState().phones;

// Set buy-phone button onClick action
// const quantityPhones = document.getElementById('quantity');
const buyPhoneBtn = document.getElementById('buy-phone');

buyPhoneBtn.addEventListener('click', () => {
	// let quantity = quantityPhones.value;
	// store.dispatch(buyPhone(quantity));
	store.dispatch(buyPhone());
});

// Subscrire to every store state change
store.subscribe(() => {
	availablePhones.innerHTML = store.getState().phones;
	// console.log(store.getState());
});
