import styled from "styled-components";

export const Label = styled.label`
display: flex;
flex-direction: column;
flex-wrap: nowrap;
gap: 8px;

width: 320px;

font-size: 14px;
line-height: 1.5;
font-weight: 500;
color: #8A8A89;

position: relative;
`

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  
  width: 100%;
  `

export const From = styled.span`
  position: absolute;
  left: 24px;
  bottom: 15px;

  font-weight: 500;
  font-size: 18px;
  line-height: 1.2;
  color: #121417;
`

export const To = styled.span`
  position: absolute;
  bottom: 15px;
  left: 184px;

  font-weight: 500;
  font-size: 18px;
  line-height: 1.2;
  color: #121417;
`

export const InputLeft = styled.input`
  background-color: #F7F7FB;
  border-radius: 14px 0 0 14px;
  border: none;
  border-right: 1px solid #8A8A8933;

  width: 160px;
  padding: 14px 14px 14px 70px;

  color: #121417;
  font-size: 18px;
  line-height: 1.2;
  font-weight: 500;

  outline: none;

  &::-webkit-inner-spin-button , &::-webkit-outer-spin-button {
    appearance: none;
  }
`

export const InputRight = styled.input`
  background-color: #F7F7FB;
  border-radius: 0 14px 14px 0;
  border: none;
  border-right: 1px solid #8A8A8933;

  width: 160px;
  padding: 14px 14px 14px 47px;

  color: #121417;
  font-size: 18px;
  line-height: 1.2;
  font-weight: 500;

  outline: none;

  &::-webkit-inner-spin-button , &::-webkit-outer-spin-button {
    appearance: none;
  }
`