/* eslint-disabled */
// @ts-nocheck

import React from 'react';
import { PrimaryButton } from '../../atoms';

import { Center, VStack, Container, HStack } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { CNTextFormField, SecondaryText } from '../../atoms';
import { EmailIcon, PasswordIcon } from '../../../assets';
import * as yup from 'yup';
import { motion } from 'framer-motion';

interface Props {
  nextStep: () => void;
  prevStep: () => void;
}

interface MyFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

const FormPersonalDetails = ({ nextStep, prevStep }: Props) => {
  const continueNext = (e: any) => {
    e.preventDefault();
    nextStep();
  };

  const schema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
    confirmPassword: yup.string().required(),
  });
  const initialValues: MyFormValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };
  return (
    <Center h="100vh" w="50%">
      <motion.div
        initial={{ opacity: 0, x: 75 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Container w="550px" maxW="container.form">
          <Container>
            <Text color="#5B5B5B">Step 2</Text>
            <SecondaryText fontWeight="bold" fontSize="4xl">
              Build your profile
            </SecondaryText>
            <Text color="#5B5B5B">
              Setting up a profile to represent yourself.
            </Text>
          </Container>

          <Container w="100%" py="30px">
            <Formik
              validationSchema={schema}
              initialValues={initialValues}
              onSubmit={() => console.log('submitted')}
            >
              {() => (
                <Form>
                  <VStack>
                    <Field
                      label="Student Email: "
                      name="email"
                      leftIcon={EmailIcon}
                      component={CNTextFormField}
                    />
                    <Field
                      label="Password: "
                      name="password"
                      leftIcon={PasswordIcon}
                      component={CNTextFormField}
                      type="password"
                    />
                    <Field
                      label="Confirmation Password: "
                      name="confirmPassword"
                      leftIcon={PasswordIcon}
                      component={CNTextFormField}
                      type="password"
                    />
                  </VStack>
                  <HStack mt="35px">
                    <PrimaryButton
                      borderRadius="8px"
                      w="100%"
                      _hover={{ bg: '#000000' }}
                      onClick={prevStep}
                    >
                      Back
                    </PrimaryButton>
                    <PrimaryButton
                      borderRadius="8px"
                      w="100%"
                      _hover={{ bg: '#000000' }}
                      onClick={continueNext}
                    >
                      Next
                    </PrimaryButton>
                  </HStack>
                </Form>
              )}
            </Formik>
          </Container>
        </Container>
      </motion.div>
    </Center>
  );
};

export default FormPersonalDetails;
