import React from 'react';

import { Center, Container } from '@chakra-ui/layout';
import { TitleSponsorImg, TitleSponsorStock } from '../../../assets';
import { Image } from '@chakra-ui/image';

const TitleSponsorSection = () => {
  return (
    <Center
      position="relative"
      id="title-sponsor"
      style={{
        backgroundImage: `url(${TitleSponsorImg})`,
      }}
      pb="200px"
      w="100%"
    >
      <Container maxW="container.lg">
        <Image mt="275px" src={TitleSponsorStock} />
      </Container>
    </Center>
  );
};

export default TitleSponsorSection;
