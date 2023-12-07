import styled from 'styled-components';

// export const PageContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   /* height: 100vh; */
// `;

export const MainSection = styled.div`
  text-align: center;
  max-width: 600px;
`;

export const Section = styled.section`
  margin: 20px 0;
`;

export const Heading = styled.h1`
  font-size: 2em;
  margin-bottom: 10px;
`;

export const SubHeading = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

export const Paragraph = styled.p`
  font-size: 1em;
  margin-bottom: 20px;
`;

export const ServiceList = styled.ol`
  /* list-style-type: none; */
  padding: 0;
`;

export const ServiceItem = styled.li`
  margin-bottom: 10px;

  span {
    font-weight: bold;
    margin-right: 5px;
  }
`;

export const Footer = styled.footer`
  font-size: 1em;
`;