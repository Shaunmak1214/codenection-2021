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
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Tooltip,
} from '@chakra-ui/react';
import { Select } from 'chakra-react-select';
import { CNChooser, CNSpacer } from '../components/atoms';
import { CNHoverableTeamMembers } from '../components/molecules';
import { useAxios } from '../hooks';

import uniLogos from '../data/uniLogos.json';
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
  totalSubmissionTime: number;
}

interface leaderboardItem {
  id: number;
  team_name: string;
  teamLogo?: string;
  hackerrank_username: string;
  is_internal: boolean;
  is_external: boolean;
  team_leader: number;
  scoresByChallenge: scoresByChallenge[];
  hackerrank_info: hackerrank_info_data;
  teamMembers: teamMember[];
}

const truncate = (str: string) => {
  return str.length > 10 ? str.substring(0, 7) + '...' : str;
};

const final_teams = [
  'uwu',
  'RGB',
  'Clover',
  'Squid Team',
  'SSJ',
  '$git mess up',
  'Incognitoes',
  'Uruha Rushia',
  'while True: Try()',
  'Challengers',
  'the_team_that_has_the_longest_name',
  'Newbigenics',
  'Comp2Learn',
  'Googler',
  'SRH',
  'Team Sussy Bakas',
  'LKL',
  'Mighty Bites',
  'OmegaLOL',
  'Runtime Terror',
  'SUCCeSS',
  'Code_Panda',
  'Use Strict',
];

const Index = () => {
  const [selectedLeaderboard, setSelectedLeaderboard] = useState('final');
  const [leaderboard, setLeaderboard] = useState<leaderboardItem[]>([]);
  const [leaderboardErr, setLeaderboardErr] = useState(null);

  const { loading: leaderboardLoading, fetch: getLeaderboard } = useAxios(
    {
      url: `/leaderboard/cached/${selectedLeaderboard}`,
      method: 'GET',
    },
    // eslint-disable-next-line
    (err, data) => {
      if (err) {
        console.log(err);
        setLeaderboardErr(err);
      } else {
        if (selectedLeaderboard === 'final') {
          data.data.data = data.data.data.filter((i: any) =>
            final_teams.includes(i.team_name),
          );
        }
        setLeaderboard(data.data.data);
      }
    },
  );

  useEffect(() => {
    setLeaderboard([]);
    getLeaderboard();
  }, [selectedLeaderboard, setLeaderboard]);

  return (
    <Container maxW="90%" w="100%" h="100%">
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
              This leaderboard is updated every <b>15mins</b>.
            </Text>
          </VStack>
          {/* <CNChooser
            onSelect={(e: string) => {
              setSelectedLeaderboard(e);
            }}
          /> */}
          <Center>
            <Container maxW="xl">
              <Select
                // @ts-ignore
                name="leaderboard"
                placeholder="Open - Finals"
                options={[
                  {
                    label: 'Open - Preliminary ',
                    value: 'open',
                  },
                  {
                    label: 'Open - Finals',
                    value: 'final',
                  },
                  {
                    label: 'Closed',
                    value: 'closed',
                  },
                ]}
                onChange={(e: any) => setSelectedLeaderboard(e.value)}
              />
            </Container>
          </Center>
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
                <Th>Time Taken</Th>
                {selectedLeaderboard === 'closed' ? (
                  <>
                    <Th w="8%">A - Attend Talks</Th>
                    <Th w="8%">B - Distant Relatives</Th>
                    <Th w="8%">C - Concert</Th>
                    <Th w="8%">D - Mamak</Th>
                    <Th w="8%">E - Fair Contest</Th>
                  </>
                ) : selectedLeaderboard === 'final' ? (
                  <>
                    <Th w="8%">A </Th>
                    <Th w="8%">B </Th>
                    <Th w="8%">C </Th>
                    <Th w="8%">D </Th>
                    <Th w="8%">E </Th>
                    <Th w="8%">F </Th>
                    <Th w="8%">G </Th>
                    <Th w="8%">H </Th>
                    <Th w="8%">I </Th>
                    <Th w="8%">J </Th>
                  </>
                ) : (
                  <>
                    <Tooltip
                      hasArrow
                      label="f(Aibohphobia)^-1"
                      bg="gray.300"
                      color="black"
                      placement="top"
                    >
                      <Th
                        w="5%"
                        cursor={'pointer'}
                        onClick={() => {
                          window.open(
                            'https://www.hackerrank.com/contests/codenection-2021-open-category-preliminary/challenges/faibohphobia-1',
                          );
                        }}
                      >
                        A - {truncate('f(Aibohphobia)^-1')}{' '}
                      </Th>
                    </Tooltip>

                    <Tooltip
                      hasArrow
                      label="Did they cheat?"
                      bg="gray.300"
                      color="black"
                      placement="top"
                    >
                      <Th
                        w="5%"
                        cursor={'pointer'}
                        onClick={() => {
                          window.open(
                            'https://www.hackerrank.com/contests/codenection-2021-open-category-preliminary/challenges/did-they-cheat',
                          );
                        }}
                      >
                        B - {truncate('Did they cheat?')}
                      </Th>
                    </Tooltip>

                    <Tooltip
                      hasArrow
                      label="Campus Plan"
                      bg="gray.300"
                      color="black"
                      placement="top"
                    >
                      <Th
                        w="5%"
                        cursor={'pointer'}
                        onClick={() => {
                          window.open(
                            'https://www.hackerrank.com/contests/codenection-2021-open-category-preliminary/challenges/campus-plan',
                          );
                        }}
                      >
                        C - {truncate('Campus Plan')}
                      </Th>
                    </Tooltip>
                    <Tooltip
                      hasArrow
                      label="Semester Breaks"
                      bg="gray.300"
                      color="black"
                      placement="top"
                    >
                      <Th
                        w="5%"
                        cursor={'pointer'}
                        onClick={() => {
                          window.open(
                            'https://www.hackerrank.com/contests/codenection-2021-open-category-preliminary/challenges/semester-breaks',
                          );
                        }}
                      >
                        D - {truncate('Semester Breaks')}
                      </Th>
                    </Tooltip>
                    <Tooltip
                      hasArrow
                      label="Assignment Interviews"
                      bg="gray.300"
                      color="black"
                      placement="top"
                    >
                      <Th
                        w="5%"
                        cursor={'pointer'}
                        onClick={() => {
                          window.open(
                            'https://www.hackerrank.com/contests/codenection-2021-open-category-preliminary/challenges/assignment-interviews',
                          );
                        }}
                      >
                        E - {truncate('Assignment Interviews')}
                      </Th>
                    </Tooltip>

                    {/* <Th w="5%">F - {truncate('Summer Date')}</Th> */}
                  </>
                )}
              </Tr>
            </Thead>
            <Tbody>
              {leaderboardLoading ? (
                <Td
                  colSpan={
                    selectedLeaderboard === 'closed' ? 8 : 'finals' ? 14 : 9
                  }
                >
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
                    <Td w="2%">{idx + 1}</Td>
                    <Td w="15%">
                      <VStack
                        w="100%"
                        h="100%"
                        justifyContent={'flex-start'}
                        alignItems={'flex-start'}
                      >
                        <Text fontSize={'22px'} fontWeight={'bold'} mb="12px">
                          {data.team_name}
                        </Text>
                        {data.teamMembers && data.teamMembers.length > 0 ? (
                          <HStack>
                            {data.teamMembers.map(
                              (member: any, idx: number) => {
                                let uniLogo = uniLogos.find(
                                  (uni: any) =>
                                    uni.university === member.university,
                                )?.url_logo;

                                return (
                                  <CNHoverableTeamMembers
                                    uniLogo={
                                      uniLogo
                                        ? uniLogo
                                        : 'https://www.mmu.edu.my/wp-content/themes/mmu2018/assets/images/logo-mmu2x.png'
                                    }
                                    user={member}
                                  />
                                );
                              },
                            )}
                          </HStack>
                        ) : (
                          <></>
                        )}
                      </VStack>
                    </Td>
                    <Td w="10%">
                      <Center
                        borderRadius="25px"
                        w="fit-content"
                        px="3"
                        py="2"
                        bgColor="#C9C9C9"
                      >
                        {data.hackerrank_info
                          ? Number(data.hackerrank_info.score.toFixed(2))
                          : 0}
                      </Center>
                    </Td>
                    <Td w="10%">
                      <Center borderRadius="25px" w="fit-content" px="3" py="2">
                        {data.hackerrank_info
                          ? Number(data.hackerrank_info.totalSubmissionTime) +
                            's'
                          : 0}
                      </Center>
                    </Td>
                    {data.scoresByChallenge &&
                      data.scoresByChallenge.map((score: any, idx: number) => {
                        if (selectedLeaderboard === 'open' && idx == 5) {
                          return <></>;
                        }
                        return (
                          <Td px="0" py="3">
                            {console.log(data.scoresByChallenge)}
                            <Center
                              bgColor={
                                Number(score.score.toFixed(2)) > 0
                                  ? '#83FFD2'
                                  : '#FF8383'
                              }
                              w="100%"
                              h="75px"
                            >
                              <VStack
                                h="100%"
                                w="100%"
                                display={'flex'}
                                alignItems={'center'}
                                justifyContent={'center'}
                              >
                                <Text
                                  fontSize={'18px'}
                                  fontWeight={'bold'}
                                  onClick={() => {
                                    window.open(
                                      'https://www.hackerrank.com/contests/codenection-2021-open-category-preliminary/challenges/faibohphobia-1',
                                    );
                                  }}
                                >
                                  {Number(score.score.toFixed(2))}
                                </Text>
                              </VStack>
                            </Center>
                          </Td>
                        );
                      })}
                  </Tr>
                ))
              ) : (
                <Td
                  colSpan={
                    selectedLeaderboard === 'closed' ? 8 : 'finals' ? 14 : 9
                  }
                >
                  {leaderboardErr ? (
                    <Alert status="error">
                      <AlertIcon />
                      <AlertTitle mr={2}>Error fetching leaderboard</AlertTitle>
                      <AlertDescription>
                        Please try again later
                      </AlertDescription>
                    </Alert>
                  ) : (
                    <Center w="100%">
                      <Text>No Data</Text>
                    </Center>
                  )}
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
