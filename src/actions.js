import { FETCH_POSTS_REQUESTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from './actionTypes';


export const fetchPostRequest =()=> {
    return {
        type: FETCH_POSTS_REQUESTS
    }

    }

    export const fetchPostSuccess = (posts)=> {
        return {
            type: FETCH_POSTS_SUCCESS,
            payload: posts

        }
}
export const fetchPostsFailure = (error) => {
    return {
        type: FETCH_POSTS_FAILURE,
        payload:error
        }
    }
    
export const fetchPosts = () => {
    return (dispatch) => {
        dispatch(fetchPostRequest())
        fetch('https://official-joke-api.appspot.com/jokes/ten')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Error -' + response.status)
                }
    
            })
    

            .then(data => {
                dispatch(fetchPostSuccess(data));


     
            })
            .catch(error => {
                dispatch(fetchPostsFailure(error));
            })
            


    }
}