import Shop_Data from "./shop.data";

const Initial_state = {
    collections: Shop_Data    
}

const shopReducer = (state = Initial_state, action) => {
    
      switch (action.type) {

          default:
          return state;
      }
}

export default shopReducer;