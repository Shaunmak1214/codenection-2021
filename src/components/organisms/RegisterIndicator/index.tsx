import React from 'react';
import { RegisterFormStepper } from '../../molecules';
import { VStack, Container, Center } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';
import { CodeNectionLogo } from '../../../assets';
import { PrimaryText } from '../../atoms';

interface Props {
  currentStep: number;
}

const RegisterIndicator = ({ currentStep }: Props) => {
  return (
    <>
      <VStack bg="#002A97" h="100vh" w="50%">
        <Container pt="45px" pb="35px">
          <Image
            src={CodeNectionLogo}
            w="75px"
            h="75px"
            mb="10px"
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
                type="key"
                header="Create your Account"
                steps={1}
                currentStep={currentStep}
              >
                Setting up your CodeNector account
              </RegisterFormStepper>
              <RegisterFormStepper
                type="profile"
                header="Build your Profile"
                steps={2}
                currentStep={currentStep}
              >
                Let us know who you are
              </RegisterFormStepper>
              <RegisterFormStepper
                type="team"
                header="Verify and Join a Team"
                steps={3}
                currentStep={currentStep}
              >
                Get your account ready and join a team
              </RegisterFormStepper>
            </VStack>
          </Container>
        </Center>
      </VStack>
    </>
  );
};

export default RegisterIndicator;
