import _ from 'lodash';
import {Fetch_POSTS} from "../actions/index.js";

export default function(state={},action){

  switch (action.type){
    case Fetch_POSTS:
        return _.mapKeys(action.payload.data, "id");
     default:
        return state;
  }
}
