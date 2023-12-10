// operations
import { fetchCatalog } from '../../../redux/catalog/operation'

const formSubmitHandler =  (event, filteredObject, dispatch, setPage, catalog, setFilter) => {

  const handleSubmit =  async (event, filteredObject, dispatch, setPage, catalog, setFilter) => {
    event.preventDefault();
    const { brand, price, mileageFrom, mileageTo } = filteredObject
  
    try {
      if (brand === 'All' && price === 'All' && mileageFrom === '' && mileageTo === '') {
        setPage(1)
        const { payload }= await dispatch(fetchCatalog({ page: 1, limit: 12 }));
        setFilter(prevCatalog => applyFilter(payload, filteredObject));
      } else {
        const { payload } = await dispatch(fetchCatalog({ page: 1, limit: 50 }));
        setFilter(prevCatalog => applyFilter(payload, filteredObject));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const applyFilter = (catalog, filteredObject) => {
    const { brand, price, mileageFrom, mileageTo } = filteredObject
    // filtering and returning
    const result = catalog.filter(car => {
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

    return result;
  };

  handleSubmit(event, filteredObject, dispatch, setPage, catalog, setFilter);
};

export default formSubmitHandler;