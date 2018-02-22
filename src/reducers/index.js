import { combineReducers } from 'redux';
import posts from './reducer_posts.js';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  posts: posts,
  form : formReducer
});
export default rootReducer;
