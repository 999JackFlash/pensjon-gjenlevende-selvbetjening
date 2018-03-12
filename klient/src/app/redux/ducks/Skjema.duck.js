const SET_SELECTED = 'SET_SELECTED';

export const setSelected = (value, field, step) => {
    return (
        {
            type: SET_SELECTED, value, field, step
        });
};

export const setSelectedStep2 = (value, field) => setSelected(value, field, 'step2');
export const setSelectedStep3 = (value, field) => setSelected(value, field, 'step3');


import {
    combineReducers
} from 'redux';


const genericStep = (stepname) => (state = { }, action) => {
    if (action.step !== stepname) return state;
    switch (action.type) {
        case SET_SELECTED:
            const newState = { ...state };
            newState[action.field] = action.value;
            return newState;
        default:
            return state;
    }
};

const skjemaReducer = combineReducers({ step2: genericStep('step2'), step3: genericStep('step3') });

export default skjemaReducer;
