import React from 'react';
import { Center, Container } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';

import { CNSpacer, SecondaryText } from '../../atoms';
import {
  ExternalClubGroupedImg,
  ITSLogoBlack,
  PrintlifezLogo,
} from '../../../assets';

const MediaPartnersSection = () => {
  return (
    <Center py="100px" id="media-partners">
      <Container textAlign="center" maxW="container.xl">
        <SecondaryText
          fontWeight="bold"
          fontSize={['2xl', '3xl', '4xl']}
          mb={['30px', '40px', '40px']}
        >
          ORGANIZER
        </SecondaryText>

        <Center>
          <Image
            style={{
              width: '125px',
            }}
            src={ITSLogoBlack}
          />
        </Center>
        <CNSpacer size="lg" />

        <SecondaryText
          fontWeight="bold"
          fontSize={['2xl', '3xl', '4xl']}
          mb={['30px', '40px', '40px']}
        >
          PRINTING PARTNER
        </SecondaryText>
        <Center>
          <Image
            style={{
              width: '300px',
            }}
            src={PrintlifezLogo}
          />
        </Center>
        <CNSpacer size="lg" />

        <SecondaryText
          fontWeight="bold"
          fontSize={['2xl', '3xl', '4xl']}
          mb={['30px', '40px', '40px']}
        >
          MEDIA PARTNERS
        </SecondaryText>
        <Image src={ExternalClubGroupedImg} />
      </Container>
    </Center>
  );
};

export default MediaPartnersSection;
