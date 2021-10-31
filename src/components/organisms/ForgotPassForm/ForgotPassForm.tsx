import React from 'react';
import { useDispatch } from 'react-redux';
import { LOGIN } from '../../../reducers/authSlice';
import { VStack, Container, HStack } from '@chakra-ui/layout';
import { Text, Link, Image, useToast } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { CNTextFormField, PrimaryButton, SecondaryText } from '../../atoms';
import { BoxIcons } from '../../molecules';
import {
  EmailIcon,
  PasswordIcon,
  HomeIcon,
  CodeNectionLogo,
} from '../../../assets';
import * as yup from 'yup';
import { motion } from 'framer-motion';
import { useAxios, useWindowSize } from '../../../hooks/';

interface MyFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}
const ForgotPassForm = () => {
  const dispatch = useDispatch();
  const toast = useToast();

  // eslint-disable-next-line
  const [windowWidth, windowHeight] = useWindowSize();

  const { loading, fetch } = useAxios(
    {
      url: '/auth/forgot',
      method: 'post',
    },
    (err, data) => {
      if (err) {
        toast({
          title: 'Reset password failed',
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

  const schema = yup.object({
    email: yup
      .string()
      .email('Please enter a valid email')
      .min(3)
      .max(60)
      .required('Email is a required email'),

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
    email: '',
    password: '',
    confirmPassword: '',
  };

  return (
    <VStack h="100%" className="hai" w={windowWidth > 1120 ? '50%' : '100%'}>
      <motion.div
        initial={{ opacity: 0, x: -75 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Container
          w={windowWidth > 1120 ? '550px' : '100%'}
          maxW="container.form"
        >
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
              Create a New Password
            </SecondaryText>
            <Text color="#5B5B5B">
              Please enter a new password to reset your password.
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

                    <Field
                      label="Confirmation Password: "
                      name="confirmPassword"
                      leftIcon={PasswordIcon}
                      placeholder="*********"
                      component={CNTextFormField}
                      type="password"
                    />
                  </VStack>

                  <PrimaryButton
                    mt="35px"
                    borderRadius="8px"
                    w="100%"
                    _hover={{ bg: '#000000' }}
                    isLoading={loading ? true : false}
                    type="submit"
                  >
                    Reset Password
                  </PrimaryButton>
                </Form>
              )}
            </Formik>
            <SecondaryText pt="15px" pl="5px">
              Don&apos;t have an account yet?
              <Link pl="5px" fontWeight="bold" color="#002A97" href="/register">
                Register here
              </Link>
            </SecondaryText>
          </Container>
        </Container>
      </motion.div>
    </VStack>
  );
};

export default ForgotPassForm;
