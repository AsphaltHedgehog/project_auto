// base
import { useDispatch, useSelector } from "react-redux";

// slice
import { setFavorite } from "../../redux/favorite/favorite";

// selector
import { CarFavorite } from "../../redux/favorite/selectors";

// svg
import favoriteSvg from "../../img/Sprite.svg";

// selectors
import { AdditionalInfo, AdditionalInfoContainer, Button, FavoriteBtn, Img, List, ListItem, MainInfoContainer, Maker, Model, PriceYear, TitleString, AdditionalInfoWrapper } from './CarCard.styled'


const CarCard = ({ catalog }) => {
  const dispatch = useDispatch()
  const favorite = useSelector(CarFavorite)


  const handleToggleFavorite = (id) => {
    dispatch(setFavorite(id))
  }

  const cards = () => {
    return catalog.map((car, i) => (
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
          <Button>Learn more</Button>
        </AdditionalInfoWrapper>
      </ListItem>
    ));
  };

  return (
    <List>{cards()}</List>
  )
};

export default CarCard;