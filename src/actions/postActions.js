import { FETCH_POSTS, NEW_POST } from './types';

import axios from 'axios';

export const fetchPosts = () => (dispatch) => {
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.data)
    .then((data) => dispatch({
      type: FETCH_POSTS,
      payload: data
    }));
}

export const createPost = (postData) => (dispatch) => {
  axios.post('https://jsonplaceholder.typicode.com/posts', JSON.stringify(postData), {
      headers: { 'content-type': 'application/json' }
  })
    .then((response) => response.data)
    .then((post) => dispatch({
      type: NEW_POST,
      payload: post
    }));
}
