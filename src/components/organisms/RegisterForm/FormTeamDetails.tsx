import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

import { useDispatch } from 'react-redux';
import { UPDATE } from '../../../reducers/authSlice';

import { Text, useToast, Image } from '@chakra-ui/react';
import { VStack, Container, HStack, Box } from '@chakra-ui/layout';

import { SecondaryText, GradientButton, JoinTeamButton } from '../../atoms';
import { JoinTeamTextField } from '../../molecules';
import { CreateTeamModal, EmailVerifyModal } from '../../organisms';

import store from '../../../store';
import authTypes from '../../../types/auth.types';
import { useCNModal, useAxios } from '../../../hooks';

import { TickIcon } from '../../../assets';

const FormTeamDetails = () => {
  const authStore: authTypes = store.getState().auth;
  const toast = useToast();
  const dispatch = useDispatch();
  const [teamModalIsOpen, setTeamModalIsOpen] = useState(false);

  const {
    isOpen: emailVerifierOpen,
    handleModalClose: handleEmailVerifierClose,
    handleModalOpen: handleEmailVerifierOpen,
  } = useCNModal({
    initialState: false,
  });

  const joinTeamSchema = yup.object({
    teamCode: yup
      .string()
      .min(6, 'Team code must be at least 6 characters')
      .max(6, 'Team code must be at least 6 characters')
      .required('Team code is required'),
  });

  // eslint-disable-next-line
  const { loading: joinTeamLoading, fetch: joinTeam } = useAxios(
    {
      url: '/team/join',
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authStore.accessToken}`,
      },
    },
    // eslint-disable-next-line
    (err, data) => {
      if (err) {
        toast({
          title: 'Failed to join team',
          // @ts-ignore
          description: err.data.message,
          status: 'error',
          position: 'top-right',
          duration: 10000,
          isClosable: true,
        });
      } else {
        toast({
          title: 'Join Team Success',
          // @ts-ignore
          description: 'You have successfully joined the team',
          status: 'success',
          position: 'top-right',
          duration: 10000,
          isClosable: true,
        });
        dispatch(
          UPDATE({
            ...authStore.user,
            // @ts-ignore
            team_id: data.data.team_id,
          }),
        );
        setTimeout(() => {
          window.location.href = '/dashboard';
        }, 3000);
      }
    },
  );

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

    // @ts-ignore
    if (authStore.user!.permission_level <= 1) {
      handleEmailVerifierOpen();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {/* Email Verification Modal */}
      <EmailVerifyModal
        isOpen={emailVerifierOpen}
        onClose={handleEmailVerifierClose}
      />

      {/* Team Modal */}
      <CreateTeamModal
        isOpen={teamModalIsOpen}
        onClose={() => {
          setTeamModalIsOpen(false);
        }}
      />

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
                  <Image src={TickIcon} alt="Tick" />
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
                      validationSchema={joinTeamSchema}
                      initialValues={{
                        teamCode: '',
                      }}
                      onSubmit={(data) => {
                        joinTeam({
                          code: data.teamCode,
                          // @ts-ignore
                          user_id: authStore.user.id,
                        });
                      }}
                    >
                      {(props) => (
                        <Form style={{ width: '100%' }}>
                          <Field
                            name="teamCode"
                            label=""
                            placeholder="Team Code"
                            border="none"
                            backgroundColor="white"
                            w="100%"
                            borderRadius="20px"
                            py="28px"
                            isLoading={joinTeamLoading}
                            onSubmit={() => {
                              // eslint-disable-next-line
                              props.submitForm();
                            }}
                            component={JoinTeamTextField}
                          />
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
                      <Text>OR</Text>
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
