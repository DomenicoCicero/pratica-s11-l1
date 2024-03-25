const initialState = {
  preferSection: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_PREFER":
      return {
        ...state,
        preferSection: {
          ...state.preferSection,
          content: state.preferSection.content.concat(action.payload),
        },
      };
    case "REMOVE_FROM_PREFER":
      return {
        ...state,
        preferSection: {
          ...state.preferSection,
          content: state.preferSection.content.filter((prefer, i) => i !== action.payload),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
