import { combineReducers } from 'redux';
import user from './user';
import notification from './notification';

const reducer = combineReducers({
    user,
    notification
});

module.exports = reducer;
