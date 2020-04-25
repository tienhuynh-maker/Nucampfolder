import * as ActionTypes from '../redux/ActionTypes';

export const Partners = (state = {
    errMess: null,
    partners: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PARTNERS:
            return {...state, errMess: null, partners: action.payload};
        case ActionTypes.PARTNERS_FAILED:
            return {...state, errMess: action.payload};
        case ActionTypes.ADD_PARTNERS:
            const partner = action.payload;
            return {...state, errMess: null, parnters: state.partners.concat(partner)};
        default:
          return state;
      }
};