
import { ActionTypes } from '../constans';
const initialState = {
	list:[],
	detail:{},
	isFetch:false,
	success:false,
	error:null,
}

const onFetching = (lastState, payload) => {
	if(payload.type='fetch')
		return {...lastState, isFetch:payload.status};
	return { ...lastState, isFetch:false};
}

const moviesReducer=(state=initialState, action) =>{
	switch(action.type){
		case ActionTypes.MOVIES_FETCHING: return onFetching(state, action.payload);
		case ActionTypes.MOVIES_lIST : {
			const { totalResults, Search} = action.payload;
			return {...state, list:[...Search], totalResults: totalResults, success: true,error:null}
		}
		case ActionTypes.MOVIES_ERROR: {
			return { ...state, error:action.payload, success:false};
		}
		default: return state;
	}
}

export default moviesReducer;