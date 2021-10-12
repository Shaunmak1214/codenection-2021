import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Formik, Form, Field } from 'formik';
import Lottie from 'react-lottie';

import { Text, Spinner, useToast, FormLabel } from '@chakra-ui/react';
import {
  VStack,
  Container,
  HStack,
  Box,
  SimpleGrid,
  Flex,
} from '@chakra-ui/layout';

import {
  SecondaryText,
  PrimaryButton,
  GradientButton,
  InputField,
  JoinTeamButton,
  CNTextFormField,
  CNSelectFormField,
} from '../../atoms';
import { CNModal, JoinTeamTextField } from '../../molecules';

import useAxios from '../../../hooks/useAxios';

import { EmailLoader } from '../../../constants';
import store from '../../../store';
import authTypes from '../../../types/auth.types';

const FormTeamDetails = () => {
  const authStore: authTypes = store.getState().auth;
  const toast = useToast();
  const [verified, setVerified] = useState(false);
  const [teamModalIsOpen, setTeamModalIsOpen] = useState(false);

  // eslint-disable-next-line
  const { loading: verifyLoading, fetch: verify } = useAxios(
    {
      url: '/verify/verify',
      method: 'POST',
    },
    (err, data) => {
      if (err) {
        console.log(err);
        toast({
          title: 'Error',
          description: 'Verify code is incorrect',
          status: 'error',
          duration: 2000,
          isClosable: true,
        });
      } else {
        console.log(data);
        toast({
          title: 'Success',
          description: 'Verify code is correct',
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
        setVerified(true);
      }
    },
  );

  let firstNum = useRef(null);
  let SecNum = useRef(null);
  let thirdNum = useRef(null);
  let forthNum = useRef(null);
  let fifthNum = useRef(null);
  let sixthNum = useRef(null);

  const submitVerify = () => {
    // @ts-ignore
    const code =
      // @ts-ignore
      firstNum.current.value +
      // @ts-ignore
      SecNum.current.value +
      // @ts-ignore
      thirdNum.current.value +
      // @ts-ignore
      forthNum.current.value +
      // @ts-ignore
      fifthNum.current.value +
      // @ts-ignore
      sixthNum.current.value;

    verify({
      email: authStore.user!.email,
      code,
    });
  };

  function OTPInput() {
    const inputs = document.querySelectorAll('#otp > *[id]');
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener('keydown', function (event) {
        // @ts-ignore
        if (event.key === 'Backspace') {
          // @ts-ignore
          inputs[i].value = '';
          // @ts-ignore
          if (i !== 0) inputs[i - 1].focus();
        } else {
          // @ts-ignore
          if (i === inputs.length - 1 && inputs[i].value !== '') {
            return true;
            // @ts-ignore
          } else if (event.keyCode > 47 && event.keyCode < 58) {
            // @ts-ignore
            inputs[i].value = event.key;
            // @ts-ignore
            if (i !== inputs.length - 1) inputs[i + 1].focus();
            event.preventDefault();
            // @ts-ignore
          } else if (event.keyCode > 64 && event.keyCode < 91) {
            // @ts-ignore
            inputs[i].value = String.fromCharCode(event.keyCode);
            // @ts-ignore
            if (i !== inputs.length - 1) inputs[i + 1].focus();
            event.preventDefault();
          }
        }
      });
    }
  }

  useEffect(() => {
    toast({
      title: 'Account created!',
      description: "We've created your account for you.",
      status: 'success',
      position: 'top-right',
      duration: 9000,
      isClosable: true,
    });

    toast({
      title: 'A verification email is sent to your email!',
      description: 'Please place your code in the input box',
      status: 'success',
      position: 'top-right',
      duration: 9000,
      isClosable: true,
    });

    OTPInput();
  }, [toast]);

  return (
    <>
      {!verified ? (
        <CNModal blur>
          <Lottie
            options={EmailLoader}
            height={125}
            width={125}
            style={{ marginTop: 5, marginBottom: 5 }}
          />
          <Text fontWeight="600" fontSize="28px">
            Verify your email
          </Text>
          <Text fontSize="18px">
            A verification code has been sent to your email{' '}
            <span
              style={{
                backgroundColor: '#F5F5F5',
                padding: '5px 5px',
                borderRadius: '8px',
                fontSize: '16px',
              }}
            >
              {authStore.user!.email}
            </span>
          </Text>
          <SimpleGrid
            columns={6}
            spacing={2}
            mt="35px !important"
            id="otp"
            justifyContent="center"
            className="flex justify-center"
          >
            <InputField ref={firstNum} inputId="first" />
            <InputField ref={SecNum} inputId="second" />
            <InputField ref={thirdNum} inputId="third" />
            <InputField ref={forthNum} inputId="fourth" />
            <InputField ref={fifthNum} inputId="fifth" />
            <InputField ref={sixthNum} inputId="sixth" />
          </SimpleGrid>

          <PrimaryButton
            bgColor="#407DC1"
            mt="40px !important"
            borderRadius="8px"
            isLoading={verifyLoading ? true : false}
            onClick={() => {
              submitVerify();
            }}
          >
            Confirm
          </PrimaryButton>
          <Text fontSize="15px">Didn{"'"}t recieve any code? Resend</Text>
        </CNModal>
      ) : (
        <></>
      )}

      {teamModalIsOpen ? (
        <CNModal
          blur
          modalIsOpen={teamModalIsOpen}
          onClose={() => {
            setTeamModalIsOpen(false);
          }}
        >
          <Flex w="100%" justifyContent="flex-start">
            <Text fontSize="35px" fontWeight="600">
              Create Team
            </Text>
          </Flex>

          <Box w="100%" h="200px"></Box>

          <Formik
            initialValues={{
              name: '',
              teamName: '',
              hackerrankUsername: '',
            }}
            onSubmit={(data) => console.log(data)}
          >
            {() => (
              <Form style={{ width: '100%' }}>
                <VStack spacing={7} w="100%">
                  <VStack spacing={2} alignItems="flex-start" w="100%">
                    <FormLabel>Select Event: </FormLabel>
                    <Field
                      display={
                        <Flex justifyContent="flex-start">
                          Closed Category (Open to MMU only)
                        </Flex>
                      }
                      name="event"
                      value="closed"
                      component={CNSelectFormField}
                    />
                    <Field
                      display={
                        <Flex justifyContent="flex-start">
                          Open Category (Open to all universities including MMU)
                        </Flex>
                      }
                      name="event"
                      value="open"
                      component={CNSelectFormField}
                    />
                  </VStack>

                  <Field
                    type="string"
                    name="teamName"
                    label="Team Name:"
                    placeholder="Team Name"
                    component={CNTextFormField}
                  />

                  <Field
                    type="string"
                    label="Hackerrank Username:"
                    name="hackerrankUsername"
                    placeholder=""
                    component={CNTextFormField}
                  />
                </VStack>
              </Form>
            )}
          </Formik>
        </CNModal>
      ) : (
        <></>
      )}

      <VStack h="100%" w="50%">
        <motion.div
          initial={{ opacity: 0, x: 75 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Container mt="100px" w="550px" maxW="container.form">
            <Container mb="20px">
              <Text color="#5B5B5B">Step 3</Text>
              <SecondaryText fontWeight="bold" fontSize="4xl">
                You{"'"}re registered!
              </SecondaryText>
              <Text color="#5B5B5B">
                Now you can create your team and invite your friends to join it.
              </Text>
            </Container>

            <Container w="100%" py="30px">
              <VStack w="100%" alignItems="flex-start">
                <Text fontSize="22px">Verify Email</Text>
                <HStack
                  w="100%"
                  px="25px"
                  py="15px"
                  borderRadius="20px"
                  justifyContent="space-between"
                  boxShadow="0px 4px 10px rgba(132, 132, 132, 0.25);"
                >
                  <Text color="#5B5B5B" fontWeight="bold">
                    {authStore.user!.email}
                  </Text>
                  <Spinner size="sm" />
                </HStack>

                <VStack
                  alignItems="flex-start"
                  __css={{
                    marginTop: '50px !important',
                  }}
                  w="100%"
                >
                  <Text fontSize="22px">Join or create a team (optional)</Text>
                  <Text fontSize="15px">
                    Enter a team code that gets from your leader to join the
                    team.{' '}
                  </Text>

                  <VStack
                    borderRadius="20px"
                    bgColor="#D9F1F6"
                    p="5"
                    w="100%"
                    mt="20px"
                  >
                    <Formik
                      initialValues={{
                        teamCode: '',
                      }}
                      onSubmit={(data) => console.log(data)}
                    >
                      {() => (
                        <Form style={{ width: '100%' }}>
                          <JoinTeamTextField />
                        </Form>
                      )}
                    </Formik>

                    <HStack
                      w="100%"
                      justifyContent="space-around"
                      __css={{
                        marginTop: '15px !important',
                        marginBottom: '15px !important',
                      }}
                    >
                      <Box w="25%" h="1px" bgColor="#8C8C8C" />

                      <Box w="25%" h="1px" bgColor="#8C8C8C" />
                    </HStack>

                    <JoinTeamButton
                      w="100%"
                      borderRadius="12px"
                      border="none"
                      bgColor="#50C0D9"
                      _hover={{ bg: '#147186' }}
                      onClick={() => {
                        setTeamModalIsOpen(true);
                      }}
                    >
                      Create Team
                    </JoinTeamButton>
                  </VStack>

                  <GradientButton
                    onClick={() => {
                      window.location.href = '/dashboard';
                    }}
                    w="100%"
                    mt="50px !important"
                  >
                    Continue
                  </GradientButton>
                </VStack>
              </VStack>
            </Container>
          </Container>
        </motion.div>
      </VStack>
    </>
  );
};

export default FormTeamDetails;
