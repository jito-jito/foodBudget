import '../styles/globals.css'
import useProducts from '../hooks/useProducts.js'

function MyApp({ Component, pageProps }) {
  const {state, addProduct, removeProduct} = useProducts()

  return <Component 
    {...pageProps}
    globalState={state}  
    addProduct={addProduct}
    removeProduct={removeProduct}
  />
}

export default MyApp
