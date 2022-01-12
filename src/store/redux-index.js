import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter-store';
import authReducer from './auth-store';


const store = configureStore({
	reducer: { counter: counterReducer, auth: authReducer}
});

export default store;

/*const counterReducer = (state = { counter: 0 }, action) => {
	if (action.type === 'increment') {
		return {
			counter: state.counter + 1,
		}
	}

	if (action.type === 'decrement') {
		return {
			counter: state.counter - 1,
		}
	}

	return state;
};*/
