import React from 'react';
import { Box, Center, Container } from '@chakra-ui/layout';

import { SecondaryText } from '../../atoms';
import { FaqBlock } from '../../molecules';

const FaqSection = () => {
  return (
    <Center py="100px">
      <Container maxW="container.xl">
        <SecondaryText
          fontWeight="bold"
          fontSize="3xl"
          mb="40px"
          textAlign="center"
        >
          FAQ
        </SecondaryText>
        <Box justifyContent="center" px="35">
          <FaqBlock />
        </Box>
      </Container>
    </Center>
  );
};

export default FaqSection;
