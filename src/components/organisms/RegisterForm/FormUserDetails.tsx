import React, { useState } from 'react';
import { VStack, Container } from '@chakra-ui/layout';
import { Text, Link } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { CNTextFormField, PrimaryButton, SecondaryText } from '../../atoms';
import { EmailIcon, PasswordIcon, HomeIcon } from '../../../assets';
import { BoxIcons } from '../../molecules';
import * as yup from 'yup';
import { motion } from 'framer-motion';
import { genericEmail } from '../../../data/emailData';

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
    email: '',
    password: '',
    confirmPassword: '',
  };

  return (
    <VStack h="100%" w="50%">
      <motion.div
        initial={{ opacity: 0, x: 75 }}
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
                      validate={(value: any) => {
                        if (value.includes('@')) {
                          let domain = value.split('@')[1];
                          if (genericEmail.includes(domain)) {
                            let error = 'Please use your student email';
                            return error;
                          }
                        }
                      }}
                      onChange={(e: any) => {
                        // debounced(e.target.value);
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
