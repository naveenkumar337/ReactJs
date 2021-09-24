export default (state, action) => {
    console.log("reducer");
    console.log(state.trasanctions);
    console.log(action.payload);
    switch (action.type) {
      case "Add_Transaction":
        return {
          ...state,
          trasanctions: [...state.trasanctions, action.payload]
        };
      case "Delete_Transaction":
        return {
          ...state,
          trasanctions: state.trasanctions.filter((e) => e.id !== action.payload)
        };
      default:
        return state;
    }
  };
  