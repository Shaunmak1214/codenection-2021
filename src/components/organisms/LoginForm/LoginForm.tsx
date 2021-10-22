import React from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { motion } from 'framer-motion';

import { VStack, Container, Box, HStack } from '@chakra-ui/layout';
import { Text, Link, Image, useToast } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';

import { LOGIN } from '../../../reducers/authSlice';

import { CNTextFormField, PrimaryButton, SecondaryText } from '../../atoms';
import { CNModal, BoxIcons } from '../../molecules';
import {
  EmailIcon,
  PasswordIcon,
  HomeIcon,
  CodeNectionLogo,
} from '../../../assets';

import { genericEmail } from '../../../data/emailData';

import { useCNModal, useAxios } from '../../../hooks';
interface MyFormValues {
  email: string;
  password: string;
}
const LoginForm = () => {
  const { isOpen, handleModalClose, handleModalOpen } = useCNModal({
    initialState: false,
  });

  const dispatch = useDispatch();
  const toast = useToast();

  const { loading, fetch } = useAxios(
    {
      url: '/auth/login',
      method: 'post',
    },
    (err, data) => {
      if (err) {
        toast({
          title: err.data.message,
          description: '',
          status: 'error',
          position: 'top-right',
          duration: 90000,
          isClosable: true,
        });
      } else {
        dispatch(
          LOGIN({
            // @ts-ignore
            user: data.data.user,
            // @ts-ignore
            accessToken: data.data.token,
            // @ts-ignore
            refreshToken: data.data.refreshToken,
          }),
        );

        window.location.href = '/dashboard';
      }
    },
  );

  // eslint-disable-next-line
  const { loading: forgotLoading, fetch: forgot } = useAxios(
    {
      url: '/forgot',
      method: 'post',
    },
    // eslint-disable-next-line
    (err, data) => {
      if (err) {
        toast({
          title: 'Forgot Password Failed',
          // @ts-ignore
          description: err.data.message,
          status: 'error',
          position: 'top-right',
          duration: 90000,
          isClosable: true,
        });
      } else {
        toast({
          title: 'Forgot Password Success',
          description: 'An email has been send to your email',
          status: 'success',
          position: 'top-right',
          duration: 90000,
          isClosable: true,
        });

        handleModalClose();
      }
    },
  );

  const forgotSchema = yup.object({
    email: yup.string().min(3).max(60).required('Email is a required field'),
  });

  const schema = yup.object({
    email: yup.string().min(3).max(60).required('Email is a required field'),
    password: yup
      .string()
      .min(3)
      .max(60)
      .required('Password is a required field'),
  });

  const initialValues: MyFormValues = {
    email: '',
    password: '',
  };

  return (
    <>
      <CNModal
        maxHeight="50%"
        blur
        disableButton
        modalIsOpen={isOpen}
        onClose={handleModalClose}
      >
        <VStack h="100%" w="100%" justifyContent="flex-start">
          <VStack w="100%" py="10px" alignItems="flex-start" mb="20px">
            <SecondaryText fontSize="3xl" fontWeight="bold">
              Reset Password
            </SecondaryText>
            <SecondaryText fontSize="sm" opacity=".7">
              An email will be sent to you with a link to reset your password.
            </SecondaryText>
          </VStack>
          <Formik
            validationSchema={forgotSchema}
            initialValues={{
              email: '',
            }}
            onSubmit={(data) => {
              forgot(data);
            }}
          >
            {() => (
              // eslint-disable-next-line
              <Form style={{ width: '100%', marginTop: '' }}>
                <Field
                  label="Student Email: "
                  name="email"
                  leftIcon={EmailIcon}
                  placeholder="xxxx@student.mmu.edu.my"
                  validate={(value: any) => {
                    if (value.includes('@')) {
                      let domain = value.split('@')[1];
                      if (genericEmail.includes(domain)) {
                        let error = 'Please use your student email';
                        return error;
                      }
                    }
                  }}
                  component={CNTextFormField}
                />

                <HStack
                  w="100%"
                  justifySelf="flex-end"
                  justifyContent="flex-end"
                  mt="45px"
                >
                  <Link
                    onClick={() => {
                      handleModalClose();
                    }}
                    mr="20px"
                  >
                    Cancel
                  </Link>
                  <PrimaryButton type="submit" isLoading={forgotLoading}>
                    Submit
                  </PrimaryButton>
                </HStack>
              </Form>
            )}
          </Formik>
        </VStack>
      </CNModal>
      <VStack h="100%" w="50%">
        <motion.div
          initial={{ opacity: 0, x: -75 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Container w="550px" maxW="container.form">
            <Container mb="25px">
              <HStack
                justifyContent="space-between"
                alignItems="center"
                mb="20px"
              >
                <Image
                  src={CodeNectionLogo}
                  w="70px"
                  h="70px"
                  onClick={() => (window.location.href = '/')}
                />
                <BoxIcons
                  icon={HomeIcon}
                  onClick={() => (window.location.href = '/')}
                />
              </HStack>
              <SecondaryText fontWeight="bold" fontSize="4xl">
                Login
              </SecondaryText>
              <Text color="#5B5B5B">
                Welcome CodeNector! Please login to your account.
              </Text>
            </Container>

            <Container w="100%" py="30px">
              <Formik
                validationSchema={schema}
                initialValues={initialValues}
                onSubmit={(data) => {
                  fetch(data);
                }}
              >
                {() => (
                  <Form>
                    <VStack spacing={9}>
                      <Field
                        label="Student Email: "
                        name="email"
                        leftIcon={EmailIcon}
                        placeholder="xxxx@student.mmu.edu.my"
                        component={CNTextFormField}
                      />

                      <Field
                        label="Password: "
                        name="password"
                        leftIcon={PasswordIcon}
                        placeholder="*********"
                        component={CNTextFormField}
                        type="password"
                      />
                    </VStack>
                    <Box d="flex" justifyContent="flex-end" mt="15px">
                      {' '}
                      <Link
                        onClick={() => {
                          handleModalOpen();
                        }}
                        color="#002A97"
                      >
                        Forgot Password?
                      </Link>
                    </Box>

                    <PrimaryButton
                      mt="35px"
                      borderRadius="8px"
                      w="100%"
                      _hover={{ bg: '#000000' }}
                      isLoading={loading ? true : false}
                      type="submit"
                    >
                      Login
                    </PrimaryButton>
                  </Form>
                )}
              </Formik>
              <SecondaryText pt="15px" pl="5px">
                Don&apos;t have an account yet?
                <Link
                  pl="5px"
                  fontWeight="bold"
                  color="#002A97"
                  href="/register"
                >
                  Register here
                </Link>
              </SecondaryText>
            </Container>
          </Container>
        </motion.div>
      </VStack>
    </>
  );
};

export default LoginForm;
