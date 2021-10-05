import React from 'react';
import { Image } from '@chakra-ui/image';
import {
  Container,
  HStack,
  VStack,
  Text,
  Box,
  Flex,
  Heading,
} from '@chakra-ui/layout';

import CNHoverableAvatarGroup from '../components/organisms/HoverableAvatarGroup';
import CNSpacer from '../components/atoms/CNSpacer';
import { CNChooser } from '../components/atoms/CNChooser';

const Index = () => {
  const leaderboardData = [
    {
      idx: 1,
      teamName: 'Team 1',
      teamLogo:
        'https://lh3.googleusercontent.com/ogw/ADea4I48pMqmRjD_VIFjWl23JWaMwveNy0JFQGPPbEDFjA=s32-c-mo',
      score: '100',
      entries: 3,
      last: '2h',
    },
    {
      idx: 2,
      teamName: 'Team 2',
      teamLogo:
        'https://lh3.googleusercontent.com/ogw/ADea4I48pMqmRjD_VIFjWl23JWaMwveNy0JFQGPPbEDFjA=s32-c-mo',
      score: '100,000,000',
      entries: 3,
      last: '2h',
    },
    {
      idx: 3,
      teamName: 'Team 3',
      teamLogo:
        'https://lh3.googleusercontent.com/ogw/ADea4I48pMqmRjD_VIFjWl23JWaMwveNy0JFQGPPbEDFjA=s32-c-mo',
      score: '100,000,000',
      entries: 3,
      last: '2h',
    },
    {
      idx: 4,
      teamName: 'Team 4',
      teamLogo:
        'https://lh3.googleusercontent.com/ogw/ADea4I48pMqmRjD_VIFjWl23JWaMwveNy0JFQGPPbEDFjA=s32-c-mo',
      score: '100,000,000',
      entries: 3,
      last: '2h',
    },
    {
      idx: 5,
      teamName: 'Team 5',
      teamLogo:
        'https://lh3.googleusercontent.com/ogw/ADea4I48pMqmRjD_VIFjWl23JWaMwveNy0JFQGPPbEDFjA=s32-c-mo',
      score: '100,000,000',
      entries: 3,
      last: '2h',
    },
    {
      idx: 6,
      teamName: 'Team 5',
      teamLogo:
        'https://lh3.googleusercontent.com/ogw/ADea4I48pMqmRjD_VIFjWl23JWaMwveNy0JFQGPPbEDFjA=s32-c-mo',
      score: '100,000,000',
      entries: 3,
      last: '2h',
    },
    {
      idx: 7,
      teamName: 'Team 5',
      teamLogo:
        'https://lh3.googleusercontent.com/ogw/ADea4I48pMqmRjD_VIFjWl23JWaMwveNy0JFQGPPbEDFjA=s32-c-mo',
      score: '100,000,000',
      entries: 3,
      last: '2h',
    },
    {
      idx: 8,
      teamName: 'Team 5',
      teamLogo:
        'https://lh3.googleusercontent.com/ogw/ADea4I48pMqmRjD_VIFjWl23JWaMwveNy0JFQGPPbEDFjA=s32-c-mo',
      score: '100,000,000',
      entries: 3,
      last: '2h',
    },
    {
      idx: 9,
      teamName: 'Team 5',
      teamLogo:
        'https://lh3.googleusercontent.com/ogw/ADea4I48pMqmRjD_VIFjWl23JWaMwveNy0JFQGPPbEDFjA=s32-c-mo',
      score: '100,000,000',
      entries: 3,
      last: '2h',
    },
  ];

  return (
    <Container maxW="container.xl" w="100%" h="100%">
      <CNSpacer size="md" />
      <VStack>
        <CNSpacer size="sm" />
        <HStack w="100%" justifyContent="space-between">
          <VStack alignItems="flex-start">
            <Heading fontSize="45px" fontWeight="bold">
              Leaderboard
            </Heading>
            <Text>Last updated at 30/09 6:00PM</Text>
          </VStack>
          <CNChooser />
        </HStack>

        <CNSpacer size="xs" />

        <VStack className="leaderboard-table" w="100%">
          <HStack
            className="table-head-row"
            w="100%"
            alignItems="center"
            px="2"
            color="#797979"
            fontWeight="bold"
            mb="10px"
          >
            <Box textAlign="center" w="15%">
              <Text>#</Text>
            </Box>
            <Box w="100%" textAlign="center">
              <Text>Team Name</Text>
            </Box>
            <Box w="100%" textAlign="center">
              <Text>Team Members</Text>
            </Box>
            <Box w="50%" textAlign="center">
              <Text>Score</Text>
            </Box>
            <Box w="15%" textAlign="center">
              <Text>Entries</Text>
            </Box>
            <Box w="15%" textAlign="center">
              <Text>Last</Text>
            </Box>
          </HStack>
          <Box bgColor="#F5F5F5" w="100%" h="2px"></Box>
          <CNSpacer size="5xs" />

          <VStack className="leaderboard-row" w="100%">
            {leaderboardData.map((data, idx) => (
              <HStack
                className="table-row"
                w="100%"
                alignItems="center"
                px="2"
                py="5"
                bgColor="#FCFCFC"
                color="black"
                fontWeight="bold"
                mb="10px"
                borderRadius="12px"
                cursor="pointer"
                _hover={{
                  bgColor: '#ffffff',
                  boxShadow: ' 0px 2px 20px rgba(182, 182, 182, 0.25);',
                }}
                transition="all 0.2s ease-in-out"
                key={idx}
              >
                <Box textAlign="center" w="15%">
                  <Text>{data.idx}</Text>
                </Box>
                <Flex
                  flexDir="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  w="100%"
                  textAlign="center"
                >
                  <Image
                    src={data.teamLogo}
                    borderRadius="50%"
                    mr="10px"
                    alt="logo"
                  />
                  <Text>{data.teamName}</Text>
                </Flex>
                <Box w="100%" textAlign="center">
                  <CNHoverableAvatarGroup
                    data={[
                      {
                        uni: 'https://www.mmu.edu.my/favicon.ico',
                        membersName: 'Shaun Mak',
                      },
                      {
                        uni: 'https://www.mmu.edu.my/favicon.ico',
                        membersName: 'WOW Mak',
                      },
                      {
                        uni: 'https://www.mmu.edu.my/favicon.ico',
                        membersName: 'Jason Tan',
                      },
                    ]}
                  />
                </Box>
                <Box w="50%" textAlign="center">
                  <Text>{data.score}</Text>
                </Box>
                <Box w="15%" textAlign="center">
                  <Text>{data.entries}</Text>
                </Box>
                <Box w="15%" textAlign="center">
                  <Text>{data.last}</Text>
                </Box>
              </HStack>
            ))}
          </VStack>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
