import styled from "styled-components";

// main ul styles
export const Wrapper = styled.div`
  width: 541px;
  padding: 40px;

  position: relative;
`

// card styles
export const Img = styled.img`
  display: block;
  width: 100%;
  height: 248px;

  border-radius: 14px;

  object-fit: cover;

  margin-bottom: 14px;
`

// main info string
export const MainInfoContainer = styled.div`
  width: 100%;
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
  font-size: 18px;
  line-height: 1.5;
  font-weight: 500;
  color: #121417;

  margin: 0;
`

export const Model = styled.h3`
  font-size: 18px;
  line-height: 1.5;
  font-weight: 500;
  color: #3470FF;

  margin: 0;
  &::after {
    color: #121417;
    content: ',';
  }
`

export const Year = styled.p`
  font-size: 18px;
  line-height: 1.5;
  font-weight: 500;
  color: #121417;

  margin: 0;
`

// additional info string

export const AdditionalInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;

  margin-bottom: 14px;
`

export const AdditionalInfoContainer = styled.div`
  width: 277px;

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

// description

export const Description = styled.p`
  font-size: 14px;
  line-height: 1.5;
  font-weight: 400;
  color: #121417;

  margin-top: 0;
  margin-bottom: 24px;
`

// Accessories and functionalities

export const WrapperAccFunc = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  margin-bottom: 24px;
`

export const AccFuncHeader = styled.h3`
  font-size: 14px;
  color: #121417;
  line-height: 1.5;
  font-weight: 500;

  margin: 0;
`

export const AccFuncInfoContainer = styled.div`
  width: 343px;

  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`

export const AccFuncInfo = styled.p`
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

  &:hover {
    background-color: #0B44CD;
  }
`