import api from '../utils/Api';
import { ActionTypes } from '../constans';
const onSuccess = (res, type)=>(
	{
		type,
		payload:res 
	}
)

const onError = (err) => (
	{
		type:ActionTypes.MOVIES_ERROR,
		payload:err
	}
)

const isFetch=(payload) => (
	{
		type:ActionTypes.MOVIES_FETCHING,
		payload
	}
)

export const getListMovies=(query) =>{
	return dispatch=>(
		dispatch(isFetch({type:'fetch', status:true})),
		api().get('/', query)
		.then(res => {
				dispatch(onSuccess(res.data, ActionTypes.MOVIES_lIST));
				dispatch(isFetch({type:'fetch', status:false}));
		})
		.catch(err => {
				dispatch(onError(err));
				dispatch(isFetch({type:'fetch', status:false}));
		})
	)
}