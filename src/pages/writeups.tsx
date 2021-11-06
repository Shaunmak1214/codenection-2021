import React from 'react';
import { PlatSponsorWriteUps } from '../data/writeUpsData';
import { WriteUpsBlock } from '../components/organisms';
import { Container, VStack } from '@chakra-ui/layout';
import { SecondaryText } from '../components/atoms';

const WriteUps = () => {
  return (
    <VStack background="#EFF8F7" pt="125px">
      <Container maxW="container.xl" textAlign="center">
        <SecondaryText
          fontWeight="bold"
          fontSize={['2xl', '3xl', '4xl']}
          mb={['30px', '40px', '50px']}
        >
          SPONSORS AND PARTNERS
        </SecondaryText>

        <WriteUpsBlock sponsorWriteUps={PlatSponsorWriteUps} />
      </Container>
    </VStack>
  );
};

export default WriteUps;
