import ACTION from './actions';

export default function Reducers(state, action) {
  const result = action.res;
  switch (action.type) {
    case `${ACTION.LIST_SUCCESS}`:
      return {
        ...state,
        data: result,
      };
    case `${ACTION.DELETE_SUCCESS}`:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
