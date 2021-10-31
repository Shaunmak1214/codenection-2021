import React from 'react';
import { Box, Center, Container } from '@chakra-ui/layout';

import { SecondaryText } from '../../atoms';
import { FaqBlock } from '../../molecules';

const FaqSection = () => {
  return (
    <Center py="100px" id="faq">
      <Container maxW="container.xl">
        <SecondaryText
          fontWeight="bold"
          fontSize={['2xl', '3xl', '4xl']}
          mb={['30px', '40px', '50px']}
          textAlign="center"
        >
          FAQ
        </SecondaryText>
        <Box justifyContent="center" px="15">
          <FaqBlock />
        </Box>
      </Container>
    </Center>
  );
};

export default FaqSection;
