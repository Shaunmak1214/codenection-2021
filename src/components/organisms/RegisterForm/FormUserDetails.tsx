import React, { useState } from 'react';
import { VStack, Container, Box } from '@chakra-ui/layout';
import { Text, Link, Image } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { CNTextFormField, PrimaryButton, SecondaryText } from '../../atoms';
import { EmailIcon, PasswordIcon, HomeIcon } from '../../../assets';
import * as yup from 'yup';
import { motion } from 'framer-motion';
import { useDebouncedCallback } from 'use-debounce';

import axios from 'axios';

interface MyFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

interface reduxProps {
  email: string;
  password: string;
}
interface Props {
  nextStep: () => void;
  updateReg: (values: reduxProps) => void;
  formStore: any;
}

const FormUserDetails = ({ nextStep, updateReg }: Props) => {
  const [emailInput, setEmailInput] = useState('');

  const continueNext = () => {
    nextStep();
  };

  const schema = yup.object({
    email: yup
      .string()
      .email('Please enter a valid email')
      .min(3)
      .max(60)
      .required('Email is a required email'),

    password: yup
      .string()
      .min(3)
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

  // Debounce callback
  const debounced = useDebouncedCallback(
    // function
    (value) => {
      if (value.includes('@')) {
        const emailDomain = value.split('@')[1];
        console.log(emailDomain);
        axios
          .get(
            `https://email-domain-verifier.herokuapp.com/getData?domain=${emailDomain}&type=name`,
          )
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    800,
  );

  return (
    <VStack h="100%" w="50%">
      <motion.div
        initial={{ opacity: 0, x: 75 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Container w="550px" maxW="container.form">
          <Container>
            <Box
              boxShadow="0px 4px 10px rgba(159, 159, 159, 0.25)"
              borderRadius="10px"
              w="40px"
              h="40px"
              d="flex"
              justifyContent="center"
              alignItems="center"
              my="50px"
              cursor="pointer"
              onClick={() => (window.location.href = '/')}
            >
              <Image src={HomeIcon} />
            </Box>
            <Text color="#5B5B5B">Step 1</Text>
            <SecondaryText fontWeight="bold" fontSize="4xl">
              Create Your Account
            </SecondaryText>
            <Text color="#5B5B5B">
              Set up your CodeNector account to participate the contest
            </Text>
          </Container>

          <Container w="100%" py="30px">
            <Formik
              validationSchema={schema}
              initialValues={initialValues}
              onSubmit={(data) => {
                updateReg({
                  email: data.email,
                  password: data.password,
                });
                continueNext();
              }}
            >
              {(props) => (
                <Form>
                  <VStack spacing={8}>
                    <Field
                      value={emailInput}
                      label="Student Email: "
                      name="email"
                      leftIcon={EmailIcon}
                      placeholder="xxxx@student.mmu.edu.my"
                      onChange={(e: any) => {
                        debounced(e.target.value);
                        setEmailInput(e.target.value);
                        // eslint-disable-next-line
                        props.setFieldValue('email', e.target.value);
                      }}
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
                    type="submit"
                  >
                    Next
                  </PrimaryButton>
                </Form>
              )}
            </Formik>
            <SecondaryText pt="15px" pl="5px">
              Already have an account?{' '}
              <Link fontWeight="bold" color="#002A97" href="/login">
                Log in
              </Link>
            </SecondaryText>
          </Container>
        </Container>
      </motion.div>
    </VStack>
  );
};

export default FormUserDetails;
