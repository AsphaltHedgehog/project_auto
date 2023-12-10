// base
import { useEffect, useState } from "react";

// styles 
import { Input, Label, Svg} from "./CarBrandSelect.styled";

// svg
import svg from '../../../img/Sprite.svg'

const CarBrandSelector = ({ catalog, selectedCarBrand, handleSelectChange }) => {
  
  const [isFocused, setIsFocused] = useState(false)



  useEffect(() => {
    const myElement = document.getElementById('rotate');
    if (isFocused) {
      myElement.classList.add('selected');
    } else {
      myElement.classList.remove('selected');
    }
  },[isFocused])

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
    <Label>
        Car Brand
      <Input name='carBrand' value={selectedCarBrand} onChange={handleSelectChange}
        onBlur={() => setIsFocused(false)}
        onClick={() => setIsFocused(!isFocused)}
      >
          <option value='All' className="option">Select car brand</option>
          {renderCarBrands(catalog)}
      </Input>
      <Svg height={25} width={25} id="rotate"
      >
        <use href={`${svg}#selectArrow`}>
        </use>
      </Svg>
      </Label>
  )
}


export default CarBrandSelector;