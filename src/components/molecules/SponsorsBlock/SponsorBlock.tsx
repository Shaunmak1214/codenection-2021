import React from 'react';
import {
  TitleBadge,
  PlatinumBadge,
  GoldBadge,
  SilverBadge,
  BronzeBadge,
} from '../../../assets';
import { VStack, SimpleGrid, Center } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';
import { PrimaryText, BadgeImg, SponsorImg } from '../../atoms';

const SponsorsBlock = ({ sponsorData, ...props }: any) => {
  interface dataObject {
    idx: number;
    imageSrc: string;
    flags: string;
    url?: string;
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
        return <></>;
    }
  };

  const SponsorBlockRenderer = ({ sponsorData, ...props }: any) => {
    const { sponsor } = props;
    switch (sponsorData.type) {
      case 'Title':
        return (
          <SponsorImg
            bgImage={sponsorData.flags}
            w={['100%', '340px', '450px']}
            h={['205px', '205px', '270px']}
            onClick={() => {
              if (sponsor.url) window.open(sponsor.url, '_blank');
            }}
          >
            <Image maxH="125px" mb="20px" src={sponsor.imageSrc} />
          </SponsorImg>
        );
      case 'Platinum':
        return (
          <SponsorImg
            bgImage={sponsorData.flags}
            w={['265px', '240px', '265px', '370px']}
            h={['205px', '205px', '205px', '220px']}
            onClick={() => {
              window.location.href = '/write-ups';
            }}
          >
            <Image maxH="125px" w="80%" mb="20px" src={sponsor.imageSrc} />
          </SponsorImg>
        );

      case 'Gold':
        return (
          <SponsorImg
            bgImage={sponsorData.flags}
            w={['230px', '230px', '290px']}
            h={['195px', '195px', '200px']}
            onClick={() => {
              if (sponsor.url) window.open(sponsor.url, '_blank');
            }}
          >
            <Image maxH="100px" mb="20px" src={sponsor.imageSrc} />
          </SponsorImg>
        );

      case 'Silver':
        return (
          <SponsorImg
            bgImage={sponsorData.flags}
            w="250px"
            h="180px"
            onClick={() => {
              if (sponsor.url) window.open(sponsor.url, '_blank');
            }}
          >
            <Image maxH="80px" w="80%" mb="20px" src={sponsor.imageSrc} />
          </SponsorImg>
        );

      case 'Bronze':
        return (
          <SponsorImg
            bgImage={sponsorData.flags}
            w="230px"
            h="170px"
            onClick={() => {
              if (sponsor.url) window.open(sponsor.url, '_blank');
            }}
          >
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
          {sponsorData.data.length > 0 ? (
            <BadgeRenderer sponsorData={sponsorData} />
          ) : (
            <></>
          )}
        </VStack>
        <SimpleGrid
          // columns={
          //   sponsorData.data.length > 0
          //     ? [
          //         '1',
          //         sponsorData.level > 2 ? '2' : sponsorData.level,
          //         sponsorData.level > 2 ? '2' : sponsorData.level,
          //         sponsorData.level,
          //       ]
          //     : 1
          // }
          columns={1}
          w="100%"
          justifyItems="center"
          alignItems="center"
          spacing={['2', '2', '5']}
        >
          {sponsorData.data.length > 0 ? (
            sponsorData.data.map((sponsor: dataObject) => {
              return (
                //@ts-ignore
                <SponsorBlockRenderer
                  sponsorData={sponsorData}
                  key={sponsor.idx}
                  sponsor={sponsor}
                />
              );
            })
          ) : (
            <Center w="100%">
              <Image w="25%" h="auto" src={sponsorData.placeholderSrc} />
            </Center>
          )}
        </SimpleGrid>
      </>
    );
  } else {
    return <PrimaryText>No Data</PrimaryText>;
  }
};

export default SponsorsBlock;
