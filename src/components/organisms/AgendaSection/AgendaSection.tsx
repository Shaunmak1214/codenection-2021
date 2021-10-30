import React from 'react';
import { Flex, Center } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';
import { AgendaImg } from '../../../assets';

import { PrimaryText } from '../../atoms';
const AgendaSection = () => {
  return (
    <Center bg="#002A97" py={['20px', '20px', '50px']} id="agenda">
      <Flex
        flexDirection="column"
        maxW="container.lg"
        w="100%"
        justifyContent="flex-start"
        alignItems="center"
      >
        <PrimaryText
          fontFamily="Raleway"
          fontWeight="bold"
          fontSize={['2xl', '3xl', '4xl']}
          mb={['30px', '40px', '50px']}
          align="center"
        >
          Agenda
        </PrimaryText>
        <Image src={AgendaImg} />
      </Flex>
    </Center>
  );
};

export default AgendaSection;
