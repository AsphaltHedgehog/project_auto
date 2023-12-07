// base
import { useDispatch, useSelector } from "react-redux";

// slice
import { setFavorite } from "../../redux/favorite/favorite";

// selector
import { CarFavorite } from "../../redux/favorite/selectors";

// svg
import favoriteSvg from "../../img/Sprite.svg";


const CarCard = ({ catalog }) => {
  const dispatch = useDispatch()
  const favorite = useSelector(CarFavorite)


  const handleToggleFavorite = (id) => {
    dispatch(setFavorite(id))
  }

  const cards = () => {
    return catalog.map((car, i) => (
      <li key={car.id}>
        <button onClick={() => handleToggleFavorite(car.id)}>
          <svg width='18px' height='18px'
            style={favorite.includes(car.id) ?
              { fill: '#3470FF', stroke: '#3470FF' } :
              { fill: 'transparent', stroke: '#FFFFFFCC' }}
          >
            <use href={`${favoriteSvg}#favoriteSvg`}></use>
          </svg>
        </button>
        <img src={car.img} alt={car.description} />
        <div>
          <div>
            <h2>{car.make}</h2>
            <h3>{car.model},</h3>
            <p> {car.year}</p>
          </div>
          <p>{car.rentalPrice}</p>
        </div>
        <div>
          <p>{car.address.split(', ')[1]} |</p>
          <p>{car.address.split(', ')[2]} |</p>
          <p>{car.rentalCompany} |</p>
          <p>{car.type} |</p>
          <p>{car.model} |</p>
          <p>{car.mileage} |</p>
          <p>{car.accessories[1]}</p>
        </div>
        <button>Learn more</button>
      </li>
    ));
  };

  return (
    cards()
  )
};

export default CarCard;