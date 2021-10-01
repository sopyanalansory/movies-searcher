import axios from 'axios';
const api = (headers={}) => {
  const instance = axios.create({
		baseURL:'http://www.omdbapi.com',
		headers:{...headers},
	})
  instance.interceptors.response.use(response => {
		let data = null
		if(response.data){
			data = response.data
		}
		return response;
	}, error => {
		return Promise.reject(error);
	})
  return instance;
}

export default api;