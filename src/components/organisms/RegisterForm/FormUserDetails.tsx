import React, { useState } from 'react';
import { VStack, Container } from '@chakra-ui/layout';
import { Text, Link, useToast } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { motion } from 'framer-motion';

import { CNTextFormField, PrimaryButton, SecondaryText } from '../../atoms';
import { BoxIcons } from '../../molecules';

import { EmailIcon, PasswordIcon, HomeIcon } from '../../../assets';

import { useAxios } from '../../../hooks';
import { genericEmail } from '../../../data/emailData';

interface MyFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

interface reduxProps {
  email: string;
}

interface Props {
  nextStep: () => void;
  updateReg: (values: reduxProps) => void;
  formStore?: any;
  prev: any;
  setPassword?: any;
}

const FormUserDetails = (props: Props) => {
  const { nextStep, updateReg, formStore, prev } = props;

  const toast = useToast();
  const [formInput, setFormInput] = useState({
    email: formStore!.register_state.email,
  });

  const handleOnChange = (e: any) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };
  const continueNext = () => {
    nextStep();
  };

  const schema = yup.object({
    email: yup.string().min(3).max(60).required('Email is a required email'),

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
    email: formStore!.register_state.email,
    password: '',
    confirmPassword: '',
  };

  // eslint-disable-next-line
  const { loading: checkExistsLoading, fetch: checkExists } = useAxios(
    { url: `/user/exists/${formInput.email}`, method: 'GET' },
    (err, data) => {
      if (err) {
        if (err.status === 204) {
          continueNext();
        } else {
          toast({
            title: 'There"s an erorr while checking email',
            description: err.data.message,
            status: 'error',
            position: 'top-right',
            duration: 90000,
            isClosable: true,
          });
        }
      } else {
        toast({
          title: 'Email already existed',
          description: data.message,
          status: 'error',
          position: 'top-right',
          duration: 90000,
          isClosable: true,
        });
      }
    },
  );

  return (
    <VStack h="100%" w="50%">
      <motion.div
        initial={{ opacity: 0, x: prev ? -75 : 75 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Container w="550px" maxW="container.form">
          <Container>
            <BoxIcons
              icon={HomeIcon}
              onClick={() => (window.location.href = '/')}
            />

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
                });

                checkExists();
              }}
            >
              {(props) => (
                <Form>
                  <VStack spacing={8}>
                    <Field
                      value={formInput.email}
                      label="Student Email: "
                      name="email"
                      leftIcon={EmailIcon}
                      placeholder="xxxx@student.mmu.edu.my"
                      validate={(value: any) => {
                        if (value) {
                          if (value.includes('@')) {
                            let domain = value.split('@')[1];
                            if (genericEmail.includes(domain)) {
                              let error = 'Please use your student email';
                              return error;
                            }
                          }
                        }
                      }}
                      onChange={(e: any) => {
                        // debounced(e.target.value);
                        handleOnChange(e);
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
                    isLoading={checkExistsLoading}
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

React.memo(FormUserDetails);

export default FormUserDetails;
