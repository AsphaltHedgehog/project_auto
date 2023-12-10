import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;

  width: 910px;
`

export const FormBtn = styled.button`
  background-color: #3470FF;
  border: none;
  border-radius: 12px;
  padding: 12px 44px;
  height: 48px;

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