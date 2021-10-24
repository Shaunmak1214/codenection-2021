import React from 'react';
import { Box, VStack, HStack, Container, Text } from '@chakra-ui/react';
import TeamMember from '../TeamMember/TeamMember';
import PropTypes from 'prop-types';

interface Props {
  category?: string;
  teamInfo: any;
  teamLoading: boolean;
}

const TeamBlocks = ({ teamLoading, teamInfo, category = 'open' }: Props) => {
  console.log(teamInfo);
  return (
    <Box
      mt="20px"
      borderRadius="15px"
      bg={category === 'closed' ? '#F1FFFF' : '#EEF6FF'}
      boxShadow={
        category === 'closed'
          ? '0px 8px 20px rgba(0, 131, 124, 0.25)'
          : '0px 8px 20px rgba(0, 120, 255, 0.25)'
      }
      py="25px"
      mb="35px"
    >
      <VStack>
        {teamLoading ? (
          <h1>Loading</h1>
        ) : (
          <>
            {' '}
            <HStack mt="15px">
              <Box
                py="3px"
                px="25px"
                borderRadius="8px"
                mr="5px"
                bg={category === 'closed' ? '#0099B8' : '#0078FF'}
              >
                <Text color="#FFFFFF" fontWeight="bold">
                  {category === 'closed' ? 'Closed Category' : 'Open Category'}
                </Text>
              </Box>
              <Box
                py="3px"
                borderRadius="8px"
                px="25px"
                bg={category === 'closed' ? '#FFFFFF' : '#DADADA'}
                boxShadow={
                  category === 'closed'
                    ? '0px 2px 5px rgba(162, 162, 162, 0.25)'
                    : 'none'
                }
              >
                <Text>{category === 'closed' ? 'Public' : 'Private'}</Text>
              </Box>
            </HStack>
            <Container>
              <VStack>
                <Text
                  py="8px"
                  fontSize="xl"
                  fontWeight="600"
                  color={category === 'closed' ? '#0099B8' : '#0078FF'}
                >
                  {teamInfo.team_name}
                </Text>
                <TeamMember
                  leader
                  category={category}
                  member={teamInfo.team_lead?.full_name || ''}
                />
                {teamInfo.team_members?.map((member: any, idx: any) => (
                  <TeamMember
                    key={idx}
                    category={category}
                    member={member.full_name}
                  />
                ))}
              </VStack>
            </Container>
          </>
        )}
      </VStack>
    </Box>
  );
};

TeamBlocks.propTypes = {
  category: PropTypes.string,
  teamInfo: PropTypes.any,
  teamLoading: PropTypes.bool,
};
React.memo(TeamBlocks);
export default TeamBlocks;
