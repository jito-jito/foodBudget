import SelectInput from '../../../components/SelectInput'

export default function ({ 
  onSubmitData,
  options,
  setOptions
}) {

  return (
    <>
      <form 
        className="form" 
        id='search-form' 
        onSubmit={onSubmitData} 
      >
        <fieldset className="form-fieldset" >
          <label 
            htmlFor="searchInput" 
            className="form-title" 
          >
            Agrega el producto que quieres buscar
          </label>
          <input 
            className="form-input" 
            id="searchInput" 
            placeholder="fideos" 
            type='text' 
          />
          <input 
            className="form-button" 
            value="Buscar" 
            type='submit' 
          />
        </fieldset>
        <fieldset className="form-fieldset" >
          <label 
            htmlFor="selectInput"
            className="form-title"
          >
            Selecciona los mercados a considerar en la busquedas
          </label>
          
          <SelectInput 
            targetId="selectInput"  
            options={options} 
            setOptions={setOptions}
          />
        </fieldset>
      </form>

      <style jsx>{`
        
        .form {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          max-width: 600px;
          margin: 15px
        }

        .form-fieldset {
          display:flex;
          flex-wrap: wrap;
          max-width: 600px;
          border: none;
        }

        .form-title {
          flex-shrink: 0;
          display: block;
          width: 100%;
          margin: 8px 0;
          text-align: left;
          font-weight: bold;
        }

        .form-input {
          width: 80%;
          height: 30px;
          padding-left: 30px;
          border: 1px solid #0000008a;
          border-radius: 15px;
          background-color: white;
          color: #2c3d51;
        }
        .form-input::placeholder {
          font-size: 15px;
        }

        .form-button {
          width: 13%;
          height: 30px;
          margin-left: 10px;
          border-radius: 12px;
          background-color: #2E3F53;
          color: white;
          font-size: 15px;
        }      
      `}</style>
    </>
  )
}