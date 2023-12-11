// base
import { useState } from 'react';

// styled
import { AdditionalInfo, AdditionalInfoContainer, Button, Img, Wrapper, MainInfoContainer, Maker, Model, Year, TitleString, AdditionalInfoWrapper, Description, WrapperAccFunc, AccFuncHeader, AccFuncInfoContainer, AccFuncInfo, ConditionWrapper, ConditionHeader, ConditionInfoWrapper, ConditionInfoContainer, ConditionInfo, ConditionValue } from './ModalCarInfo.styled'


const CarModalInfo = ({ carInfo }) => {
  const [RentalPhone, setRentalPhone] = useState(false);

  const pidorasina = () => {
    const rentalConditionArray = carInfo.rentalConditions.split('\n');

    const RentalConditionsElements = rentalConditionArray.map((item) => {
      const split = item.split(': ');

      if (split.length === 2) {
        const value = <ConditionValue>{split[1]}</ConditionValue>;
        return (<ConditionInfoContainer key={split[0]}>
          <ConditionInfo>{split[0]}: {value}</ConditionInfo>
        </ConditionInfoContainer>)
      } else {
        return (<ConditionInfoContainer key={split[0]}><ConditionInfo>{split[0]}</ConditionInfo></ConditionInfoContainer>)
      }
    });

    return RentalConditionsElements;
  };

  const Pidorasina2 = (distance) => {
    const numberString = distance.toString();

    const formattedInteger = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return formattedInteger;
  };

  const carInfoRenderer = () => {
    return (
      <Wrapper key={carInfo.id}>
        <Img src={carInfo.img} alt={carInfo.description} />
        <MainInfoContainer>
          <TitleString>
            <Maker>{carInfo.make}</Maker>
            <Model>{carInfo.model}</Model>
            <Year>{carInfo.year}</Year>
          </TitleString>
        </MainInfoContainer>
        <AdditionalInfoWrapper>
          <AdditionalInfoContainer>
            <AdditionalInfo>{carInfo.address.split(', ')[1]} |</AdditionalInfo>
            <AdditionalInfo>{carInfo.address.split(', ')[2]} |</AdditionalInfo>
            <AdditionalInfo>Id: {carInfo.id} |</AdditionalInfo>
            <AdditionalInfo>Year: {carInfo.year} |</AdditionalInfo>
            <AdditionalInfo>Type: {carInfo.type} </AdditionalInfo>
            <AdditionalInfo>Fuel Consumption: {carInfo.fuelConsumption} |</AdditionalInfo>
            <AdditionalInfo>Engine Size: {carInfo.engineSize}</AdditionalInfo>
          </AdditionalInfoContainer>
        </AdditionalInfoWrapper>
        <Description>{carInfo.description}</Description>
        <WrapperAccFunc>
          <AccFuncHeader>Accessories and functionalities:</AccFuncHeader>
          <AccFuncInfoContainer>
            <AccFuncInfo>{ carInfo.accessories[0] } |</AccFuncInfo>
            <AccFuncInfo>{ carInfo.accessories[1] } |</AccFuncInfo>
            <AccFuncInfo>{ carInfo.accessories[2] } </AccFuncInfo>
            <AccFuncInfo>{ carInfo.functionalities[0] } |</AccFuncInfo>
            <AccFuncInfo>{ carInfo.functionalities[1] } |</AccFuncInfo>
            <AccFuncInfo>{ carInfo.functionalities[2] } </AccFuncInfo>
          </AccFuncInfoContainer>
        </WrapperAccFunc>
        <ConditionWrapper>
          <ConditionHeader>
            Rental Conditions:
          </ConditionHeader>
          <ConditionInfoWrapper>
            {pidorasina()}
            <ConditionInfoContainer><ConditionInfo>Mileage: <ConditionValue>{Pidorasina2(carInfo.mileage)}</ConditionValue></ConditionInfo></ConditionInfoContainer>
            <ConditionInfoContainer><ConditionInfo>Price: <ConditionValue>{ carInfo.rentalPrice }</ConditionValue></ConditionInfo></ConditionInfoContainer>
          </ConditionInfoWrapper>
        </ConditionWrapper>
          <a href='tel:+380730000000'><Button onClick={() => {setRentalPhone(true)}}>{RentalPhone ? '+380730000000' : 'Rental car'}</Button></a>
      </Wrapper>
    );
  };

  return (
    carInfoRenderer()
  )
};

export default CarModalInfo;