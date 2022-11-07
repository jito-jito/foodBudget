import Title from "../../components/Title"
import ResultsContainer from "../../components/ResultsContainer"
import ProductItem from "../../components/ResultsContainer/ProductItem"
import styles from './SavedProducts.module.css'

export default function savedProducts({
  globalState,
  removeProduct
}) {
  console.log(globalState)

  const totalValue = () => {
    let totalValue = 0
    for (const product of globalState) {
      let parsedPrice = parseInt(product.singlePrice.replace('$', '').replace('.', ''), 10)
      totalValue += parsedPrice
    }
    return totalValue
  }

  return (
    <main className={styles.page}>
      <Title className="page-title">Presupuesta tu comida</Title>
      <section className={styles.productsContainer}>
        {globalState.length > 0 &&
          <ResultsContainer
            className={styles.productsContainer}
            title={`${globalState.length} productos guardados`}
          >
            {globalState.map((product, index) => (
                <ProductItem
                  key={index}
                  hasSavedProduct={true}
                  onAddProduct={() => addProduct(product)}
                  onRemoveProduct={() => removeProduct(product)}
                  description={product.description}
                  marketName={'marketName'}
                  brand={product.brand}
                  singlePrice={product.singlePrice}
                  link={product.link}
                />
              )
            )}
          </ResultsContainer>
          }
        </section>
        <section>
          <h3>Valor total: <span>{globalState.length > 0 ? totalValue() : 'nop'}</span></h3> 

        </section>
    </main>
  )
}