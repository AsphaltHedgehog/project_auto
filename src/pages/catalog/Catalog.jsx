// base
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// operations
import { fetchCatalog } from "../../redux/catalog/operation";

// selectors
import { CarCatalog, isLoading } from "../../redux/catalog/selectors";

// components
import CarCard from "../../components/carCard/CarCard";

// styled
import { MainSection, LoadMoreBtn } from "./Catalog.styled";
import Filter from "../../shared/filterForm/FilterForm";

// loader
import { BeatLoader } from "react-spinners";

const Catalog = () => {
  const [ page, setPage ] = useState(1)
  const dispatch = useDispatch();
  const catalog = useSelector(CarCatalog);
  const isLoad = useSelector(isLoading)
  const [filteredCatalog, setFilteredCatalog] = useState([]);

  // fetch catalog
  useEffect(() => {
    dispatch(fetchCatalog({ page: page, limit: 12 }));
  }, [page, dispatch]);

  return (
    <>
      <MainSection>
        {catalog.length !== 0 &&
          <>
          <Filter catalog={catalog} setFilter={setFilteredCatalog} setPage={setPage} page={ page } />
          <CarCard catalog={filteredCatalog}/>
          </>
        }
        {isLoad && <BeatLoader color="#3470FF"/>}
      {catalog.length !== page * 12 ? '' :
        <LoadMoreBtn onClick={() => setPage(page + 1)}>Load More</LoadMoreBtn>
      }
      </MainSection>
    </>
  )
}

export default Catalog;