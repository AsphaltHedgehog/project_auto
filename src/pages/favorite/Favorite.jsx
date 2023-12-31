// base
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// operations
import { fetchCatalog } from "../../redux/catalog/operation";

// selectors
import { CarCatalog, isLoading } from "../../redux/catalog/selectors";
import { CarFavorite } from "../../redux/favorite/selectors";

// components 
import CarCard from "../../components/carCard/CarCard";
import Filter from "../../shared/filterForm/FilterForm";

// styled
import { MainSection } from './Favorite.styled'

// loader
import { BeatLoader } from "react-spinners";


const Favorite = () => {
  // selectors
  const catalog = useSelector(CarCatalog);
  const favorite = useSelector(CarFavorite)
  const isLoad = useSelector(isLoading)
  const [page, setPage] = useState(1);

  const dispatch = useDispatch(fetchCatalog);

  const [filteredCatalog, setFilteredCatalog] = useState([]);

  useEffect(() => {
    dispatch(fetchCatalog({ page: page, limit: 50 }));
  }, [dispatch, page]);


  const searchFavorites = () => { 
    const arrayOfFavorites = filteredCatalog.filter(car => favorite.includes(car.id));
    return arrayOfFavorites;
  };

  return (
    <MainSection>
      <Filter catalog={catalog} setFilter={setFilteredCatalog} setPage={setPage} />
      {<CarCard catalog={searchFavorites()} />}
      {isLoad && <BeatLoader color="#3470FF"/>}
    </MainSection>
  )
};

export default Favorite;

