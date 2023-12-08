// base
import ReactDOM from 'react-dom';
import React, { useCallback, useEffect } from 'react';

// svg
import closeSvg from '../../img/Sprite.svg';

// styled
import {
  CloseButton,
  ContentWrapper,
  StyledSvgUser,
  StyledWrapper,
} from './Modal.styled';
import CarModalInfo from '../modalCarInfo/ModalCarInfo';



const Modal = ({ children, closeModal }) => {

  const handleKeyDown = useCallback(
    e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'visible';
    };
  }, [closeModal, handleKeyDown]);

  const handleBackDrop = ({ currentTarget, target }) => {
    if (currentTarget === target) {
      closeModal();
    }
  };

  return ReactDOM.createPortal(
    <StyledWrapper onClick={handleBackDrop}>
      <ContentWrapper>
        <CloseButton onClick={() => closeModal()}>
          <StyledSvgUser width={16} height={16}>
            <use href={`${closeSvg}#closeSvg`} />
          </StyledSvgUser>
        </CloseButton>
        <CarModalInfo carInfo={children} />
      </ContentWrapper>
    </StyledWrapper>,
    document.body
  );
};


export default Modal;