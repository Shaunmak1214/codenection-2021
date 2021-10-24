import React from 'react';
import { LoginForm } from '../components/organisms';
import { HStack, VStack, Center, Container } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';
import { PrimaryText } from '../components/atoms';
import store from '../store';
import { Redirect } from 'react-router';
const Login = () => {
  const authStore = store.getState().auth;

  if (authStore.isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <HStack>
      <LoginForm />
      <Center h="100vh" w="50%" bg="#002A97">
        <Container maxW="container.xl">
          <VStack>
            <Image />
            <PrimaryText fontSize="30px" fontWeight="bold">
              Compete & Connect.
            </PrimaryText>
            <PrimaryText fontSize="15px">
              Compete and connect with teams from all
            </PrimaryText>
            <PrimaryText fontSize="15px">malaysia universities.</PrimaryText>
          </VStack>
        </Container>
      </Center>
    </HStack>
  );
};

export default Login;
