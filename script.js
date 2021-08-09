// STATE
const initialState = {
	phones : 5,
	laptops : 12,
	tablets : 8,
	tvs: 15
};


// ACTION
const BUY_PHONE = 'BUY_PHONE';
const BUY_TABLET = 'BUY_TABLET';
const BUY_TV = 'BUY_TV';

function buyPhone(quantity = 1) {
	return {
		type: BUY_PHONE,
		quantity
	};
}

function buyTablet(quantity = 1) {
	return {
		type: BUY_TABLET,
		quantity
	};
}

function buyTv(quantity = 1) {
	return {
		type: BUY_TV,
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
		case BUY_TABLET:
			if( prevState.tablets >= action.quantity ) {
				return {
					...prevState,
					tablets : prevState.tablets - action.quantity
				};
			}
			return prevState;
		case BUY_TV:
			if( prevState.tvs >= action.quantity ) {
				return {
					...prevState,
					tvs : prevState.tvs - action.quantity
				};
			}
			return prevState;
		default:
			return prevState;
	}
}

// CREATE STORE
const store = Redux.createStore(reducer);

// Initialize number of phones and tablets on store creation
const availablePhones = document.getElementById('count-phones');
availablePhones.innerHTML = store.getState().phones;

const availableTablets = document.getElementById('count-tablets');
availableTablets.innerHTML = store.getState().tablets;

const availableTvs = document.getElementById('count-tvs');
availableTvs.innerHTML = store.getState().tvs;

// Set buy-phone and buy-tablet button onClick action
const buyPhoneBtn = document.getElementById('buy-phone');
buyPhoneBtn.addEventListener('click', () => {
	store.dispatch(buyPhone());
});

const buyTabletBtn = document.getElementById('buy-tablet');
buyTabletBtn.addEventListener('click', () => {
	store.dispatch(buyTablet());
});

const buyTvBtn = document.getElementById('buy-tv');
buyTvBtn.addEventListener('click', () => {
	store.dispatch(buyTv());
});

// Subscrire to every store state change
store.subscribe(() => {
	availablePhones.innerHTML = store.getState().phones;
	availableTablets.innerHTML = store.getState().tablets;
	availableTvs.innerHTML = store.getState().tvs;
});
