import { combineReducers } from 'redux/lib/redux';
import auth from './auth';
import message from './message';

const allReducers = combineReducers({
	auth,
	message,
});

export default allReducers;
