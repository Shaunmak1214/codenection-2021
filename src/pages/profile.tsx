import React from 'react';
import {
  EditPersonal,
  EditJob,
  EditOther,
  EditEducation,
} from '../components/organisms';
import { Center, Container, HStack, VStack } from '@chakra-ui/react';
const Index = () => {
  return (
    <Center py="150px">
      <Container maxW="container.xl">
        <HStack>
          <Container>
            <h1>testin</h1>
          </Container>
          <VStack>
            <EditPersonal />
            <EditEducation />
            <EditJob />
            <EditOther />
          </VStack>
        </HStack>
      </Container>
    </Center>
  );
};

export default Index;
