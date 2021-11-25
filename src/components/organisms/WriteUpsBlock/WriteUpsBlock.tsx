import React, { createRef, useEffect } from 'react';
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
import { BadgeImg, SponsorImg, PrimaryText, WriteUpImg } from '../../atoms';
const WriteUpsBlock = ({ sponsorWriteUps, ...props }: any) => {
  interface dataObject {
    idx: number;
    imageSrc: string;
    writeUps: string;
  }

  const platRef = createRef<HTMLDivElement>();
  const goldRef = createRef<HTMLDivElement>();

  useEffect(() => {
    if (window.location.hash === '#fusionex') {
      setTimeout(() => {
        if (platRef.current) {
          window.scrollTo({
            top: platRef.current.offsetTop - 200,
            behavior: 'smooth',
          });
        }
      }, 800);
    } else if (window.location.hash === '#moceanapi') {
      setTimeout(() => {
        if (goldRef.current) {
          window.scrollTo({
            top: goldRef.current.offsetTop - 800,
            behavior: 'smooth',
          });
        }
      }, 800);
    } else if (window.location.hash === '#vaim') {
      setTimeout(() => {
        if (goldRef.current) {
          window.scrollTo({
            top: goldRef.current.offsetTop - 100,
            behavior: 'smooth',
          });
        }
      }, 800);
    }
  });

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
          <WriteUpImg
            ref={platRef}
            bgImage={sponsorData.flags}
            w={['100%', '100%', '100%', '100%']}
            h={['1255px', '950px', '950px', '80vh']}
            cursor="normal"
          >
            <Flex
              w="100%"
              flexDir={['column', 'column', 'row']}
              justifyContent="space-between"
              alignItems="center"
            >
              <Box
                w={['auto', 'auto', '35%']}
                borderRight="1px solid #000000"
                d="flex"
                flexDir="column"
                h={[0, 0, '60vh']}
                justifyContent="center"
                alignItems="center"
                mb={['100px', '135px', '0']}
              >
                <Image maxH="125px" mb="30px" src={sponsor.imageSrc} />
                <Box
                  boxShadow="0px 4px 10px rgba(0, 121, 255, 0.25)"
                  borderRadius="10px"
                  d="flex"
                  justifyContent="flex-start"
                  w={['90%', '90%', '80%']}
                  h="9%"
                  alignItems="center"
                  cursor="pointer"
                  p="15px"
                  onClick={() => {
                    if (sponsor.url) window.open(sponsor.url, '_blank');
                  }}
                >
                  <Image
                    src={LinkIcon}
                    mr="20px"
                    d={['none', 'none', 'block']}
                  />
                  <Text>{sponsor.linkText}</Text>
                </Box>
              </Box>
              <Box
                w={['auto', 'auto', '65%']}
                fontSize={['xs', 'xs', 'sm']}
                p="0 20px 15px 20px"
                textAlign="left"
              >
                <Text whiteSpace="pre-line">{sponsor.writeUps}</Text>
              </Box>
            </Flex>
          </WriteUpImg>
        );

      case 'Gold':
        return (
          <>
            <WriteUpImg
              ref={goldRef}
              bgImage={sponsorData.flags}
              w={['90%', '90%', '100%']}
              h={['120vh', '120vh', '70vh']}
              cursor="normal"
            >
              <Flex
                w="100%"
                flexDir={['column', 'column', 'row']}
                justifyContent="space-between"
                alignItems="center"
                marginTop="-25px"
              >
                <Box
                  w={['90%', '70%', '35%']}
                  borderRight="1px solid #000000"
                  d="flex"
                  flexDir="column"
                  h={[0, 0, '40vh']}
                  justifyContent="center"
                  alignItems="center"
                  mb={['100px', '135px', '0']}
                >
                  <Image maxH="125px" mb="30px" src={sponsor.imageSrc} />
                  <Box
                    boxShadow="0px 4px 10px rgba(0, 121, 255, 0.25)"
                    borderRadius="10px"
                    d="flex"
                    justifyContent="flex-start"
                    w={['90%', '90%', '60%']}
                    h="9%"
                    alignItems="center"
                    cursor="pointer"
                    p="15px"
                    onClick={() => {
                      if (sponsor.url) window.open(sponsor.url, '_blank');
                    }}
                  >
                    <Image
                      src={LinkIcon}
                      mr="20px"
                      d={['none', 'none', 'block']}
                    />
                    <Text> {sponsor.linkText} </Text>
                  </Box>
                </Box>
                <Box
                  w={['auto', 'auto', '65%']}
                  fontSize={['xs', 'xs', 'sm']}
                  textAlign="left"
                  p="0 20px 15px 20px"
                >
                  <Text whiteSpace="pre-line">{sponsor.writeUps}</Text>
                </Box>
              </Flex>
            </WriteUpImg>
          </>
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
