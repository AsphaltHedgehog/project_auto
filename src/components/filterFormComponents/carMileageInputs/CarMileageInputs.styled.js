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
`


export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  width: 100%;
`

export const Input = styled.input`
  background-color: #8A8A8933;
  border-radius: 14px 0 0 14px;
  border: none;
  border-right: 1px solid #8A8A8933;

  width: 160px;
  padding: 14px 14px 14px 61px;

  color: #121417;
  font-size: 18px;
  line-height: 1.2;
  font-weight: 500;

  &::-webkit-inner-spin-button , &::-webkit-outer-spin-button {
    
  }
`