import React from 'react';
import {
  TitleBadge,
  PlatinumBadge,
  GoldBadge,
  SilverBadge,
  BronzeBadge,
} from '../../../assets';
import { VStack, SimpleGrid } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';
import { PrimaryText, BadgeImg, SponsorImg } from '../../atoms';

const SponsorsBlock = ({ sponsorData, ...props }: any) => {
  interface dataObject {
    idx: number;
    imageSrc: string;
    flags: string;
  }

  // eslint-disable-next-line no-unused-vars
  const BadgeRenderer = ({ sponsorData }: any) => {
    switch (sponsorData.type) {
      case 'Title':
        return <BadgeImg src={TitleBadge} width="450px" />;
      case 'Platinum':
        return <BadgeImg src={PlatinumBadge} width="400px" />;

      case 'Gold':
        return <BadgeImg src={GoldBadge} width="350px" />;

      case 'Silver':
        return <BadgeImg src={SilverBadge} width="300px" />;

      case 'Bronze':
        return <BadgeImg src={BronzeBadge} width="250px" />;

      default:
        break;
    }
  };
  // @ts-ignore
  const SponsorBlockRenderer = ({ sponsorData, ...props }): any => {
    const { sponsor } = props;

    switch (sponsorData.type) {
      case 'Title':
        return (
          <SponsorImg bgImage={sponsorData.flags} w="450px" h="270px">
            <Image maxH="125px" mb="20px" src={sponsor.imageSrc} />
          </SponsorImg>
        );
      case 'Platinum':
        return (
          <SponsorImg bgImage={sponsorData.flags} w="370px" h="220px">
            <Image maxH="125px" mb="20px" src={sponsor.imageSrc} />
          </SponsorImg>
        );

      case 'Gold':
        return (
          <SponsorImg bgImage={sponsorData.flags} w="290px" h="200px">
            <Image maxH="100px" mb="20px" src={sponsor.imageSrc} />
          </SponsorImg>
        );

      case 'Silver':
        return (
          <SponsorImg bgImage={sponsorData.flags} w="250px" h="180px">
            <Image maxH="80px" mb="20px" src={sponsor.imageSrc} />
          </SponsorImg>
        );

      case 'Bronze':
        return (
          <SponsorImg bgImage={sponsorData.flags} w="230px" h="170px">
            <Image maxH="70px" mb="20px" src={sponsor.imageSrc} />
          </SponsorImg>
        );

      default:
        break;
    }
  };

  if (sponsorData) {
    return (
      <>
        <VStack alignItems="center" justifyContent="center" {...props}>
          {/* @ts-ignore */}
          <BadgeRenderer sponsorData={sponsorData} />
        </VStack>
        <SimpleGrid
          columns={sponsorData.level}
          w="100%"
          justifyItems="center"
          alignItems="center"
          spacing={5}
        >
          {sponsorData.data.map((sponsor: dataObject) => {
            return (
              <SponsorBlockRenderer
                sponsorData={sponsorData}
                key={sponsor.idx}
                sponsor={sponsor}
              />
            );
          })}
        </SimpleGrid>
      </>
    );
  } else {
    return <PrimaryText>No Data</PrimaryText>;
  }
};

export default SponsorsBlock;
