import React from 'react';

import { HStack, VStack, Center, Container } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';
import { Redirect } from 'react-router';

import { LoginForm } from '../components/organisms';
import { PrimaryText } from '../components/atoms';
import { useWindowSize } from '../hooks';
import store from '../store';

const Login = () => {
  const authStore = store.getState().auth;

  // eslint-disable-next-line
  const [windowWidth, windowHeight] = useWindowSize();

  if (authStore.isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <HStack>
      <LoginForm />
      {windowWidth > 1120 && (
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
      )}
    </HStack>
  );
};

export default Login;
