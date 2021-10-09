import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Formik, Form } from 'formik';
import { JoinTeamTextField } from '../../molecules';
import { Text, Spinner, useToast } from '@chakra-ui/react';
import { VStack, Container, HStack, Box } from '@chakra-ui/layout';

import { SecondaryText, PrimaryButton, JoinTeamButton } from '../../atoms';

const FormTeamDetails = () => {
  const toast = useToast();

  useEffect(() => {
    toast({
      title: 'Account created!',
      description: "We've created your account for you.",
      status: 'success',
      position: 'top-right',
      duration: 9000,
      isClosable: true,
    });
  }, [toast]);

  return (
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
                  1181203334@student.mmu.edu.my
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
                  Enter a team code that gets from your leader to join the team.{' '}
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

                    <Text>or </Text>

                    <Box w="25%" h="1px" bgColor="#8C8C8C" />
                  </HStack>

                  <JoinTeamButton w="100%">Create Team</JoinTeamButton>
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
  );
};

export default FormTeamDetails;
