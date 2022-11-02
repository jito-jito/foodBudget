import React from 'react'
import Form from './form'

export default function() {
  const [products, setData] = React.useState({
    data: [],
    totalResults: 0,
    loading: false,
    error: false
  })
  const [options, setOptions] = React.useState({
    Lider: true, 
    Tottus: false, 
    SantaIsabel: false
  })
 
 
  const onSearch = async (e) => {
    e.preventDefault()
    setData({
      data: [],
      loading: true,
      error: false
    })

    try {
      const searchKey = e.target[1].value
      const selectedOptions = Object.entries(options).map(option => option[1] === true ? option[0] : ' ').filter(option => option.length > 2)
  
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}food/?markets=[${selectedOptions}]&key=${searchKey}`)
      const data = await response.json()
      
      setData({
        data: data.results,
        totalResults: data.totalResults,
        loading: false
      })
    } catch (error) {
      setData({
        data: [],
        loading: false,
        error: true
      })
    }


  }

  return (
    <main className="page">
      <h1 className="page-title">Presupuesta tu comida</h1>
      <h2 className="page-subtitle">Busca la comida que deseas cotizar</h2>
      
      <Form 
        onSubmitData={onSearch} 
        options={options}
        setOptions={setOptions}
      />
      <section className="page-results">
        { products.data.length === 0  &&  products.loading === false && products.error === false &&
          <div className="page-resultsContainer">
            <h2>Los resultados apareceán por aquí, cuando <br/> realices una busqueda....</h2>
          </div>
    
        }
        { products.data.length === 0 &&  products.loading === true && products.error === false &&
          <div className="page-resultsContainer">
            <h2>Cargando...</h2>
            <h3>esto puede tardar un poco</h3>
          </div>  
        }
        {   products.loading === false &&  products.error === true &&
          <div className="page-resultsContainer">
            <h2>Ups, algo salio mal</h2>
            <h3>intenta nuevamente luego de un rato</h3>
          </div>  
        }
        { products.data.length > 0 && products.loading === false &&
          <div className="page-resultsContainer-loaded">
            <h2>{products.totalResults} resultados encontrados!</h2>
            <div className="table">
              <div className="table-description">
                <h3>Nombre</h3>
                <h3>Tienda</h3>
                <h3>Marca</h3>
                <h3>Precio Unitario</h3>
                <h3>url</h3>
              </div>
              <div className="table-results">
                {
                  products.data.map((object) => (
                      object.products.map((product, index) => {
                        return (
                          <div className="table-product" key={index}>
                            <p>{product.description}</p>
                            <p>{object.marketName}</p>
                            <p>{product.brand}</p>
                            <p>{product.singlePrice}</p>
                            <p>
                              <a href={product.link}>link</a>
                            </p>
                          </div>
                        )
                      })
                    )
                  )
                }
              </div>
            </div>
          </div>
        }
      </section>
      

      <style global jsx>{`
      
        body {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          height: 100vh;
          padding: 0 25px;
          box-sizing: border-box;
          text-align: center;
        }

        .page {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 95vw;
          height: 100%;
        }

        .page-title {
          margin: 25px 0 10px 0;
          font-size: 28px;
          font-weight: bold;
        }
        .page-subtitle {
          margin: 10px 0;
          font-size: 24px;
          font-weight: bold;
        }
        
        .page-results {
          align-self: stretch;
          height: 100%;
          padding: 10px 25px;
          box-sizing: border-box;
          background-color: #E2F4ED;
          border-radius: 25px;
        }
        .page-resultsContainer {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 50vh;
        }
        .page-resultsContainer-loaded {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 95vh;
        }

        .table {
          display: flex;
          flex-direction: column;
          width: 95vw;
          height: 100%;
          border: 1px solid white;
          padding: 0 20px;
          overflow-y: scroll;
          overflow-x: hidden;
          
        }
        .table-description, .table-results, .table-product {
          display: flex;
          justify-content: space-evenly;
          width: 100%;
        }
        .table-results {
          flex-direction: column;
        }
        .table-description {
          align-items: center;
          border-bottom: 4px solid white;
        }
        .table-product {
          display: flex;
          width: 100%;
          border-bottom: 2px solid white;
        }
        .table-description > h3, .table-product > p {
          width: 11.25vw;
          padding-left: 10px;
          text-align: center;
        }
        .table-description > h3:first-child, .table-product > p:first-child {
          width: 50vw;
          text-align: left;
        }
      `}</style>
    </main>
  )
}