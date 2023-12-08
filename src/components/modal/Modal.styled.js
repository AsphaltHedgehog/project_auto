import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const ContentWrapper = styled.div`
  position: relative;
  background-color: white;
  border: 1px solid rgba(250, 250, 250, 0.1);
  overflow: hidden;
  border-radius: 30px;
  /* width: 500px; */

  @media (max-width: 767px) {
    /* width: 335px; */
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 24px;
  height: 24px;
  z-index: 1200;
`;

export const StyledSvgUser = styled.svg`
  stroke: #121417;
  transition: transform 250ms ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;