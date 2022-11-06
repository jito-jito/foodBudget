import React from "react";
// import { fakeStorage } from "../utils/fakeLocalStorage";

// console.log(fakeStorage);
function useProducts() {
  const [state, setState] = React.useState([]);

  React.useEffect(() => {
    console.log('get from localstorage')
    if (typeof window !== 'undefined') {
      let currentStorage = localStorage.getItem("budgetApp")
      if (currentStorage !== null) {
        console.log('getting state')
        setState(JSON.parse(localStorage.getItem("budgetApp")));
        // the state is unupdated for this console.log
        console.log('the state is= ', state)
      } else {
        console.log('seting state')
        localStorage.setItem("budgetApp", JSON.stringify([]));
        console.log('the state is= ', state)
      }
    }
  }, [])

  const updateState = (newProducts) => {
    
    localStorage.setItem("budgetApp", JSON.stringify(newProducts))
    setState(JSON.parse(localStorage.getItem("budgetApp")))
    // the state is unupdated for this console.log
    console.group('after update state')
    console.log('state and new products')
    console.log(state, newProducts)
    console.groupEnd()
  }
  
  const addProduct = (product) => {
    console.group('before update state')
    console.log('clicked product', 'state in this moment')
    console.log(product, state)
    console.groupEnd()


    const hasProduct = state.findIndex(p => p.description === product.description)
    if(hasProduct === -1) {
      let newProducts = [...state, product]
      updateState(newProducts)
    }
  };

  const removeProduct = (product) => {
    let newProducts = state.filter(p => p.description != product.description)
    updateState(newProducts)
  }

  return {
    state, 
    addProduct,
    removeProduct
  };
}

export default useProducts;
