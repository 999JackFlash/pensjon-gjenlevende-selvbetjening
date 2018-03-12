const PERSON_FETCH_SUCCESS = 'PERSON_FETCH_SUCCESS';

export const personFetchSuccess = (person, rolle) => ({ type: PERSON_FETCH_SUCCESS, person, rolle });



const personReducer = (state = [], action) => {
    switch (action.type) {
        case PERSON_FETCH_SUCCESS:
            return [...state, {...action.person, rolle: action.rolle}];
        default:
            return state;
    }
};

export default personReducer;
