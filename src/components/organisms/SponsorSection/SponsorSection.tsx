import React from 'react';
import { Center, Container } from '@chakra-ui/layout';
import { SponsorsBlock } from '../../molecules';
import { SecondaryText } from '../../atoms/';
import {
  TitleSponsor,
  PlatinumSponsor,
  GoldSponsor,
  SilverSponsor,
  BronzeSponsor,
} from '../../../data/sponsorData';
import { SecondaryButton } from '../../atoms';
const SponsorSection = () => {
  return (
    <Center bg="#EFF8F7" py="100px" id="sponsors">
      <Container maxW="container.xl" textAlign="center">
        <SecondaryText fontWeight="bold" fontSize="3xl" mb="15px">
          SPONSORS AND PARTNERS
        </SecondaryText>
        <SponsorsBlock sponsorData={TitleSponsor} />
        <SponsorsBlock sponsorData={PlatinumSponsor} />
        <SponsorsBlock sponsorData={GoldSponsor} />
        <SponsorsBlock sponsorData={SilverSponsor} />
        <SponsorsBlock sponsorData={BronzeSponsor} />
        <SecondaryButton
          bg="#002A97"
          color="#FFFFFF"
          border="none"
          px="20"
          py="22px"
        >
          Become a Sponser
        </SecondaryButton>
      </Container>
    </Center>
  );
};

export default SponsorSection;
