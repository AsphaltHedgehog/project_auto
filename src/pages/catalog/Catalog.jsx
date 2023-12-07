// base
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatalog } from "../../redux/catalog/operation";

// selectors
import { CarCatalog } from "../../redux/catalog/selectors";

// components
import CarCard from "../../components/carCard/CarCard";

// styled


const Catalog = () => {
  const [ page, setPage ] = useState(1)
  const dispatch = useDispatch(fetchCatalog);
  const catalog = useSelector(CarCatalog);

  useEffect(() => {
    dispatch(fetchCatalog({page: page, limit: 12}));
  }, [page, dispatch]);
  

  return (
    <>
      <h1>Catalog Page</h1>
      <section>
        {catalog.length !== 0 && <CarCard catalog={catalog} />}
      </section>
      {catalog.length !== page * 12 ? '' :
        <button onClick={() => setPage(page + 1)}>Load More</button>
      }
    </>
  )
}

export default Catalog;