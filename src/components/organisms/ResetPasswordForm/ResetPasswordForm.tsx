import React, { useEffect } from 'react';

import { VStack, Container, HStack } from '@chakra-ui/layout';
import { Text, Link, Image, useToast } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { motion } from 'framer-motion';

import { CNTextFormField, PrimaryButton, SecondaryText } from '../../atoms';
import { BoxIcons } from '../../molecules';
import { PasswordIcon, HomeIcon, CodeNectionLogo } from '../../../assets';

import { useAxios, useWindowSize } from '../../../hooks';

interface MyFormValues {
  password: string;
  confirmPassword: string;
}

const ResetPasswordForm = () => {
  const [code, setCode] = React.useState('');

  const toast = useToast();
  const schema = yup.object({
    password: yup
      .string()
      .min(6)
      .max(60)
      .required('Password is a required field'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Password not match')
      .required('Confirm Password is a required field'),
  });
  const initialValues: MyFormValues = {
    password: '',
    confirmPassword: '',
  };

  // eslint-disable-next-line
  const [windowWidth, windowHeight] = useWindowSize();

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search).get(
      'code',
    );

    if (!urlSearchParams) {
      toast({
        title: 'Code is not found',
        description: 'You"ll be redirected to the login page',
        status: 'error',
        position: 'top-right',
        duration: 5000,
        isClosable: true,
      });

      setTimeout(() => {
        window.location.href = '/login';
      }, 3000);
    } else {
      setCode(urlSearchParams);
    }
  }, [toast]);

  // eslint-disable-next-line
  const { loading: resetLoading, fetch: reset } = useAxios(
    {
      url: '/forgot/reset',
      method: 'POST',
    },
    // eslint-disable-next-line
    (err, data) => {
      if (err) {
        toast({
          title: 'Failed to reset password',
          // @ts-ignore
          description: err.data.message,
          status: 'error',
          position: 'top-right',
          duration: 5000,
          isClosable: true,
        });
      } else {
        toast({
          title: 'Successfully reset password',
          description: 'You"ll be redirected to the dashboard',
          status: 'success',
          position: 'top-right',
          duration: 5000,
          isClosable: true,
        });

        setTimeout(() => {
          window.location.href = '/';
        }, 3000);
      }
    },
  );

  return (
    <VStack h="100%" w={windowWidth > 1120 ? '50%' : '100%'}>
      <motion.div
        initial={{ opacity: 0, x: -75 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Container
          w={windowWidth > 1120 ? '550px' : '100%'}
          maxW="container.form"
          py="25px"
        >
          <Container py="20px">
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
              Create a New Password
            </SecondaryText>
            <Text color="#5B5B5B">
              Please enter a new password to reset it.
            </Text>
          </Container>

          <Container w="100%" py="30px">
            <Formik
              validationSchema={schema}
              initialValues={initialValues}
              onSubmit={(data) => {
                reset({
                  password: data.password,
                  token: code,
                });
              }}
            >
              {() => (
                <Form>
                  <VStack spacing={9}>
                    <Field
                      label="Password: "
                      name="password"
                      leftIcon={PasswordIcon}
                      placeholder="*********"
                      component={CNTextFormField}
                      type="password"
                    />

                    <Field
                      label="Confirmation Password: "
                      name="confirmPassword"
                      leftIcon={PasswordIcon}
                      placeholder="*********"
                      component={CNTextFormField}
                      type="password"
                    />

                    {/* <Field
                      label="Email Verification Code: "
                      name="emailCode"
                      leftIcon={PasswordIcon}
                      placeholder="*********"
                      component={CNTextFormField}
                      type="password"
                      sendCodeBtn
                    /> */}
                  </VStack>

                  <PrimaryButton
                    mt="35px"
                    borderRadius="8px"
                    w="100%"
                    _hover={{ bg: '#000000' }}
                    type="submit"
                    isLoading={resetLoading}
                  >
                    Reset Password
                  </PrimaryButton>
                </Form>
              )}
            </Formik>
            <SecondaryText pt="15px" pl="5px">
              Already have an account?
              <Link pl="5px" fontWeight="bold" color="#002A97" href="/login">
                Log in
              </Link>
            </SecondaryText>
          </Container>
        </Container>
      </motion.div>
    </VStack>
  );
};

export default ResetPasswordForm;
