import React from 'react';
import { VStack, Container, Box, HStack } from '@chakra-ui/layout';
import { Text, Link, Image } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { CNTextFormField, PrimaryButton, SecondaryText } from '../../atoms';
import {
  EmailIcon,
  PasswordIcon,
  HomeIcon,
  CodeNectionLogo,
} from '../../../assets';
import * as yup from 'yup';
import { motion } from 'framer-motion';
interface MyFormValues {
  email: string;
  password: string;
}
const LoginForm = () => {
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
    <VStack h="100%" w="50%">
      <motion.div
        initial={{ opacity: 0, x: 75 }}
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
              <Box
                boxShadow="0px 4px 10px rgba(159, 159, 159, 0.25)"
                borderRadius="10px"
                w="50px"
                h="50px"
                d="flex"
                justifyContent="center"
                alignItems="center"
                cursor="pointer"
                onClick={() => (window.location.href = '/')}
              >
                <Image src={HomeIcon} />
              </Box>
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
                console.log(data);
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
                    <Link color="#002A97">Forgot Password?</Link>
                  </Box>

                  <PrimaryButton
                    mt="35px"
                    borderRadius="8px"
                    w="100%"
                    _hover={{ bg: '#000000' }}
                    type="submit"
                  >
                    Login
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

export default LoginForm;