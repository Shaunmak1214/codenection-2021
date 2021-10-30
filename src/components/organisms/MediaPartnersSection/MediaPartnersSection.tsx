import React from 'react';
import { Center, Container } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';

import { SecondaryText } from '../../atoms';
import { ExternalClubGroupedImg } from '../../../assets';

const MediaPartnersSection = () => {
  return (
    <Center py="100px" id="media-partners">
      <Container textAlign="center" maxW="container.xl">
        <SecondaryText
          fontWeight="bold"
          fontSize={['2xl', '3xl', '4xl']}
          mb={['30px', '40px', '50px']}
        >
          PARTNERS
        </SecondaryText>
        <Image src={ExternalClubGroupedImg} />
      </Container>
    </Center>
  );
};

export default MediaPartnersSection;
