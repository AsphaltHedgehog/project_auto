// operations
import { fetchCatalog } from '../../../redux/catalog/operation';

// toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const formSubmitHandler = (event, filteredObject, dispatch, setPage, catalog, setFilter) => {
  // toast
  const successFoundNotify = (cars) => toast.success(`We found ${cars.length} car`);
  const ResetFilterNotify = () => toast.success(`Filter reset`);
  const lowFoundNotify = (cars) => toast.warn(`We found ${cars.length}car`);
  const emptyFoundNotify = () => toast.error(`No cars found with your filters`);

  // first submit checks, if there is no filter load first page
  const handleSubmit =  async (event, filteredObject, dispatch, setPage, catalog ,setFilter) => {
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
      toast.error('Server error');
    }
  };

  // filtering results

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
      const filMileageFrom = mileageFrom === '' || car.mileage >= parseInt(mileageFrom.replace(/,/g, ''));

      const filMileageTo = mileageTo === '' || car.mileage <= parseInt(mileageTo.replace(/,/g, ''));
      // return result 
      return filBrand && filPrice && filMileageFrom && filMileageTo;
    }
    );

    // notify
    if (filteredObject.brand === 'All' && filteredObject.price === 'All' && filteredObject.mileageFrom === '' && filteredObject.mileageTo === '') {
      ResetFilterNotify()
    } else if (event.target.action.includes('favorite')) {
      // AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
    } else {
      if (result.length === 0) {
        emptyFoundNotify();
      } else if (result.length > 3) {
        successFoundNotify(result);
      } else {
        lowFoundNotify(result);
      }
    }
    
    return result;
  };

  handleSubmit(event, filteredObject, dispatch, setPage, catalog, setFilter);
};

export default formSubmitHandler;


