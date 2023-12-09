const CarPriceSelector = ({selectedCarPrice, handleSelectChange}) => {

  return (
    <label>
        Price/1 hour
        <select name='carPrice' value={selectedCarPrice} onChange={handleSelectChange}>
          <option value='All'>Select price</option>
          <option value='10'>$10</option>
          <option value='20'>$20</option>
          <option value='30'>$30</option>
          <option value='40'>$40</option>
          <option value='50'>$50</option>
          <option value='60'>$60</option>
          <option value='70'>$70</option>
          <option value='80'>$80</option>
          <option value='90'>$90</option>
          <option value='100'>$100</option>
          <option value='150'>$150</option>
          <option value='200+'>$200+</option>
        </select>
      </label>
  )
}


export default CarPriceSelector;