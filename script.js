// ACTION
const BUY_PHONE = 'BUY_PHONE';

function buyPhone(quantity = 1) {
	return {
		type: BUY_PHONE,
		quantity
	};
}
