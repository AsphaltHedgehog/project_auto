import styled from "styled-components";


export const MainSection = styled.div`
  width: 1440px;
  padding-right: 128px;
  padding-left: 128px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
  margin-bottom: 80px;

  width: 1184px;
`;

export const LoadMoreBtn = styled.button`
  width: 90px;
  padding: 0;
  margin-bottom: 20px;

  font-size: 16px;
  color: #3470FF;

  background-color: transparent;
  border: none;

  text-decoration: underline;

  transition: color 250ms ease-in ;

  &:hover { 
    color: #0B44CD;
  }
`;