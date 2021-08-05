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