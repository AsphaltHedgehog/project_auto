import styled from "styled-components";

export const Label = styled.label`
display: flex;
flex-direction: column;
flex-wrap: nowrap;
gap: 8px;

width: 170px;

font-size: 14px;
line-height: 1.5;
font-weight: 500;
color: #8A8A89;

position: relative;
`
export const From = styled.span`
  position: absolute;
  left: 24px;
  bottom: 14px;

  font-weight: 500;
  font-size: 18px;
  line-height: 1.2;
  color: #121417;
`

export const Input = styled.select`
  background-color: #F7F7FB;
  border-radius: 14px;
  border: none;
  border-right: 1px solid #8A8A8933;

  width: 100%;
  padding: 14px 18px 14px 70px;

  color: #121417;
  font-size: 18px;
  line-height: 1.2;
  font-weight: 500;

  outline: none;

  appearance: none;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-track{
    border: none;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
  background-color: #1214170D;
  border-radius: 10px;
  height: 38px;
  border:none;
}
`


export const Svg = styled.svg`
  stroke: #121417;
  fill: none;

  position: absolute;
  right: 14px;
  bottom: 14px;

  transform: rotate(180deg);

  transition: transform 350ms cubic-bezier(0.68,-0.55, 0.32, 1.51);
  pointer-events: none;

  &.selected {
    transform: rotate(0deg);
  }
`