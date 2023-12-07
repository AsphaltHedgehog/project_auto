// base
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// operations
import { fetchCatalog } from "../../redux/catalog/operation";

// selectors
import { CarCatalog } from "../../redux/catalog/selectors";
import { CarFavorite } from "../../redux/favorite/selectors";

// components 
import CarCard from "../../components/carCard/CarCard";


const Favorite = () => {
  const dispatch = useDispatch(fetchCatalog);
  const catalog = useSelector(CarCatalog);
  const favorite = useSelector(CarFavorite)

  useEffect(() => {
    dispatch(fetchCatalog({ page: 1, limit: 32 }));
  }, [dispatch]);

  const searchFavorites = () => { 
    const arrayOfFavorites = catalog.filter(car => favorite.includes(car.id));
    console.log(arrayOfFavorites);
    return arrayOfFavorites;
  };

  return (
    <>
      {<CarCard catalog={ searchFavorites() } />}
    </>
  )
};

export default Favorite;