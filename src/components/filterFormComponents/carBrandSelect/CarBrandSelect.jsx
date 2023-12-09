

const CarBrandSelector = ({catalog, selectedCarBrand, handleSelectChange}) => {

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

  return(
    <label >
        Car Brand
        <select name='carBrand' value={selectedCarBrand} onChange={handleSelectChange}>
          <option value='All'>Select car brand</option>
          {renderCarBrands(catalog)}
        </select>
      </label>
  )
}


export default CarBrandSelector;