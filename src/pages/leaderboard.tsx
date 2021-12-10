/* eslint-disable */
import React, { useState, useEffect } from 'react';
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
  Spinner,
} from '@chakra-ui/react';
import { CNChooser, CNSpacer } from '../components/atoms';
import { CNHoverableTeamMembers } from '../components/molecules';
import { useAxios } from '../hooks';
import '../index.css';
interface teamMember {
  id: number;
  full_name: string;
  sex: string;
  citizenship: string;
  field_major: string;
  university: string;
  education_level: string;
  team_id: number;
  team: {
    team_name: string;
  };
  position: string;
}

interface scoresByChallenge {
  score: number;
}

interface hackerrank_info_data {
  rank: number;
  hacker: string;
  avatar: string;
  score: number;
}

interface leaderboardItem {
  id: number;
  teamName: string;
  teamLogo?: string;
  hackerrank_username: string;
  is_internal: boolean;
  is_external: boolean;
  team_leader: number;
  scoresByChallenge: scoresByChallenge[];
  hackerrank_info: hackerrank_info_data;
  teamMembers: teamMember[];
}

const Index = () => {
  const [selectedLeaderboard, setSelectedLeaderboard] = useState('closed');
  const [leaderboard, setLeaderboard] = useState<leaderboardItem[]>([]);

  const { loading: leaderboardLoading, fetch: getLeaderboard } = useAxios(
    {
      url: `/leaderboard/${selectedLeaderboard}`,
      method: 'GET',
    },
    // eslint-disable-next-line
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        setLeaderboard(data.data.data);
      }
    },
  );

  useEffect(() => {
    setLeaderboard([]);
    getLeaderboard();
  }, [selectedLeaderboard, setLeaderboard]);

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
            <Text>
              Codenection 2021 -{' '}
              {selectedLeaderboard === 'open'
                ? 'Open Category'
                : 'Closed Category '}
            </Text>
          </VStack>
          <CNChooser
            onSelect={(e: string) => {
              setSelectedLeaderboard(e);
            }}
          />
        </SimpleGrid>

        <CNSpacer size="xs" />

        <Box w="100%">
          <Table
            visibility={'visible'}
            className="leaderboard-table"
            variant="simple"
          >
            <TableCaption>
              {selectedLeaderboard === 'open'
                ? 'Open Category Leaderboard'
                : 'Closed Category Leaderboard'}
            </TableCaption>
            <Thead>
              <Tr>
                <Th w="2%">#Rank</Th>
                <Th>Team</Th>
                <Th>Score</Th>
                {selectedLeaderboard === 'closed' ? (
                  <>
                    <Th>A</Th>
                    <Th>B</Th>
                    <Th>C</Th>
                    <Th>D</Th>
                  </>
                ) : (
                  <Th>A</Th>
                )}
              </Tr>
            </Thead>
            <Tbody>
              {leaderboardLoading ? (
                <Td colSpan={selectedLeaderboard === 'closed' ? 7 : 4}>
                  <Center w="100%">
                    <Spinner
                      thickness="4px"
                      speed="0.65s"
                      emptyColor="gray.200"
                      color="blue.500"
                      size="xl"
                    />
                  </Center>
                </Td>
              ) : leaderboard.length > 0 ? (
                leaderboard.map((data: leaderboardItem, idx: number) => (
                  <Tr key={idx}>
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
                        {data.teamMembers && data.teamMembers.length > 0 ? (
                          <HStack>
                            {data.teamMembers.map(
                              (member: any, idx: number) => (
                                <CNHoverableTeamMembers
                                  uniLogo={
                                    data.teamLogo
                                      ? data.teamLogo
                                      : 'https://www.mmu.edu.my/wp-content/themes/mmu2018/assets/images/logo-mmu2x.png'
                                  }
                                  user={member}
                                />
                              ),
                            )}
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
                        {data.hackerrank_info ? data.hackerrank_info.score : 0}
                      </Center>
                    </Td>
                    {data.scoresByChallenge &&
                      data.scoresByChallenge.map((score: any, idx: number) => (
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
                                {score.score}
                              </Text>
                            </VStack>
                          </Center>
                        </Td>
                      ))}
                  </Tr>
                ))
              ) : (
                <Td colSpan={selectedLeaderboard === 'closed' ? 7 : 4}>
                  <Center w="100%">
                    <Text>No Data</Text>
                  </Center>
                </Td>
              )}
            </Tbody>
          </Table>
        </Box>
        <CNSpacer size="xs" />
      </VStack>
    </Container>
  );
};

export default Index;
