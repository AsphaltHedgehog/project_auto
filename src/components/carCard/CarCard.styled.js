import styled from "styled-components";

// main ul styles
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 59px;
  column-gap: 29px;

  list-style: none;
  padding: 0;
  margin: 0;
`

export const ListItem = styled.li`
  width: 274px;
  height: 426px;

  position: relative;
`

// card styles
export const FavoriteBtn = styled.button`
  background-color: transparent;
  border: none;

  position: absolute;
  top: 14px;
  right: 14px;
`

export const Img = styled.img`
  display: block;
  width: 274px;
  height: 268px;

  border-radius: 14px;

  object-fit: cover;

  margin-bottom: 14px;
`

// main info string
export const MainInfoContainer = styled.div`
  width: 265px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-right: 9px;
  margin-bottom: 8px;
`

export const TitleString = styled.div`
  display: flex;
  gap: 4px;
`

export const Maker = styled.h2`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
  color: #121417;

  margin: 0;

  max-width: 75px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const Model = styled.h3`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
  color: #3470FF;

  margin: 0;

  max-width: 75px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const PriceYear = styled.p`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
  color: #121417;

  margin: 0;
`

// additional info string

export const AdditionalInfoWrapper = styled.div`
  height: 110px;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
`

export const AdditionalInfoContainer = styled.div`
  width: 270px;

  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`

export const AdditionalInfo = styled.p`
  font-size: 12px;
  line-height: 1.5;
  font-weight: 400;
  color: #12141780;

  margin: 0;
`

// button

export const Button = styled.button`
  width: 100%;

  background-color: #3470FF;
  border: none;
  border-radius: 12px;
  padding: 12px 99px;

  color: #FFFFFF;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 600;

  transition: background-color 250ms ease-in ;

  cursor: pointer;

  &:hover, &:focus {
    background-color: #0B44CD;
  }
`