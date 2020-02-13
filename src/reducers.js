import { SEARCH, SELECT } from "./actions";

import axios from 'axios';

const defaultState = {
    query: '',
    results: []
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
        case SELECT:
            return {
                ...state,
            }
    }
}
