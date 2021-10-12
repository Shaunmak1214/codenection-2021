import React from 'react';
import { VStack, Container, HStack } from '@chakra-ui/layout';
import { Text, Link, Image } from '@chakra-ui/react';
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
interface MyFormValues {
  email: string;
  password: string;
  confirmPassword: string;
  emailCode: string;
}

const ResetPasswordForm = () => {
  const schema = yup.object({
    email: yup.string().min(3).max(60).required('Email is a required field'),

    password: yup
      .string()
      .min(3)
      .max(60)
      .required('Password is a required field'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Password not match')
      .required('Confirm Password is a required field'),
    emailCode: yup
      .string()
      .min(3)
      .max(60)
      .required('Email Verification is a required field'),
  });
  const initialValues: MyFormValues = {
    email: '',
    password: '',
    confirmPassword: '',
    emailCode: '',
  };
  return (
    <VStack h="100%" w="50%">
      <motion.div
        initial={{ opacity: 0, x: -75 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Container w="550px" maxW="container.form" py="25px">
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

                    <Field
                      label="Confirmation Password: "
                      name="confirmPassword"
                      leftIcon={PasswordIcon}
                      placeholder="*********"
                      component={CNTextFormField}
                      type="password"
                    />

                    <Field
                      label="Email Verification Code: "
                      name="emailCode"
                      leftIcon={PasswordIcon}
                      placeholder="*********"
                      component={CNTextFormField}
                      type="password"
                      sendCodeBtn
                    />
                  </VStack>

                  <PrimaryButton
                    mt="35px"
                    borderRadius="8px"
                    w="100%"
                    _hover={{ bg: '#000000' }}
                    type="submit"
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
