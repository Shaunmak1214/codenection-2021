import React from 'react';

import { Image } from '@chakra-ui/image';
import { Flex, VStack, Center } from '@chakra-ui/layout';

import { PrimaryText } from '../../atoms';

import { CNAboutLogo } from '../../../assets';

const AboutSection = () => {
  return (
    <Center bg="#002A97" py={['10px', '20px', '50px']} id="about">
      <Flex
        flexDirection={['column', 'column', 'row']}
        maxW="container.lg"
        w="100%"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Center w={['100%', '100%', '50%']} h="auto">
          <Image src={CNAboutLogo} alt="Gray" />
        </Center>

        <VStack
          w={['100%', '100%', '50%']}
          h="100%"
          alignItems={['center', 'center', 'flex-start']}
          px="3"
          py={['5', '5', '2']}
        >
          <PrimaryText
            fontSize={['2xl', '3xl', '4xl']}
            mb={['10px', '20px', '30px']}
            fontWeight="bold"
          >
            ABOUT
          </PrimaryText>
          <br></br>
          <PrimaryText textAlign={['center', 'center', 'left']}>
            CodeNection 2021 is a programming-focused event organized by IT
            Society MMU Cyberjaya that includes a series of algorithm workshops
            and hackathons.
            <br></br>
            <br></br>
            This event will be opened to students of all universities in
            Malaysia and aims to encourage a competitive mindset within the
            local programming culture.
          </PrimaryText>
        </VStack>
      </Flex>
    </Center>
  );
};

export default AboutSection;
