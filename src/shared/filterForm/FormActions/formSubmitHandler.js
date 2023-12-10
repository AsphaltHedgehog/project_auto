
// operations
import { fetchCatalog } from '../../../redux/catalog/operation'

const formSubmitHandler = (event, filteredObject, dispatch, setPage, catalog, setFilter) => {

  const handleSubmit = async (event, filteredObject, dispatch, setPage, catalog, setFilter) => {
    event.preventDefault();
    const { brand, price, mileageFrom, mileageTo } = filteredObject
    // const filteredObject = {
    //   brand: selectedCarBrand,
    //   price: selectedCarPrice,
    //   mileageFrom: selectedCarMileageFrom,
    //   mileageTo: selectedCarMileageTo
    // }
  
    if (brand === 'All' && price === 'All' && mileageFrom === '' && mileageTo === '') {
      setPage(1)
      await dispatch(fetchCatalog({ page: 1, limit: 12 }));
    } else {
      await dispatch(fetchCatalog({ page: 1, limit: 50 }));
    }

    setFilter(applyFilter(catalog, filteredObject));
  };

  const applyFilter = (catalog, filteredObject) => {
    const { brand, price, mileageFrom, mileageTo } = filteredObject
    // filtering and returning
    return catalog.filter(car => {
      // filter by brand
      const filBrand = brand === 'All' || car.make === brand;
      // replace non numeric characters with empty string
      const priceNumber = parseInt(car.rentalPrice.replace(/\D/g, ''));
      // filter by price
      const filPrice =
        price === 'All' ||
        (price === '200+' ? priceNumber >= 200 : (priceNumber >= parseInt(price) && priceNumber <= (parseInt(price) + 9)));
      
      // filter by mileage
      const filMileageFrom = mileageFrom === '' || car.mileage >= parseInt(mileageFrom);

      const filMileageTo = mileageTo === '' || car.mileage <= parseInt(mileageTo);
      // return result 
      return filBrand && filPrice && filMileageFrom && filMileageTo;
    }
    );
  };

  handleSubmit(event, filteredObject, dispatch, setPage, catalog, setFilter);
};

export default formSubmitHandler;