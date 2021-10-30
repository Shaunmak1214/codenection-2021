import React, { useEffect, useState } from 'react';
import { Center, SimpleGrid, VStack } from '@chakra-ui/layout';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Tag,
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
} from '@chakra-ui/react';

import TeamMember from '../TeamMember/TeamMember';
import { CNSpacer, SecondaryText } from '../../atoms';

import store from '../../../store';
import authTypes from '../../../types/auth.types';
import { useAxios } from '../../../hooks';

const PublicTeamList = React.forwardRef((props, ref) => {
  const authStore: authTypes = store.getState().auth;

  const [teams, setTeams] = useState([]);
  const [teamsErr, setTeamsErr] = useState<any | null>();

  const { loading: getPublicTeamsLoading, fetch: getPublicTeams } = useAxios(
    {
      url: '/team/',
      method: 'GET',
      headers: {
        Authorization: `Bearer ${authStore.accessToken}`,
      },
    },
    // eslint-disable-next-line
    (err, data) => {
      if (err) {
        setTeamsErr(err);
      } else {
        setTeams(data.data);
      }
    },
  );

  useEffect(() => {
    getPublicTeams();
    // eslint-disable-next-line
  }, []);

  return (
    <VStack
      w="100%"
      h="max-content"
      alignItems="flex-start"
      id="publicTeamList"
      // @ts-ignore
      ref={ref}
    >
      <SecondaryText fontSize="2xl" fontWeight="bold">
        Are you looking for new team member?
      </SecondaryText>
      <CNSpacer size="4xs" />
      {getPublicTeamsLoading || !teams ? (
        <Center w="100%">
          <Spinner />
        </Center>
      ) : (
        <>
          {teamsErr ? (
            <Center w="100%">
              <Alert status="error">
                <AlertIcon />
                <AlertTitle mr={2}>Failed to get public teams lists</AlertTitle>
                <AlertDescription>Please try again later.</AlertDescription>
              </Alert>
            </Center>
          ) : (
            <Box w="100%" overflowX="auto">
              <Table variant="simple">
                <TableCaption>Public teams lists</TableCaption>
                <Thead>
                  <Tr>
                    <Th isNumeric>#</Th>
                    <Th>Team Name</Th>
                    <Th>Category</Th>
                    <Th>Team Leader & Member</Th>
                    <Th>Contact Info</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {teams.map((team: any, idx) => (
                    <Tr key={team.id}>
                      <Td>{idx + 1}</Td>
                      <Td>{team.team_name}</Td>
                      <Td>
                        <SimpleGrid w="max-content" spacingY={1} columns={1}>
                          {team.is_internal ? (
                            <Tag
                              w="max-content"
                              size={'md'}
                              variant="solid"
                              bgColor="#0099B8"
                            >
                              Closed Category
                            </Tag>
                          ) : (
                            <></>
                          )}

                          {team.is_external ? (
                            <Tag
                              w="max-content"
                              size={'md'}
                              variant="solid"
                              bgColor="#0078FF"
                            >
                              Open Category
                            </Tag>
                          ) : (
                            <></>
                          )}
                        </SimpleGrid>
                      </Td>
                      <Td>
                        <VStack w="max-content" spacingY={1}>
                          {team.team_lead ? (
                            <TeamMember
                              leader
                              category="closed"
                              member={team.team_lead.full_name}
                            />
                          ) : (
                            <></>
                          )}
                          {team.team_members.map((member: any, idx: number) => (
                            <TeamMember
                              key={idx}
                              category="closed"
                              member={member.full_name}
                            />
                          ))}
                        </VStack>
                      </Td>
                      <Td>{team.contact_info}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>
          )}
        </>
      )}
    </VStack>
  );
});

export default PublicTeamList;
