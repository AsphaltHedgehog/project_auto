import React from "react";

// styled
import {
  PageContainer,
  MainSection,
  Section,
  Heading,
  SubHeading,
  Paragraph,
  ServiceList,
  ServiceItem,
} from './Home.styled.js';

const Home = () => {
  return (
    <PageContainer>
      <MainSection>
        <Heading>Welcome to "Express Car Rentals"!</Heading>
        <Section>
          <SubHeading>Seamless Travel - Making Your Journeys Effortless!</SubHeading>
          <Paragraph>
            Greetings from "Express Car Rentals," your go-to destination for comfortable and secure travels.
            We present a diverse fleet of rental cars to meet your unique needs, surpassing your expectations at every turn.
          </Paragraph>
        </Section>
        <Section>
          <SubHeading>Our Services:</SubHeading>
          <ServiceList>
            <ServiceItem>
              <span>Car Variety:</span> Take your pick from our extensive selection of cars – from chic sedans to robust SUVs and practical minivans.
              We aim to cater to all your preferences.
            </ServiceItem>
            <ServiceItem>
              <span>Effortless Booking:</span> Elevating car rentals with a streamlined and quick reservation process.
              It only takes a few steps to get the keys to your perfect car.
            </ServiceItem>
            <ServiceItem>
              <span>24/7 Customer Support:</span> Our team is always on standby, ready to assist you at any time. We value your time and comfort.
            </ServiceItem>
            <ServiceItem>
              <span>Your Road Safety Matters:</span> Each car undergoes thorough checks and maintenance before every trip,
              ensuring your safety and reliability on the road.
            </ServiceItem>
            <ServiceItem>
              <span>Flexible Rates:</span> Our flexible rate system allows you to book a car for short-term or long-term rental at advantageous terms.
            </ServiceItem>
          </ServiceList>
        </Section>
        <Section>
          <Paragraph>
            Visit "Express Car Rentals" and allow yourself to experience elegance and freedom on the road! Your adventure begins with us. 🌟
          </Paragraph>
        </Section>
      </MainSection>
    </PageContainer>
  );
}

export default Home;