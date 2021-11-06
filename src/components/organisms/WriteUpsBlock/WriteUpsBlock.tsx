import React from 'react';
import {
  TitleBadge,
  PlatinumBadge,
  GoldBadge,
  SilverBadge,
  BronzeBadge,
  LinkIcon,
} from '../../../assets';
import {
  VStack,
  SimpleGrid,
  Center,
  HStack,
  Box,
  Flex,
  Text,
} from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';
import { BadgeImg, SponsorImg, PrimaryText } from '../../atoms';
const WriteUpsBlock = ({ sponsorWriteUps, ...props }: any) => {
  interface dataObject {
    idx: number;
    imageSrc: string;
    writeUps: string;
  }
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
            w={['100%', '340px', '100%']}
            h={['205px', '205px', '90vh']}
            onClick={() => {
              if (sponsor.url) window.open(sponsor.url, '_blank');
            }}
          >
            <HStack>
              <Box>
                <Image maxH="125px" mb="20px" src={sponsor.imageSrc} />
              </Box>
              <Box>
                <Text>{sponsor.writeUps}</Text>
              </Box>
            </HStack>
          </SponsorImg>
        );
      case 'Platinum':
        return (
          <SponsorImg
            bgImage={sponsorData.flags}
            w={['100%', '100%', '100%', '100%']}
            h={['1255px', '1255px', '1255px', '80vh']}
            cursor="normal"
          >
            <Flex
              w="100%"
              flexDir={['column', 'column', 'row']}
              justifyContent="space-between"
            >
              <Box
                w={['auto', 'auto', '35%']}
                borderRight="1px solid #000000"
                d="flex"
                flexDir="column"
                h={[0, 0, '60vh']}
                justifyContent="center"
                alignItems="center"
                mb={['90px', '90px', '0']}
              >
                <Image maxH="125px" mb="30px" src={sponsor.imageSrc} />
                <Box
                  boxShadow="0px 4px 10px rgba(0, 121, 255, 0.25)"
                  borderRadius="10px"
                  d="flex"
                  justifyContent="space-around"
                  w={['90%', '90%', '80%']}
                  h="9%"
                  alignItems="center"
                  cursor="pointer"
                  p="15px"
                  onClick={() => {
                    if (sponsor.url) window.open(sponsor.url, '_blank');
                  }}
                >
                  <Image src={LinkIcon} d={['none', 'none', 'block']} />
                  <Text>https://www.fusionexgroup.com/</Text>
                </Box>
              </Box>
              <Box
                w={['auto', 'auto', '65%']}
                fontSize={['xs', 'xs', 'sm']}
                p="0 20px 15px 20px"
                textAlign="left"
              >
                <Text>
                  Fusionex is an established multi-award-winning data technology
                  leader specializing in Analytics, Big Data Management, IR 4.0,
                  Internet of Things, Machine Learning and Artificial
                  Intelligence. Its state-of-the-art offerings are focused on
                  helping clients unlock value and derive insights from data.
                </Text>
                <br />
                <Text>
                  Featured on Forbes, Bloomberg, Gartner, IDC, Forrester,
                  Edison, and Huffington Post, Fusionex is the largest Big Data
                  Analytics company and market leader in ASEAN, bringing
                  cutting-edge, innovative, and breakthrough data-driven
                  platforms to its stable of clientele (including Fortune 500,
                  FTSE companies, large conglomerates and SMEs that spans across
                  the United States, Europe, as well as Asia Pacific. Fusionex
                  is also a MDEC Global Acceleration and Innovation Network
                  (GAIN) company as well as an MSC R&D MGS award recipient.
                </Text>
                <br />
                <Text>
                  Gartner’s report on Modern Analytics and Business Intelligence
                  shortlisted and commended Fusionex’s data technology platform.
                  In addition, Fusionex has been identified as a Major Player in
                  IDC’s MarketScape Report for Big Data & Analytics. Fusionex is
                  the only ASEAN-based company to be featured in both reports,
                  cementing its credentials in the data technology market for
                  this region.
                </Text>
                <br />
                <Text>
                  At Fusionex, we believe in discovering, nurturing, and
                  unlocking the potential of individuals. Regardless if you are
                  a fresh graduate or a seasoned professional, so long as you
                  have a ‘can-do, do-it-well’ attitude, we will always provide
                  the opportunities, support, and platform for you.
                </Text>
                <br />
                <Text>
                  We also believe that continuous learning is key to progress.
                  As such, we encourage and support individuals who aspire to
                  explore, learn and grow.
                </Text>
                <br />
                <Text>
                  To learn more about Fusionex, visit
                  www.fusionex-international.com
                </Text>
              </Box>
            </Flex>
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

  if (sponsorWriteUps) {
    console.log(sponsorWriteUps);
    return (
      <>
        <VStack alignItems="center" justifyContent="center" {...props}>
          {sponsorWriteUps.data.length > 0 ? (
            <BadgeRenderer sponsorData={sponsorWriteUps} />
          ) : (
            <></>
          )}
        </VStack>
        <SimpleGrid
          columns={1}
          w="100%"
          justifyItems="center"
          alignItems="center"
          spacing={['2', '2', '5']}
        >
          {sponsorWriteUps.data.length > 0 ? (
            sponsorWriteUps.data.map((sponsor: dataObject) => {
              return (
                //@ts-ignore
                <SponsorBlockRenderer
                  sponsorData={sponsorWriteUps}
                  key={sponsor.idx}
                  sponsor={sponsor}
                />
              );
            })
          ) : (
            <Center w="100%">
              <Image w="25%" h="auto" src={sponsorWriteUps.placeholderSrc} />
            </Center>
          )}
        </SimpleGrid>
      </>
    );
  } else {
    return <PrimaryText>No Data</PrimaryText>;
  }
};

export default WriteUpsBlock;
