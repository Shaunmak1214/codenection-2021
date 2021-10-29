import React from 'react';
import { Box, VStack, Flex, Container, Text } from '@chakra-ui/react';
import TeamMember from '../TeamMember/TeamMember';
import PropTypes from 'prop-types';

interface Props {
  category?: string;
  teamInfo: any;
}

const TeamBlocks = ({ teamInfo, category = 'open' }: Props) => {
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
      py="30px"
      mb="35px"
    >
      <VStack minH="205px">
        {Object.keys(teamInfo).length > 0 ? (
          <>
            {' '}
            <Flex
              flexDir={['column', 'column', 'column', 'row']}
              px="10px"
              py="5px"
            >
              <Box
                w={['100%', '100%', '100%', '65%']}
                py="3px"
                px={['15px', '15px', '25px']}
                borderRadius="8px"
                mr="5px"
                bg={category === 'closed' ? '#0099B8' : '#0078FF'}
                d="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Text color="#FFFFFF" fontSize="sm" p="0">
                  {category === 'closed' ? 'Closed Category' : 'Open Category'}
                </Text>
              </Box>
              <Box
                w={['100%', '100%', '100%', '35%']}
                py="3px"
                borderRadius="8px"
                px="25px"
                bg={category === 'closed' ? '#FFFFFF' : '#DADADA'}
                boxShadow={
                  category === 'closed'
                    ? '0px 2px 5px rgba(162, 162, 162, 0.25)'
                    : 'none'
                }
                mt={['10px', '10px', '10px', '0px']}
                d="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Text textAlign="center" fontSize="sm" p="0">
                  {category === 'closed' ? 'Public' : 'Private'}
                </Text>
              </Box>
            </Flex>
            <Container>
              <VStack>
                <Text
                  py="8px"
                  fontSize="xl"
                  fontWeight="600"
                  textAlign="center"
                  color={category === 'closed' ? '#0099B8' : '#0078FF'}
                >
                  {teamInfo.team_name}
                </Text>
                <TeamMember
                  leader
                  category={category}
                  member={teamInfo.team_lead?.full_name}
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
        ) : (
          <h1>No Team Yet</h1>
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
