export default function manageBand(state = {
  bands: [],
}, action) {
  debugger;
  switch(action.type){
    case "ADD_BAND":
      console.log(action.band);
      return {...state, bands: [...state.bands, action.band] }
    default:
      return state
  }
};
