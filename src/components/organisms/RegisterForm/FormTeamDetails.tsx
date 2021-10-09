import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Formik, Form, Field } from 'formik';
import Lottie from 'react-lottie';

import { Text, Spinner, useToast, Input } from '@chakra-ui/react';
import { VStack, Container, HStack, Box, SimpleGrid } from '@chakra-ui/layout';

import { CNTextFormField, SecondaryText, PrimaryButton } from '../../atoms';
import { CNModal } from '../../molecules';

import useAxios from '../../../hooks/useAxios';

import { EmailLoader } from '../../../constants';
import store from '../../../store';
import authTypes from '../../../types/auth.types';

const FormTeamDetails = () => {
  const authStore: authTypes = store.getState().auth;
  const toast = useToast();
  const [verified, setVerified] = useState(false);

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
        <CNModal
          w="550px"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
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
            <Input
              textAlign="center"
              p="0px 6px !important"
              w="45px"
              type="text"
              id="first"
              ref={firstNum}
              boxShadow="0px 5px 6px rgba(185, 185, 185, 0.25);"
            />
            <Input
              textAlign="center"
              p="0px 6px !important"
              w="45px"
              type="text"
              id="second"
              ref={SecNum}
              boxShadow="0px 5px 6px rgba(185, 185, 185, 0.25);"
            />
            <Input
              textAlign="center"
              p="0px 6px !important"
              w="45px"
              type="text"
              id="third"
              ref={thirdNum}
              boxShadow="0px 5px 6px rgba(185, 185, 185, 0.25);"
            />
            <Input
              textAlign="center"
              p="0px 6px !important"
              w="45px"
              type="text"
              id="fourth"
              ref={forthNum}
              boxShadow="0px 5px 6px rgba(185, 185, 185, 0.25);"
            />
            <Input
              textAlign="center"
              p="0px 6px !important"
              w="45px"
              type="text"
              id="fifth"
              ref={fifthNum}
              boxShadow="0px 5px 6px rgba(185, 185, 185, 0.25);"
            />
            <Input
              textAlign="center"
              p="0px 6px !important"
              w="45px"
              type="text"
              id="sixth"
              ref={sixthNum}
              boxShadow="0px 5px 6px rgba(185, 185, 185, 0.25);"
            />
          </SimpleGrid>

          <PrimaryButton
            bgColor="#407DC1"
            mt="40px !important"
            borderRadius="8px"
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
                      // validationSchema={schema}
                      initialValues={{
                        teamCode: '',
                      }}
                      onSubmit={(data) => {
                        let mergedData = { ...data };
                        console.log(mergedData);
                      }}
                    >
                      {() => (
                        // eslint-disable-next-line

                        <Form style={{ width: '100%' }}>
                          <HStack
                            w="100%"
                            d="flex"
                            justifyContent="center"
                            alignItems="center"
                            position="relative"
                          >
                            <Field
                              name="teamCode"
                              label=""
                              placeholder="Team Code"
                              border="none"
                              backgroundColor="white"
                              w="100%"
                              borderRadius="20px"
                              py="28px"
                              component={CNTextFormField}
                            />

                            <PrimaryButton
                              d="flex"
                              position="absolute"
                              top="18px"
                              right="10px"
                              w="150px"
                              borderRadius="12px"
                              border="none"
                              bgColor="#50C0D9"
                              padding="10px 10px"
                              justifyContent="center"
                              alignItems="center"
                              height="35px !important"
                              fontSize="14px"
                              _hover={{ bg: '#147186' }}
                              zIndex="10"
                            >
                              Join Team
                            </PrimaryButton>
                          </HStack>
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

                      <Text>or </Text>

                      <Box w="25%" h="1px" bgColor="#8C8C8C" />
                    </HStack>

                    <PrimaryButton
                      w="100%"
                      borderRadius="12px"
                      border="none"
                      bgColor="#50C0D9"
                      _hover={{ bg: '#147186' }}
                    >
                      Create Team
                    </PrimaryButton>
                  </VStack>

                  <PrimaryButton
                    mt="50px"
                    mb="50px"
                    w="100%"
                    borderRadius="12px"
                    border="none"
                    bg="linear-gradient(90deg, #407DC1 0%, #92ECE9 100%);"
                    _hover={{
                      bg: 'linear-gradient(90deg, #004391 0%, #005754 100%);',
                    }}
                    paddingTop="8px !important"
                    paddingBottom="8px !important"
                    transition="all 0.3s ease-in-out"
                  >
                    COMPLETE
                  </PrimaryButton>
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
