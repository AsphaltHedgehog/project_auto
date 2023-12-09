// styled 
import { Label, InputsWrapper,Input } from './CarMileageInputs.styled.js'

const CarMileageInputs = ({selectedCarMileageFrom, selectedCarMileageTo, handleSelectChange}) => {

  return (
    <Label>
        Сar mileage / km
      <InputsWrapper>
        <Input type="number" name="mileageFrom" value={selectedCarMileageFrom} onChange={handleSelectChange}></Input>
        <Input type="number" name="mileageTo" value={selectedCarMileageTo} onChange={handleSelectChange}></Input>
      </InputsWrapper>
      </Label>
  )
}


export default CarMileageInputs;