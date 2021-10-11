/* eslint-disabled */
// @ts-nocheck

import React from 'react';
import * as yup from 'yup';
import { motion } from 'framer-motion';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { LOGIN } from '../../../reducers/authSlice';

import { Text, useToast } from '@chakra-ui/react';
import { VStack, Container, HStack, SimpleGrid } from '@chakra-ui/layout';

import {
  CNTextFormField,
  SecondaryText,
  PrimaryButton,
  CNSelectDropdownField,
} from '../../atoms';

import useAxios from '../../../hooks/useAxios';
import { BoxIcons } from '../../molecules';
import { BackIcon } from '../../.././assets';

interface MyFormValues {
  full_name: string;
  dob: string;
  sex: string;
  citizenship: string;
  university: string;
  field_major: string;
  education_level: string;
  coding_prof: string;
}

interface Props {
  nextStep: () => void;
  prevStep: () => void;
  updateReg: (values: MyFormValues) => void;
  formStore: any;
}

// eslint-disable-next-line
const FormPersonalDetails = ({
  nextStep,
  prevStep,
  updateReg,
  // eslint-disable-next-line
  formStore,
}: Props) => {
  const dispatch = useDispatch();

  // eslint-disable-next-line
  const { loading: signUpLoading, fetch } = useAxios(
    { url: '/auth/signup', method: 'POST' },
    (err, data) => {
      if (err) {
        console.log(err);
        toast({
          title: 'Email already existed',
          description: err.data.message,
          status: 'error',
          position: 'top-right',
          duration: 90000,
          isClosable: true,
        });
      } else {
        console.log(data);
        dispatch(
          LOGIN({
            accessToken: data.data.token,
            user: data.data.newUser,
          }),
        );

        sendEmail({
          email: data.data.newUser.email,
        });
      }
    },
  );

  // eslint-disable-next-line
  const { loading: emailSendingLoading, fetch: sendEmail } = useAxios(
    { url: '/verify/', method: 'POST' },
    (err, data) => {
      if (err) {
        console.log(err);
        toast({
          title: 'Verification email not sent',
          description: err.data.message,
          status: 'error',
          position: 'top-right',
          duration: 90000,
          isClosable: true,
        });
      } else {
        console.log(data);
        nextStep();
      }
    },
  );

  const toast = useToast();

  const schema = yup.object({
    full_name: yup.string().required('Full name is required'),
    dob: yup
      .string()
      .min(3)
      .max(60)
      .required('Date of birth is a required field'),
    university: yup
      .string()
      .min(3)
      .max(60)
      .required('Name of institution/university is a required field'),
    field_major: yup
      .string()
      .min(3)
      .max(60)
      .required('Field Major is a required field'),
    sex: yup.string().min(3).max(60).required('Gender is a required field'),
    citizenship: yup
      .string()
      .min(3)
      .max(60)
      .required('Citizenship is a required field'),
    education_level: yup
      .string()
      .min(3)
      .max(60)
      .required('Education level is a required field'),
    coding_prof: yup
      .string()
      .min(3)
      .max(60)
      .required('Coding Proficiency is a required field'),
  });

  const initialValues: MyFormValues = {
    full_name: '',
    dob: '',
    sex: '',
    citizenship: '',
    university: '',
    field_major: '',
    education_level: '',
    coding_prof: '',
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
            <BoxIcons icon={BackIcon} onClick={prevStep} />

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
              onSubmit={(data) => {
                updateReg(data);
                console.log(formStore.register_state);
                fetch({
                  ...formStore.register_state,
                  ...data,
                });
              }}
            >
              {(props) => (
                // eslint-disable-next-line
                <Form>
                  <VStack spacing={8}>
                    <Field
                      label="Full Name "
                      name="full_name"
                      placeholder=""
                      component={CNTextFormField}
                    />
                    <SimpleGrid
                      columns={3}
                      spacing={4}
                      w="100%"
                      alignItems="flex-start"
                    >
                      <Field
                        label="Date of birth "
                        name="dob"
                        px="3"
                        py="0"
                        borderRadius="8px"
                        placeholder="DD / MM / YY"
                        component={CNTextFormField}
                      />
                      <Field
                        label="Gender:"
                        name="sex"
                        placeholder="Select"
                        options={[
                          {
                            label: 'Male',
                            value: 'male',
                          },
                          {
                            label: 'Female',
                            value: 'female',
                          },
                          {
                            label: 'Others',
                            value: 'others',
                          },
                          {
                            label: 'Rather not say',
                            value: 'not-say',
                          },
                        ]}
                        component={CNSelectDropdownField}
                      />
                      <Field
                        label="Citizenship:"
                        name="citizenship"
                        placeholder="Malaysian"
                        options={[
                          {
                            label: 'Malaysian',
                            value: 'malaysian',
                          },
                          {
                            label: 'International',
                            value: 'international',
                          },
                        ]}
                        component={CNSelectDropdownField}
                      />
                    </SimpleGrid>

                    <Field
                      label="Name of institution/university: "
                      name="university"
                      placeholder="Multimedia University"
                      component={CNTextFormField}
                    />
                    <Field
                      label="Field Major: "
                      name="field_major"
                      placeholder="Computer Science/Data Science/Artificial Intelligence"
                      component={CNTextFormField}
                    />
                    <Field
                      label="Level of education: "
                      name="education_level"
                      placeholder="Selelct level of education"
                      options={[
                        {
                          label: 'A" level',
                          value: 'a-level',
                        },
                        {
                          label: 'Pre-U',
                          value: 'pre-u',
                        },
                        {
                          label: 'Diploma/Advancd Diploma',
                          value: 'diploma',
                        },
                        {
                          label: 'Bachelor"s degree',
                          value: 'degree',
                        },
                        {
                          label: 'Master/PHD',
                          value: 'master',
                        },
                      ]}
                      component={CNSelectDropdownField}
                    />
                    <Field
                      label="Coding proficiency: "
                      name="coding_prof"
                      placeholder="Select coding proficiency"
                      options={[
                        {
                          label: 'Novice',
                          value: 'novice',
                        },
                        {
                          label: 'Beginner',
                          value: 'beginner',
                        },
                        {
                          label: 'Intermediate',
                          value: 'intermediate',
                        },
                        {
                          label: 'Skillful',
                          value: 'skillful',
                        },
                        {
                          label: 'Expert',
                          value: 'expert',
                        },
                      ]}
                      component={CNSelectDropdownField}
                    />
                  </VStack>
                  <HStack mt="50px" mb="80px">
                    <PrimaryButton
                      borderRadius="8px"
                      w="100%"
                      _hover={{ bg: '#000000' }}
                      type="submit"
                      isLoading={
                        signUpLoading || emailSendingLoading ? true : false
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        //eslint-disable-next-line
                        props.submitForm();
                      }}
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
    </VStack>
  );
};

export default FormPersonalDetails;
