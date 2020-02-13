import { SEARCH, SELECT, RESULTS, LOADING } from "./actions";

import axios from 'axios';

const defaultState = {
    query: '',
    results: [],
    isLoading: false
}
export function art(state=defaultState, action) {
    switch(action.type) {
        case SEARCH:
            return {
                ...state,
                query: action.payload.query,
                results: action.payload.results
            }
            break;
        case RESULTS:
            return {
                ...state,
                reults: action.payload.results
            }
            break;
        case LOADING:
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        case SELECT:
            return {
                ...state,
            }
        
    }
}
