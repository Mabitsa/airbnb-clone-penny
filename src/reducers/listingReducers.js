import {
    LISTING_LIST_REQUEST, 
    LISTING_LIST_SUCCESS, 
    LISTING_LIST_FAIL
} from "../types/listingTypes"

const initialState = {
    listings: [],
}
export const listingListReducer = (state = { listings: [] }, action) => {
    switch(action.type) {
        case LISTING_LIST_REQUEST:
            return { loading: true, listings: [] };
        case LISTING_LIST_SUCCESS:
            return { loading: false, listins: action.payload };
        case LISTING_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};