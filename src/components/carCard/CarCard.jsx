// base
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// slice
import { setFavorite } from "../../redux/favorite/favorite";

// selector
import { CarFavorite } from "../../redux/favorite/selectors";

// modal
import Modal from "../modal/Modal";

// svg
import favoriteSvg from "../../img/Sprite.svg";

// styled
import { AdditionalInfo, AdditionalInfoContainer, Button, FavoriteBtn, Img, List, ListItem, MainInfoContainer, Maker, Model, PriceYear, TitleString, AdditionalInfoWrapper } from './CarCard.styled'

// toast
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const CarCard = ({ catalog }) => {
  const dispatch = useDispatch()
  const favorite = useSelector(CarFavorite)
  const [isOpened, setToggleModal] = useState(false)
  const [carInfo, setCarInfo] = useState({})

  // notify
  const successAddFavoriteNotify = () => toast.success(`Added to favorites!`);
  const successRemoveFavoriteNotify = () => toast.warn(`Removed from favorites!`);

  const handleToggleFavorite = (id) => {
    dispatch(setFavorite(id))
    if (favorite.includes(id)) {
      successAddFavoriteNotify()
    } else {
      successRemoveFavoriteNotify()
    }
    
  }

  const cards = () => {
    return catalog.map((car) => (
      <ListItem key={car.id}>
        <FavoriteBtn onClick={() => handleToggleFavorite(car.id)}>
          <svg width='18px' height='18px'
            style={favorite.includes(car.id) ?
              { fill: '#3470FF', stroke: '#3470FF' } :
              { fill: 'transparent', stroke: '#FFFFFFCC' }}
          >
            <use href={`${favoriteSvg}#favoriteSvg`}></use>
          </svg>
        </FavoriteBtn>
        <Img src={car.img} alt={car.description} />
        <MainInfoContainer>
          <TitleString>
            <Maker>{car.make}</Maker>
            <Model>{car.model},</Model>
            <PriceYear> {car.year}</PriceYear>
          </TitleString>
          <PriceYear>{car.rentalPrice}</PriceYear>
        </MainInfoContainer>
        <AdditionalInfoWrapper>
          <AdditionalInfoContainer>
            <AdditionalInfo>{car.address.split(', ')[1]} |</AdditionalInfo>
            <AdditionalInfo>{car.address.split(', ')[2]} |</AdditionalInfo>
            <AdditionalInfo>{car.rentalCompany} |</AdditionalInfo>
            <AdditionalInfo>{car.type} |</AdditionalInfo>
            <AdditionalInfo>{car.model} |</AdditionalInfo>
            <AdditionalInfo>{car.mileage} |</AdditionalInfo>
            <AdditionalInfo>{car.accessories[0]}</AdditionalInfo>
          </AdditionalInfoContainer>
          <Button onClick={() => {
            setCarInfo(car)
            setToggleModal(true)
          }}>Learn more</Button>
        </AdditionalInfoWrapper>
      </ListItem>
    ));
  };

  return (
    <>
      <List>{cards()}</List>
      {isOpened && <Modal children={carInfo} closeModal={setToggleModal} />}
    </>
  )
};

export default CarCard;