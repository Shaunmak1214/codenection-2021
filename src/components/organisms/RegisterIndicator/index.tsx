import React from 'react';
import { RegisterFormStepper } from '../../molecules';
import { KeyIcon } from '../../../assets';
import { VStack, Container, Center } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';
import { CodeNectionLogo } from '../../../assets';
import { PrimaryText } from '../../atoms';
const RegisterIndicator = () => {
  return (
    <>
      <VStack bg="#002A97" h="100vh" w="50%" maxW="container.xl">
        <Container py="40px">
          <Image
            src={CodeNectionLogo}
            w="75px"
            h="75px"
            mb="12px"
            cursor="pointer"
            onClick={() => (window.location.href = '/')}
          />
          <PrimaryText fontWeight="bold" fontSize="5xl" color="#FFFFFF">
            Register
          </PrimaryText>
          <PrimaryText>
            For joining CodeNection 2021, you just need to complete the 3 steps
            below.
          </PrimaryText>
        </Container>
        <Center d="flex" justifyContent="center" alignItems="center">
          <Container d="flex" justifyContent="center" alignItems="center">
            <VStack>
              <RegisterFormStepper
                leadIcon={KeyIcon}
                header="Create your Account"
                steps={1}
              >
                Test
              </RegisterFormStepper>
              <RegisterFormStepper
                leadIcon={KeyIcon}
                header="Create your Account"
                steps={2}
              >
                Test
              </RegisterFormStepper>
              <RegisterFormStepper
                leadIcon={KeyIcon}
                header="Create your Account"
                steps={3}
              >
                Test
              </RegisterFormStepper>
            </VStack>
          </Container>
        </Center>
      </VStack>
    </>
  );
};

export default RegisterIndicator;
