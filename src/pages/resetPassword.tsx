import React from 'react';
import { ResetPasswordForm } from '../components/organisms';
import { HStack, VStack, Center, Container } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';
import { PrimaryText } from '../components/atoms';
const ResetPassword = () => {
  return (
    <HStack>
      <ResetPasswordForm />
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

export default ResetPassword;
