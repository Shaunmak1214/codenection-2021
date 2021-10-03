import React from 'react';
import { Center, Container } from '@chakra-ui/layout';
import { SponsorsBlock } from '../../molecules';
import { SecondaryText } from '../../atoms/Text';
import {
    TitleSponsor,
    PlatinumSponsor,
    GoldSponsor,
    SilverSponsor,
    BronzeSponsor,
} from '../../../data/sponsorData';
const SponsorSection = () => {
    return (
        <Center bg="#EFF8F7" py="100px">
            <Container maxW="container.xl" textAlign="center">
                <SecondaryText fontWeight="bold" fontSize="3xl" mb="15px">
                    SPONSORS AND PARTNERS
                </SecondaryText>
                <SponsorsBlock sponsorData={TitleSponsor} />
                <SponsorsBlock sponsorData={PlatinumSponsor} />
                <SponsorsBlock sponsorData={GoldSponsor} />
                <SponsorsBlock sponsorData={SilverSponsor} />
                <SponsorsBlock sponsorData={BronzeSponsor} />
            </Container>
        </Center>
    );
};

export default SponsorSection;
