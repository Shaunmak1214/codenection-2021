import React from 'react';
import { Container, HStack, Box } from '@chakra-ui/layout';
import { PrimaryButton } from '../components/atoms/';
import { Image, Heading } from '@chakra-ui/react';
import { CNLanding } from '../assets';
import { CountDownSection, SponsorSection } from '../components/organisms';
import { CNSpacer } from '../components/atoms';
import { PrimaryText } from '../components/atoms';
import RuleSection from '../components/organisms/RuleSection';
import { FaqSection } from '../components/organisms';

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
            {' '}
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
      <Box w="100%" h="1000px"></Box>
      <RuleSection />
      <FaqSection />
      <SponsorSection />
    </>
  );
};

export default Landing;
