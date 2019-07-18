import /* we need our action types here*/{FETCHING, FETCHING_SUCCESS, FETCHING_FAIL} from"../actions";
const initialState = {
  characters: [],
  // Array characters, Boolean fetching, null error.
  fetching: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
        return {...state, fetching: true};
        case FETCHING_SUCCESS:
          return {...state, characters: [...state.characters, ...action.payload], fetching: false};
        case FETCHING_FAIL:
          return {...state, fetching: false, error: action.payload};
    default:
      return state;
  }
};
