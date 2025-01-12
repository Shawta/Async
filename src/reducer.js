import { FETCH_POSTS_REQUESTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from "./actionTypes";

const intialState = {
    loading: false,
    posts: [],
    error: ''
}

const reducer = (state = intialState, action) => {
   
    switch (action.type) {
        case FETCH_POSTS_REQUESTS:
            return {               
                ...state,
                 loading: true,
            }
        
        case FETCH_POSTS_SUCCESS:
            return {
                loading: false,
                posts: action.payload,
                error: ''
            }
        
        
        case FETCH_POSTS_FAILURE:
            return {
                loading: false,
                posts: [],
                error: action.payload
            }
    
        default: return state

    }
    
        
        
}

export default reducer;

