const RenderModeReducer = (state, action) => {
  switch (action.type) {
    case 'ENABLE_FILTER_MODE': 
      return { mode: 'filter', region: action.payload}

    default:
      return state;
  }
};

export default RenderModeReducer;
