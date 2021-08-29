export const initialState = {
   applications: [],
   user: null,
};

const reducer = (state, action) => {
   switch (action.type) {
      case "SET_USER":
         return {
            ...state,
            user: action.user,
         };
      case "ADD_TO_DASHBOARD":
         return {
            ...state,
            applications: [...state.applications, action.item],
         };

      case "ADD_TO_APPLICATIONS":
         console.log(action.options);
         return {
            ...state,
            applications: [...state.applications, action.options],
         };

      default:
         return state;
   }
};

export default reducer;
