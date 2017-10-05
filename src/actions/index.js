import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL= "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=pls"

export function fetchPosts() {
	//making axios request
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

	//assigning request to the payload action. Middleware will automatically resolve it whenever the action comes accros it
	//it will contain the array of posts
	return {
		type: FETCH_POSTS,
		payload: request
	};
}


