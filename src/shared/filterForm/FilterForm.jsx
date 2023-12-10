// base
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// components
import CarBrandSelector from "../../components/filterFormComponents/carBrandSelect/CarBrandSelect";
import CarPriceSelector from "../../components/filterFormComponents/carPriceSelect/CarPriceSelect";
import CarMileageInputs from "../../components/filterFormComponents/carMileageInputs/CarMileageInputs";
import formSubmitHandler from "./FormActions/formSubmitHandler";

// styled 
import { FormWrapper, FormBtn } from "./FilterForm.styled";


const Filter = ({ catalog, setFilter, setPage, page }) => {
  // // hooks
  const dispatch = useDispatch();

  // states
  const [selectedCarBrand, setSelectedCarBrand] = useState('All');
  const [selectedCarPrice, setSelectedCarPrice] = useState('All');
  const [selectedCarMileageFrom, setSelectedCarMileageFrom] = useState('');
  const [selectedCarMileageTo, setSelectedCarMileageTo] = useState('');
  
  useEffect(() => {
    if (catalog.length > 12 && page === 1) {
      return
    }
    setFilter(catalog);
  }, [catalog, page, setFilter]);
  
  const handleSelectChange = (event) => {
    switch (event.target.name) {
      case 'carBrand':
        setSelectedCarBrand(event.target.value);
        break;
      case 'carPrice':
        setSelectedCarPrice(event.target.value);
        break;
      case 'mileageFrom':
        setSelectedCarMileageFrom(event.target.value);
        break
      case 'mileageTo':
        setSelectedCarMileageTo(event.target.value);
        break
      default:
        break;
    }
  };

  const filteredObject = {
    brand: selectedCarBrand,
    price: selectedCarPrice,
    mileageFrom: selectedCarMileageFrom,
    mileageTo: selectedCarMileageTo
  };
  
  return (
    <FormWrapper onSubmit={(event) => formSubmitHandler(event, filteredObject, dispatch, setPage, catalog, setFilter)}>
      {/* Brand selector */}
      <CarBrandSelector selectedCarBrand={selectedCarBrand} handleSelectChange={handleSelectChange} />
      {/* Price selector */}
      <CarPriceSelector selectedCarPrice={selectedCarPrice} handleSelectChange={handleSelectChange} />
      {/* Mileage inputs */}
      <CarMileageInputs selectedCarMileageFrom={selectedCarMileageFrom} selectedCarMileageTo={selectedCarMileageTo} handleSelectChange={handleSelectChange} />
      {/* submit button */}
      <FormBtn type="submit">Search</FormBtn>
    </FormWrapper>
  );
};


export default Filter;