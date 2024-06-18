export const actionTypes = {
    LOAD_ALL_PRODUCTS: "LOAD_DATA",
  };
  
  export function loadData() {
    return {
      type: actionTypes.LOAD_ALL_PRODUCTS
    };
  }