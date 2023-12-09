import { useState } from "react";



const Filter = ({ catalog, setFilter }) => {
  const [selectedCarBrand, setSelectedCarBrand] = useState('All');
  const [selectedCarPrice, setSelectedCarPrice] = useState('All');
  
  const renderCarBrands = (catalog) => {
    const uniqueBrands = Array.from(new Set(catalog.map(car => car.make)));
    return uniqueBrands.map(car => {
      return (
        <option key={car} value={car}>
          {car}
        </option>
      );
    });
  };

  const handleSelectChange = (event) => {
    switch (event.target.name) {
      case 'carBrand':
        setSelectedCarBrand(event.target.value);
        break;
      case 'carPrice':
        setSelectedCarPrice(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => { 
    event.preventDefault();
    const filteredObject = {
      brand: selectedCarBrand,
      price: selectedCarPrice,
    }

    setFilter(applyFilter(catalog, filteredObject));
  };

  const applyFilter = (catalog, filteredObject) => {
    // filtering and returning
    return catalog.filter(car => {
      // replace non numeric characters with empty string
      const priceNumber = parseInt(car.rentalPrice.replace(/\D/g, ''));
        // filter by brand
      const brand = filteredObject.brand === 'All' || car.make === filteredObject.brand;
      // filter by price
      const price =
        filteredObject.price === 'All' || (filteredObject.price === '200+' ? priceNumber >= 200 : priceNumber === Number(filteredObject.price));
      
      // return result 
      return brand && price;
      }
  )};
  
  return (
    <form onSubmit={handleSubmit}>
      <label >
        Car Brand
        <select name='carBrand' value={selectedCarBrand} onChange={handleSelectChange}>
          <option value='All'>Select car brand</option>
          {renderCarBrands(catalog)}
        </select>
      </label>
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
      <button type="submit">Search</button>
    </form>
  );
};


export default Filter;