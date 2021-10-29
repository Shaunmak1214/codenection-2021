import React from 'react';

import { Image } from '@chakra-ui/image';
import { Flex, VStack, Center } from '@chakra-ui/layout';

import { SecondaryText } from '../../atoms';

import { GrayBox } from '../../../assets';

const AboutSection = () => {
  return (
    <Center py={['10px', '20px', '50px']} id="about">
      <Flex
        flexDirection={['column', 'column', 'row']}
        maxW="container.lg"
        w="100%"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Center w={['100%', '100%', '50%']} h="auto">
          <Image src={GrayBox} alt="Gray" />
        </Center>

        <VStack
          w={['100%', '100%', '50%']}
          h="100%"
          alignItems={['center', 'center', 'flex-start']}
          px="3"
          py={['5', '5', '2']}
        >
          <SecondaryText fontSize="2xl" fontWeight="bold">
            ABOUT
          </SecondaryText>
          <SecondaryText textAlign={['center', 'center', 'left']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <br></br>
            <br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
          </SecondaryText>
        </VStack>
      </Flex>
    </Center>
  );
};

export default AboutSection;
