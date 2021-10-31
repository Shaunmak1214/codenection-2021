import {
  Center,
  Container,
  SimpleGrid,
  VStack,
  HStack,
  Link,
  Flex,
  Box,
} from '@chakra-ui/layout';
import React from 'react';
import { SecondaryText } from '../../atoms';

import {
  CodeNectionLogoImg,
  ArrowRight,
  Discord,
  Email,
  Facebook,
  Instagram,
  ITS,
} from '../../../assets';

const Footer = () => {
  return (
    <Center w="100%" py={['20px', '50px', '80px']} bgColor="#002A97">
      <Container maxW="container.xl">
        <Flex
          flexDirection={['column', 'column', 'row']}
          w="100%"
          alignItems={['flex-start', 'flex-start', 'center']}
          justifyContent="space-between"
        >
          <Box mb="25px">
            <CodeNectionLogoImg
              style={{
                width: '125px',
                height: 'auto',
              }}
            />
          </Box>

          <SimpleGrid
            columns={[1, 1, 3]}
            w="100%"
            spacingY={['30px', '30px', '0px']}
          >
            <VStack
              color="white"
              alignItems={['flex-start', 'flex-start', 'center']}
            >
              <VStack alignItems="flex-start">
                <SecondaryText
                  mb="10px"
                  fontSize="22px"
                  fontWeight="600"
                  color="white"
                >
                  QUICK LINKS
                </SecondaryText>

                <HStack alignItems="center">
                  <ArrowRight />
                  <Link href="/#about">
                    <SecondaryText color="white">About</SecondaryText>
                  </Link>
                </HStack>
                <HStack alignItems="center">
                  <ArrowRight />
                  <Link href="/#agenda">
                    <SecondaryText color="white">Agenda</SecondaryText>
                  </Link>
                </HStack>
                <HStack alignItems="center">
                  <ArrowRight />
                  <Link href="/#leaderboard">
                    <SecondaryText color="white">Leaderboard</SecondaryText>
                  </Link>
                </HStack>
                <HStack alignItems="center">
                  <ArrowRight />
                  <Link href="/#rules">
                    <SecondaryText color="white">Rules & FAQ</SecondaryText>
                  </Link>
                </HStack>
                <HStack alignItems="center">
                  <ArrowRight />
                  <Link href="/#sponsors">
                    <SecondaryText color="white">
                      Sponsors & Partners
                    </SecondaryText>
                  </Link>
                </HStack>
              </VStack>
            </VStack>
            <VStack
              color="white"
              alignItems={['flex-start', 'flex-start', 'center']}
            >
              <VStack alignItems="flex-start">
                <SecondaryText
                  mb="10px"
                  fontSize="22px"
                  fontWeight="600"
                  color="white"
                >
                  CODENECTOR
                </SecondaryText>

                <HStack alignItems="center">
                  <ArrowRight />
                  <Link href="/dashboard">
                    <SecondaryText color="white">Dashboard</SecondaryText>
                  </Link>
                </HStack>
                <HStack alignItems="center">
                  <ArrowRight />
                  <Link href="/edit-profile">
                    <SecondaryText color="white">Profile</SecondaryText>
                  </Link>
                </HStack>
                <HStack alignItems="center">
                  <ArrowRight />
                  <Link href="/dashboard#join">
                    <SecondaryText color="white">Join a Team</SecondaryText>
                  </Link>
                </HStack>
                <HStack alignItems="center">
                  <ArrowRight />
                  <Link href="/dashboard#create">
                    <SecondaryText color="white">Create a Team</SecondaryText>
                  </Link>
                </HStack>
                <HStack alignItems="center">
                  <ArrowRight />
                  <Link href="#dashboard#upload">
                    <SecondaryText color="white">Upload Resume</SecondaryText>
                  </Link>
                </HStack>
              </VStack>
            </VStack>
            <VStack
              color="white"
              alignItems={['flex-start', 'flex-start', 'center']}
            >
              <VStack alignItems="flex-start">
                <SecondaryText
                  mb="10px"
                  fontSize="22px"
                  fontWeight="600"
                  color="white"
                >
                  FOLLOW US
                </SecondaryText>

                <HStack alignItems="center">
                  <Facebook />
                  <Link href="https://www.facebook.com/CodeNection/">
                    <SecondaryText color="white">Facebook</SecondaryText>
                  </Link>
                </HStack>
                <HStack alignItems="center">
                  <Instagram />
                  <Link href="https://www.instagram.com/code_nection/">
                    <SecondaryText color="white">Instagram</SecondaryText>
                  </Link>
                </HStack>
                <HStack alignItems="center">
                  <Discord />
                  <Link href="https://discord.gg/VpCeFaeKcq">
                    <SecondaryText color="white">Discord Server</SecondaryText>
                  </Link>
                </HStack>
                <HStack alignItems="center">
                  <Email />
                  <Link href="mailto:its.codenection@gmail.com">
                    <SecondaryText color="white">Email Us</SecondaryText>
                  </Link>
                </HStack>
                <HStack alignItems="center">
                  <ITS />
                  <Link href="https://linktr.ee/itsocietycyberjaya">
                    <SecondaryText color="white">
                      Follow ITS Society
                    </SecondaryText>
                  </Link>
                </HStack>
              </VStack>
            </VStack>
          </SimpleGrid>
        </Flex>
        <HStack
          color="white"
          alignItems={['flex-start', 'flex-start', 'center']}
          justifyContent={['flex-start', 'flex-start', 'center']}
          paddingTop={['35px', '55px', '75px']}
        >
          <ITS
            style={{
              width: '20px',
              height: 'auto',
            }}
          />{' '}
          <SecondaryText color="white">
            Organized by IT Society MMU Cyberjaya
          </SecondaryText>
        </HStack>
      </Container>
    </Center>
  );
};

export default Footer;
