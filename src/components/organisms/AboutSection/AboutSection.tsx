import React from 'react';

import { Image } from '@chakra-ui/image';
import { Flex, VStack, Center } from '@chakra-ui/layout';

import { SecondaryText } from '../../atoms';

import { GrayBox } from '../../../assets';

const AboutSection = () => {
  return (
    <Center py="50px">
      <Flex
        flexDirection={['column', 'column', 'row']}
        maxW="container.lg"
        w="100%"
        py="50px"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Center w="50%" h="auto">
          <Image src={GrayBox} alt="Gray" />
        </Center>

        <VStack w="50%" h="100%" alignItems="flex-start" px="3" py="2">
          <SecondaryText fontSize="2xl" fontWeight="bold">
            ABOUT
          </SecondaryText>
          <SecondaryText>
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
