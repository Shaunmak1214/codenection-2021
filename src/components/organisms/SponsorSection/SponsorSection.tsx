import React from 'react';
import { Center, Container, HStack, SimpleGrid } from '@chakra-ui/layout';
import { SponsorsBlock } from '../../molecules';
import { PrimaryText, SecondaryText } from '../../atoms/';
import {
  TitleSponsor,
  PlatinumSponsor,
  GoldSponsor,
  SilverSponsor,
  BronzeSponsor,
} from '../../../data/sponsorData';
import { SecondaryButton } from '../../atoms';
import { BecomeOurSponsorIcon, StockSponsor } from '../../../assets';
import { Image } from '@chakra-ui/image';
const SponsorSection = () => {
  const sponsorVisible = false;

  return (
    <Center bg="#EFF8F7" py="100px" id="sponsors">
      <Container maxW="container.xl" textAlign="center">
        <SecondaryText
          fontWeight="bold"
          fontSize={['2xl', '3xl', '4xl']}
          mb={['30px', '40px', '50px']}
        >
          SPONSORS AND PARTNERS
        </SecondaryText>
        {sponsorVisible ? (
          <>
            <SponsorsBlock sponsorData={TitleSponsor} />
            <SponsorsBlock sponsorData={PlatinumSponsor} />
            <SponsorsBlock sponsorData={GoldSponsor} />
            <SponsorsBlock sponsorData={SilverSponsor} />
            <SponsorsBlock sponsorData={BronzeSponsor} />
            <SimpleGrid mt="15px" columns={1} spacing={[2, 5, 10]} w="100%">
              <SecondaryButton
                bg="linear-gradient(90deg, #002A97 0%, #2054AC 50.52%, #407DC1 100%);"
                _hover={{
                  bg: 'linear-gradient(90deg, #001549 0%, #0b2e69 50.52%, #213347 100%);',
                }}
                color="#FFFFFF"
                border="none"
                px="20"
                py="25px"
                borderRadius="15px"
                onClick={() => {
                  window.location.href = 'mailto:itsoc.mmu@gmail.com';
                }}
              >
                <HStack alignItems="center">
                  <BecomeOurSponsorIcon
                    style={{
                      marginTop: '-2px',
                      marginRight: '10px',
                      height: '18px',
                    }}
                  />
                  <PrimaryText fontSize="md">Become a Sponsor</PrimaryText>
                </HStack>
              </SecondaryButton>
              {/* <SecondaryButton
            bg="linear-gradient(90deg, #002A97 0%, #2054AC 50.52%, #407DC1 100%);"
            _hover={{
              bg: 'linear-gradient(90deg, #001549 0%, #0b2e69 50.52%, #213347 100%);',
            }}
            color="#FFFFFF"
            border="none"
            px="20"
            py="25px"
            borderRadius="15px"
          >
            <HStack alignItems="center">
              <PrimaryText fontSize="md">
                Read more about our sponsor
              </PrimaryText>
              <ArrowRight
                style={{
                  marginTop: '5px',
                  marginRight: '10px',
                  height: '18px',
                }}
              />
            </HStack>
          </SecondaryButton> */}
            </SimpleGrid>
          </>
        ) : (
          <Center w="100%" d="flex" flexDir="column">
            <Image src={StockSponsor} />

            <SecondaryButton
              bg="linear-gradient(90deg, #002A97 0%, #2054AC 50.52%, #407DC1 100%);"
              _hover={{
                bg: 'linear-gradient(90deg, #001549 0%, #0b2e69 50.52%, #213347 100%);',
              }}
              color="#FFFFFF"
              border="none"
              w={['90%', '75%', '60%']}
              px="20"
              py="25px"
              borderRadius="15px"
              onClick={() => {
                window.location.href = 'mailto:itsoc.mmu@gmail.com';
              }}
            >
              <HStack alignItems="center">
                <BecomeOurSponsorIcon
                  style={{
                    marginTop: '-2px',
                    marginRight: '10px',
                    height: '18px',
                  }}
                />
                <PrimaryText fontSize="md">Become a Sponsor</PrimaryText>
              </HStack>
            </SecondaryButton>
          </Center>
        )}
      </Container>
    </Center>
  );
};

export default SponsorSection;
