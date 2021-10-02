import { Container, HStack, VStack, Text, Box } from '@chakra-ui/layout';
import React from 'react';

const Index = () => {
  // const TableRow = () => {
  //     return (
  //         <HStack>
  //             <Text>{'name'}</Text>
  //             <Text>{'score'}</Text>
  //         </HStack>
  //     );
  // };

  return (
    <Container maxW="container.xl" w="100%" h="100%">
      <VStack>
        <HStack>
          <VStack>
            <Text>Leaderboard</Text>
            <Text>Last updated at 30/09 6:00PM</Text>
          </VStack>
        </HStack>

        <VStack className="leaderboard-table" w="100%">
          <HStack
            className="table-head-row"
            w="100%"
            alignItems="center"
            px="2"
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
            <Box w="20%" textAlign="center">
              <Text>Score</Text>
            </Box>
            <Box w="15%" textAlign="center">
              <Text>Entries</Text>
            </Box>
            <Box w="15%" textAlign="center">
              <Text>Last</Text>
            </Box>
          </HStack>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
