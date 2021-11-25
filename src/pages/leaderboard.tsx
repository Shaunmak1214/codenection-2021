/* eslint-disable */
import React from 'react';
import {
  Container,
  HStack,
  VStack,
  Text,
  Heading,
  Center,
} from '@chakra-ui/layout';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Box,
  SimpleGrid,
} from '@chakra-ui/react';
import { CNChooser, CNSpacer } from '../components/atoms';
import { CNHoverableTeamMembers } from '../components/molecules';
import '../index.css';

const Index = () => {
  const leaderboardData = [
    {
      idx: 1,
      teamName: 'Team 1',
      teamLogo:
        'https://www.mmu.edu.my/wp-content/themes/mmu2018/assets/images/logo-mmu2x.png',
      score: '100',
      entries: 3,
      last: '2h',
      teamMember: [
        {
          name: 'ShaunShaunShaunShaun',
          position: 'Leader',
          imageUrl:
            'https://www.mmu.edu.my/wp-content/themes/mmu2018/assets/images/logo-mmu2x.png',
          university: 'UNIVERSITI TEKNOLOGI MALAYSIA',
          citizenship: 'Malaysia',
          education_level: 'Degree',
        },
        {
          name: 'Sin Yin',
          position: 'Member',
          imageUrl:
            'https://www.mmu.edu.my/wp-content/themes/mmu2018/assets/images/logo-mmu2x.png',
          university: 'MMU',
          citizenship: 'Malaysia',
          education_level: 'Degree',
        },
        {
          name: 'Jason',
          position: 'Member',
          imageUrl:
            'https://www.mmu.edu.my/wp-content/themes/mmu2018/assets/images/logo-mmu2x.png',
          university: 'MMU',
          citizenship: 'Malaysia',
          education_level: 'Degree',
        },
      ],
    },
    {
      idx: 2,
      teamName: 'Team 2',
      teamLogo:
        'https://www.mmu.edu.my/wp-content/themes/mmu2018/assets/images/logo-mmu2x.png',
      score: '100,000,000',
      entries: 3,
      last: '2h',
      teamMember: [
        {
          name: 'Shaun',
          position: 'Leader',
          imageUrl:
            'https://www.mmu.edu.my/wp-content/themes/mmu2018/assets/images/logo-mmu2x.png',
          university: 'MMU',
          citizenship: 'Malaysia',
          education_level: 'Degree',
        },
        {
          name: 'Sin Yin',
          position: 'Member',
          imageUrl:
            'https://www.mmu.edu.my/wp-content/themes/mmu2018/assets/images/logo-mmu2x.png',
          university: 'MMU',
          citizenship: 'Malaysia',
          education_level: 'Degree',
        },
        {
          name: 'Jason',
          position: 'Member',
          imageUrl:
            'https://www.mmu.edu.my/wp-content/themes/mmu2018/assets/images/logo-mmu2x.png',
          university: 'MMU',
          citizenship: 'Malaysia',
          education_level: 'Degree',
        },
      ],
    },
    {
      idx: 3,
      teamName: 'Team 3',
      teamLogo:
        'https://www.mmu.edu.my/wp-content/themes/mmu2018/assets/images/logo-mmu2x.png',
      score: '100,000,000',
      entries: 3,
      last: '2h',
      teamMember: [
        {
          name: 'Shaun',
          position: 'Leader',
          imageUrl:
            'https://www.mmu.edu.my/wp-content/themes/mmu2018/assets/images/logo-mmu2x.png',
          university: 'MMU',
          citizenship: 'Malaysia',
          education_level: 'Degree',
        },
        {
          name: 'Sin Yin',
          position: 'Member',
          imageUrl:
            'https://www.mmu.edu.my/wp-content/themes/mmu2018/assets/images/logo-mmu2x.png',
          university: 'MMU',
          citizenship: 'Malaysia',
          education_level: 'Degree',
        },
        {
          name: 'Jason',
          position: 'Member',
          imageUrl:
            'https://www.mmu.edu.my/wp-content/themes/mmu2018/assets/images/logo-mmu2x.png',
          university: 'MMU',
          citizenship: 'Malaysia',
          education_level: 'Degree',
        },
      ],
    },
    {
      idx: 4,
      teamName: 'Team 4',
      teamLogo:
        'https://www.mmu.edu.my/wp-content/themes/mmu2018/assets/images/logo-mmu2x.png',
      score: '100,000,000',
      entries: 3,
      last: '2h',
      teamMember: [
        {
          name: 'Shaun',
          position: 'Leader',
          imageUrl:
            'https://www.mmu.edu.my/wp-content/themes/mmu2018/assets/images/logo-mmu2x.png',
          university: 'MMU',
          citizenship: 'Malaysia',
          education_level: 'Degree',
        },
        {
          name: 'Sin Yin',
          position: 'Member',
          imageUrl:
            'https://www.mmu.edu.my/wp-content/themes/mmu2018/assets/images/logo-mmu2x.png',
          university: 'MMU',
          citizenship: 'Malaysia',
          education_level: 'Degree',
        },
        {
          name: 'Jason',
          position: 'Member',
          imageUrl:
            'https://www.mmu.edu.my/wp-content/themes/mmu2018/assets/images/logo-mmu2x.png',
          university: 'MMU',
          citizenship: 'Malaysia',
          education_level: 'Degree',
        },
      ],
    },
    {
      idx: 5,
      teamName: 'Team 5',
      teamLogo:
        'https://www.mmu.edu.my/wp-content/themes/mmu2018/assets/images/logo-mmu2x.png',
      score: '100,000,000',
      entries: 3,
      last: '2h',
      teamMember: [
        {
          name: 'Shaun',
          position: 'Leader',
          imageUrl:
            'https://www.mmu.edu.my/wp-content/themes/mmu2018/assets/images/logo-mmu2x.png',
          university: 'MMU',
          citizenship: 'Malaysia',
          education_level: 'Degree',
        },
        {
          name: 'Sin Yin',
          position: 'Member',
          imageUrl:
            'https://www.mmu.edu.my/wp-content/themes/mmu2018/assets/images/logo-mmu2x.png',
          university: 'MMU',
          citizenship: 'Malaysia',
          education_level: 'Degree',
        },
        {
          name: 'Jason',
          position: 'Member',
          imageUrl:
            'https://www.mmu.edu.my/wp-content/themes/mmu2018/assets/images/logo-mmu2x.png',
          university: 'MMU',
          citizenship: 'Malaysia',
          education_level: 'Degree',
        },
      ],
    },
    {
      idx: 6,
      teamName: 'Team 5',
      teamLogo:
        'https://www.mmu.edu.my/wp-content/themes/mmu2018/assets/images/logo-mmu2x.png',
      score: '100,000,000',
      entries: 3,
      last: '2h',
      teamMember: [
        {
          name: 'Shaun',
          position: 'Leader',
          imageUrl:
            'https://www.mmu.edu.my/wp-content/themes/mmu2018/assets/images/logo-mmu2x.png',
          university: 'MMU',
          citizenship: 'Malaysia',
          education_level: 'Degree',
        },
        {
          name: 'Sin Yin',
          position: 'Member',
          imageUrl:
            'https://www.mmu.edu.my/wp-content/themes/mmu2018/assets/images/logo-mmu2x.png',
          university: 'MMU',
          citizenship: 'Malaysia',
          education_level: 'Degree',
        },
        {
          name: 'Jason',
          position: 'Member',
          imageUrl:
            'https://www.mmu.edu.my/wp-content/themes/mmu2018/assets/images/logo-mmu2x.png',
          university: 'MMU',
          citizenship: 'Malaysia',
          education_level: 'Degree',
        },
      ],
    },
    {
      idx: 7,
      teamName: 'Team 5',
      teamLogo:
        'https://www.mmu.edu.my/wp-content/themes/mmu2018/assets/images/logo-mmu2x.png',
      score: '100,000,000',
      entries: 3,
      last: '2h',
      teamMember: [
        {
          name: 'Shaun',
          position: 'Leader',
          imageUrl:
            'https://www.mmu.edu.my/wp-content/themes/mmu2018/assets/images/logo-mmu2x.png',
          university: 'MMU',
          citizenship: 'Malaysia',
          education_level: 'Degree',
        },
        {
          name: 'Sin Yin',
          position: 'Member',
          imageUrl:
            'https://www.mmu.edu.my/wp-content/themes/mmu2018/assets/images/logo-mmu2x.png',
          university: 'MMU',
          citizenship: 'Malaysia',
          education_level: 'Degree',
        },
        {
          name: 'Jason',
          position: 'Member',
          imageUrl:
            'https://www.mmu.edu.my/wp-content/themes/mmu2018/assets/images/logo-mmu2x.png',
          university: 'MMU',
          citizenship: 'Malaysia',
          education_level: 'Degree',
        },
      ],
    },
    {
      idx: 8,
      teamName: 'Team 5',
      teamLogo:
        'https://www.mmu.edu.my/wp-content/themes/mmu2018/assets/images/logo-mmu2x.png',
      score: '100,000,000',
      entries: 3,
      last: '2h',
      teamMember: [
        {
          name: 'Shaun',
          position: 'Leader',
          imageUrl:
            'https://www.mmu.edu.my/wp-content/themes/mmu2018/assets/images/logo-mmu2x.png',
          university: 'MMU',
          citizenship: 'Malaysia',
          education_level: 'Degree',
        },
        {
          name: 'Sin Yin',
          position: 'Member',
          imageUrl:
            'https://www.mmu.edu.my/wp-content/themes/mmu2018/assets/images/logo-mmu2x.png',
          university: 'MMU',
          citizenship: 'Malaysia',
          education_level: 'Degree',
        },
        {
          name: 'Jason',
          position: 'Member',
          imageUrl:
            'https://www.mmu.edu.my/wp-content/themes/mmu2018/assets/images/logo-mmu2x.png',
          university: 'MMU',
          citizenship: 'Malaysia',
          education_level: 'Degree',
        },
      ],
    },
    {
      idx: 9,
      teamName: 'Team 5',
      teamLogo:
        'https://www.mmu.edu.my/wp-content/themes/mmu2018/assets/images/logo-mmu2x.png',
      score: '100,000,000',
      entries: 3,
      last: '2h',
    },
  ];

  return (
    <Container maxW="container.xl" w="100%" h="100%">
      <CNSpacer size="md" />
      <VStack overflowX="auto">
        {window.innerWidth > 768 ? (
          <CNSpacer size="sm" />
        ) : (
          <CNSpacer size="3xs" />
        )}

        <SimpleGrid columns={[1, 1, 2]} w="100%" justifyContent="space-between">
          <VStack alignItems="flex-start">
            <Heading fontSize="45px" fontWeight="bold">
              Leaderboard
            </Heading>
            <Text>Codenection 2021 - Closed Category | Open Category</Text>
          </VStack>
          <CNChooser
            justifySelf={['flex-start', 'flex-start', 'flex-end']}
            mt={['20px', '20px', '0px']}
          />
        </SimpleGrid>

        <CNSpacer size="xs" />

        <Box w="100%">
          <Table
            visibility={'visible'}
            className="leaderboard-table"
            variant="simple"
          >
            <TableCaption>Closed Category Leaderboard</TableCaption>
            <Thead>
              <Tr>
                <Th w="2%">#Rank</Th>
                <Th>Team</Th>
                <Th>Score</Th>
                <Th>A</Th>
                <Th>B</Th>
                <Th>C</Th>
                <Th>D</Th>
                <Th>E</Th>
              </Tr>
            </Thead>
            <Tbody>
              {leaderboardData.map((data, idx) => (
                <Tr>
                  <Td w="2%">{idx}</Td>
                  <Td>
                    <VStack
                      w="100%"
                      h="100%"
                      justifyContent={'flex-start'}
                      alignItems={'flex-start'}
                    >
                      <Text fontSize={'20px'} fontWeight={'bold'} mb="8px">
                        {data.teamName}
                      </Text>
                      {data.teamMember && data.teamMember.length > 0 ? (
                        <HStack>
                          {data.teamMember.map((member, idx) => (
                            <CNHoverableTeamMembers
                              uniLogo={data.teamLogo}
                              user={member}
                            />
                          ))}
                        </HStack>
                      ) : (
                        <></>
                      )}
                    </VStack>
                  </Td>
                  <Td>
                    <Center
                      borderRadius="25px"
                      w="fit-content"
                      px="3"
                      py="2"
                      bgColor="#C9C9C9"
                    >
                      {data.score}
                    </Center>
                  </Td>
                  <Td px="0" py="3">
                    <Center bgColor={'#83FFD2'} w="100%" h="100px">
                      <VStack
                        h="100%"
                        w="100%"
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'center'}
                      >
                        <Text fontSize={'20px'} fontWeight={'bold'}>
                          31
                        </Text>
                        <Text fontSize={'15px'} fontWeight={'normal'}>
                          {data.entries} try
                        </Text>
                      </VStack>
                    </Center>
                  </Td>
                  <Td px="0" py="3">
                    <Center bgColor={'#FFA5AA'} w="100%" h="100px">
                      <VStack
                        h="100%"
                        w="100%"
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'center'}
                      >
                        <Text fontSize={'20px'} fontWeight={'bold'}>
                          31
                        </Text>
                        <Text fontSize={'15px'} fontWeight={'normal'}>
                          {data.entries} try
                        </Text>
                      </VStack>
                    </Center>
                  </Td>
                  <Td px="0" py="3">
                    <Center bgColor={'#83FFD2'} w="100%" h="100px">
                      <VStack
                        h="100%"
                        w="100%"
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'center'}
                      >
                        <Text fontSize={'20px'} fontWeight={'bold'}>
                          31
                        </Text>
                        <Text fontSize={'15px'} fontWeight={'normal'}>
                          {data.entries} try
                        </Text>
                      </VStack>
                    </Center>
                  </Td>
                  <Td px="0" py="3">
                    <Center bgColor={'#FFA5AA'} w="100%" h="100px">
                      <VStack
                        h="100%"
                        w="100%"
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'center'}
                      >
                        <Text fontSize={'20px'} fontWeight={'bold'}>
                          31
                        </Text>
                        <Text fontSize={'15px'} fontWeight={'normal'}>
                          {data.entries} try
                        </Text>
                      </VStack>
                    </Center>
                  </Td>
                  <Td px="0" py="3">
                    <Center bgColor={'#83FFD2'} w="100%" h="100px">
                      <VStack
                        h="100%"
                        w="100%"
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'center'}
                      >
                        <Text fontSize={'20px'} fontWeight={'bold'}>
                          31
                        </Text>
                        <Text fontSize={'15px'} fontWeight={'normal'}>
                          {data.entries} try
                        </Text>
                      </VStack>
                    </Center>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>

        {/* <VStack className="leaderboard-table" w="100%">
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
            {leaderboardData.map((data) => (
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
                key={data.idx}
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
        </VStack> */}

        <CNSpacer size="xs" />
      </VStack>
    </Container>
  );
};

export default Index;
