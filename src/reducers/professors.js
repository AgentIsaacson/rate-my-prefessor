import { FETCH_PROFESSORS } from '../actions/types';


export default function (state = [], action) {
    switch (action.type) {
        case FETCH_PROFESSORS:
            console.log(action.payload)
            return [...state, ...action.payload]

        default: return state
    }
}