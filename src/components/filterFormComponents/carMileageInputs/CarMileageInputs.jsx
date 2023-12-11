// styled 
import { Label, InputsWrapper, InputLeft, InputRight, From, To } from './CarMileageInputs.styled.js'

const CarMileageInputs = ({ selectedCarMileageFrom, selectedCarMileageTo, handleSelectChange }) => {

  return (
    <Label>
      Сar mileage / km
      
      <InputsWrapper>
        <From>From</From>
        <InputLeft type="text" name="mileageFrom" value={selectedCarMileageFrom} onChange={handleSelectChange}></InputLeft>
        <InputRight type="text" name="mileageTo" value={selectedCarMileageTo} onChange={handleSelectChange}></InputRight>
        <To>To</To>
      </InputsWrapper>
    </Label>
  );
};


export default CarMileageInputs;