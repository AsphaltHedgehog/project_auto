// base
import { useEffect, useState } from "react";

// styles 
import { Input, Label, Svg, From } from "./CarPriceSelect.styled";

// svg
import svg from '../../../img/Sprite.svg'

const CarPriceSelector = ({ selectedCarPrice, handleSelectChange }) => {
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    const myElement = document.getElementById('rotate2');
    if (isFocused) {
      myElement.classList.add('selected');
    } else {
      myElement.classList.remove('selected');
    }
  },[isFocused])

  return (
    <Label>
      Price/1 hour
      <From>From</From>
      <Input name='carPrice' value={selectedCarPrice} onChange={handleSelectChange}
        onBlur={() => setIsFocused(false)}
        onClick={() => setIsFocused(!isFocused)}
      >
          <option value='All'>$0</option>
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
      </Input>
      <Svg height={25} width={25} id="rotate2">
        <use href={`${svg}#selectArrow`}>
        </use>
        </Svg>
      </Label>
  )
}


export default CarPriceSelector;