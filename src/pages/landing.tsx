import React from 'react';
import { Container, HStack } from '@chakra-ui/layout';
import { Image, Heading, Text, Box } from '@chakra-ui/react';

import { PrimaryButton, PrimaryText, CNSpacer } from '../components/atoms';
import {
  RuleSection,
  FaqSection,
  CountDownSection,
  AboutSection,
  LeaderboardSection,
  SponsorSection,
  EventDateSection,
  AgendaSection,
  TitleSponsorSection,
  MediaPartnersSection,
} from '../components/organisms';

import { CNLanding } from '../assets';

const Landing: React.FC = () => {
  const LandingImgRenderer = () => {
    if (window.screen.width < 768) {
      return (
        <Image
          position="absolute"
          bottom="0px !important"
          margin="0px !important"
          src={CNLanding}
        />
      );
    } else {
      return (
        <Image
          h="100vh"
          position="absolute"
          margin="0px !important"
          right="0"
          src={CNLanding}
        />
      );
    }
  };
  return (
    <>
      <HStack w="100%" h="100vh" position="relative" bg="#002A97">
        <Container maxW="container.xl">
          <Heading fontSize="5xl" color="#ffffff">
            CodeNection{' '}
            <Box d="inline-block">
              <Text fontFamily="Proxima Nova">2021</Text>
            </Box>
          </Heading>

          <PrimaryText letterSpacing="2px" fontSize="2xl" opacity=".8">
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
            bg="none"
            onClick={() => (window.location.href = '/register')}
          >
            Register Now
          </PrimaryButton>
        </Container>
        <LandingImgRenderer />
      </HStack>
      <CNSpacer size="4xs" />
      <CountDownSection />
      <TitleSponsorSection />
      <AboutSection />
      <EventDateSection />
      <AgendaSection />
      <LeaderboardSection />
      <RuleSection />
      <FaqSection />
      <SponsorSection />
      <MediaPartnersSection />
    </>
  );
};

export default Landing;
