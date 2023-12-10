// base
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// selector
import { CarBrands } from "../../../redux/catalog/selectors";

// operation
import { fetchCatalog } from "../../../redux/catalog/operation";

// styles 
import { Input, Label, Svg} from "./CarBrandSelect.styled";

// svg
import svg from '../../../img/Sprite.svg'


const CarBrandSelector = ({ selectedCarBrand, handleSelectChange }) => {
  const carBrands = useSelector(CarBrands);
  const dispatch = useDispatch();
  const [isFocused, setIsFocused] = useState(false)



  useEffect(() => {
    const myElement = document.getElementById('rotate');
    if (isFocused) {
      myElement.classList.add('selected');
    } else {
      myElement.classList.remove('selected');
    }
  }, [isFocused])
  
    // fetching all brands
  useEffect(() => {
    dispatch(fetchCatalog({ page: 1, limit: 32 }));
  },[dispatch])

  const renderCarBrands = (brands) => {
    const uniqueBrands = Array.from(new Set(brands.map(car => car.make)));
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
          {renderCarBrands(carBrands)}
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