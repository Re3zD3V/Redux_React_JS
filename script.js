// INITIAL STATES
const electronicsInitialState = {
	phones : 5,
	laptops : 12,
	tablets : 8,
	tvs: 15
};

const appliancesInitialState = {
	coolers : 3
};


// ACTIONS
const BUY_PHONE = 'BUY_PHONE';
const BUY_TABLET = 'BUY_TABLET';
const BUY_TV = 'BUY_TV';
const BUY_COOLER = 'BUY_COOLER';

function buyPhone( quantity = 1 ) {
	return {
		type: BUY_PHONE,
		quantity
	};
}

function buyTablet( quantity = 1 ) {
	return {
		type: BUY_TABLET,
		quantity
	};
}

function buyTv( quantity = 1 ) {
	return {
		type: BUY_TV,
		quantity
	};
}

function buyCooler( quantity = 1 ) {
	return {
		type: BUY_COOLER,
		quantity
	};
}


// REDUCERS
// ( prevState, action ) => newState

const ElectronicsReducer = ( prevState = electronicsInitialState, action ) => {
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

const AppliancesReducer = ( prevState = appliancesInitialState, action ) => {
	switch( action.type ) {
		case BUY_COOLER:
			if( prevState.coolers >= action.quantity ) {
				return {
					...prevState,
					coolers : prevState.coolers - action.quantity
				};
			}
			return prevState;
		default:
			return prevState;
	}
}

// CREATE ROOT REDUCER
const rootReducer = Redux.combineReducers(
	{
		electronics : ElectronicsReducer,
		appliances : AppliancesReducer
	}
);

// CREATE STORE
const store = Redux.createStore( rootReducer );

// Initialize number of phones and tablets on store creation
const availablePhones = document.getElementById( 'count-phones' );
availablePhones.innerHTML = store.getState().electronics.phones;

const availableTablets = document.getElementById( 'count-tablets' );
availableTablets.innerHTML = store.getState().electronics.tablets;

const availableTvs = document.getElementById( 'count-tvs' );
availableTvs.innerHTML = store.getState().electronics.tvs;

const availableCoolers = document.getElementById( 'count-coolers' );
availableCoolers.innerHTML = store.getState().appliances.coolers;

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

const buyCoolerBtn = document.getElementById('buy-cooler');
buyCoolerBtn.addEventListener('click', () => {
	store.dispatch(buyCooler());
});

// Subscrire to every store state change
store.subscribe(() => {
	availablePhones.innerHTML = store.getState().electronics.phones;
	availableTablets.innerHTML = store.getState().electronics.tablets;
	availableTvs.innerHTML = store.getState().electronics.tvs;
	availableCoolers.innerHTML = store.getState().appliances.coolers;
});
