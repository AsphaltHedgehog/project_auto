// styled
import { AdditionalInfo, AdditionalInfoContainer, Button,  Img,  Wrapper, MainInfoContainer, Maker, Model, Year, TitleString, AdditionalInfoWrapper, Description, WrapperAccFunc, AccFuncHeader, AccFuncInfoContainer, AccFuncInfo } from './ModalCarInfo.styled'


const CarModalInfo = ({ carInfo }) => {
  console.log(carInfo);
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
          <Button onClick={() => {}}>Rental car</Button>
      </Wrapper>
    );
  };

  return (
    carInfoRenderer()
  )
};

export default CarModalInfo;