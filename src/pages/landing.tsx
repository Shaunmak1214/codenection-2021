import React from 'react';
import { Container, HStack, Box } from '@chakra-ui/layout';
import { Image, Heading } from '@chakra-ui/react';

import { PrimaryButton, PrimaryText, CNSpacer } from '../components/atoms';
import {
  RuleSection,
  FaqSection,
  CountDownSection,
  AboutSection,
  LeaderboardSection,
  SponsorSection,
} from '../components/organisms';

import { CNLanding } from '../assets';

const Landing: React.FC = () => {
  const LandingImgRenderer = () => {
    if (window.screen.width < 768) {
      return <Image position="absolute" src={CNLanding} />;
    } else {
      return <Image h="100vh" position="absolute" right="0" src={CNLanding} />;
    }
  };
  return (
    <>
      <HStack w="100%" h="100vh" position="relative" bg="#002A97">
        <Container maxW="container.xl">
          <Heading color="#ffffff">CodeNection 2021</Heading>

          <PrimaryText fontSize="2xl">
            Competitive Programming Contest
          </PrimaryText>

          <CNSpacer size="sm" />

          <PrimaryText>
            Free to all universities and colleges students
          </PrimaryText>

          <PrimaryText>across Malaysia</PrimaryText>

          <CNSpacer size="sm" />
          <PrimaryButton
            zIndex="20"
            onClick={() => (window.location.href = '/register')}
          >
            Register Now
          </PrimaryButton>
        </Container>
        <LandingImgRenderer />
      </HStack>
      <CountDownSection />
      <Box w="100%" h="300px"></Box>
      <AboutSection />
      <LeaderboardSection />
      <RuleSection />
      <FaqSection />
      <SponsorSection />
    </>
  );
};

export default Landing;
