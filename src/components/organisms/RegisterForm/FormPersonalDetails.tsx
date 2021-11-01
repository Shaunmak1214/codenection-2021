/* eslint-disabled */
// @ts-nocheck

import React, { useState } from 'react';
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
  CNDatePicker,
} from '../../atoms';

import { useAxios, useWindowSize } from '../../../hooks/';
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
  clearReg: () => void;
  formStore: any;
  password: any;
}

// eslint-disable-next-line
const FormPersonalDetails = ({
  nextStep,
  prevStep,
  updateReg,
  clearReg,
  // eslint-disable-next-line
  formStore,
  password,
}: Props) => {
  const dispatch = useDispatch();
  const [formInput, setFormInput] = useState<MyFormValues>({
    full_name: formStore!.register_state.full_name,
    university: formStore!.register_state.university,
    field_major: formStore!.register_state.field_major,
    dob: formStore!.register_state.dob,
    sex: formStore!.register_state.sex,
    citizenship: formStore!.register_state.citizenship,
    education_level: formStore!.register_state.education_level,
    coding_prof: formStore!.register_state.coding_prof,
  });
  // eslint-disable-next-line
  const [windowWidth, windowHeight] = useWindowSize();

  const handleOnChange = (e: any) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  // eslint-disable-next-line
  const { loading: signUpLoading, fetch } = useAxios(
    { url: '/auth/signup', method: 'POST' },
    (err, data) => {
      if (err) {
        toast({
          title: 'Sign Up Failed',
          description: err.data.message,
          status: 'error',
          position: 'top-right',
          duration: 90000,
          isClosable: true,
        });
      } else {
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
    // eslint-disable-next-line
    (err, data) => {
      if (err) {
        toast({
          title: 'Verification email not sent',
          description: err.data.message,
          status: 'error',
          position: 'top-right',
          duration: 90000,
          isClosable: true,
        });
      } else {
        nextStep();
      }
    },
  );

  const toast = useToast();

  const schema = yup.object({
    full_name: yup.string().required('Full name is a required field'),
    dob: yup
      .string()
      .min(3)
      .max(60)
      .required('Date of birth is a required field'),
    university: yup
      .string()
      .min(1)
      .max(60)
      .required('Name of institution/university is a required field'),
    field_major: yup
      .string()
      .min(1)
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
    full_name: formStore!.register_state.full_name,
    dob: formStore!.register_state.dob,
    sex: formStore!.register_state.sex,
    citizenship: formStore!.register_state.citizenship,
    university: formStore!.register_state.university,
    field_major: formStore!.register_state.field_major,
    education_level: formStore!.register_state.education_level,
    coding_prof: formStore!.register_state.coding_prof,
  };

  return (
    <VStack h="100%" w={windowWidth > 1120 ? '50%' : '100%'}>
      <motion.div
        initial={{ opacity: 0, x: 75 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Container
          w={windowWidth > 1120 ? '550px' : '100%'}
          maxW="container.form"
        >
          <Container>
            <BoxIcons
              icon={BackIcon}
              onClick={() => {
                updateReg({
                  full_name: formInput.full_name,
                  university: formInput.university,
                  field_major: formInput.field_major,
                  dob: formInput.dob,
                  sex: formInput.sex,
                  citizenship: formInput.citizenship,
                  education_level: formInput.education_level,
                  coding_prof: formInput.coding_prof,
                });

                prevStep();
              }}
              backIcon
            />

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
                fetch({
                  email: formStore.register_state.email,
                  password: password,
                  ...data,
                });
                clearReg();
              }}
              enableReinitialize
            >
              {(props) => (
                // eslint-disable-next-line
                <Form>
                  <VStack spacing={8}>
                    <Field
                      label="Full Name "
                      name="full_name"
                      placeholder=""
                      value={formInput.full_name}
                      component={CNTextFormField}
                      customLabel={
                        <Text fontSize="md" color="#1A202C">
                          Full Name <span style={{ color: 'red' }}>*</span>
                        </Text>
                      }
                      onChange={(e: any) => {
                        handleOnChange(e);
                        // eslint-disable-next-line
                        props.setFieldValue('full_name', e.target.value);
                      }}
                    />
                    <SimpleGrid
                      columns={[1, 2, 3]}
                      spacing={4}
                      w="100%"
                      alignItems="flex-start"
                    >
                      <Field
                        label="Date of birth "
                        formInputName="dob"
                        name="dob"
                        px="3"
                        py="0"
                        borderRadius="8px"
                        placeholderText="DD / MM / YY"
                        type="string"
                        borderColor="#E2E8F0 !important"
                        value={Date.parse(formInput.dob)}
                        // eslint-disable-next-line
                        selectedDate={Date.parse(props.values.dob)}
                        component={CNDatePicker}
                        formInput={formInput}
                        setFormInput={setFormInput}
                        customLabel={
                          <Text fontSize="md" color="#1A202C">
                            Date of birth{' '}
                            <span style={{ color: 'red' }}>*</span>
                          </Text>
                        }
                      />
                      <Field
                        label="Gender:"
                        name="sex"
                        placeholder={
                          formInput.sex === '' ? 'Select' : formInput.sex
                        }
                        options={[
                          {
                            label: 'Male',
                            value: 'Male',
                          },
                          {
                            label: 'Female',
                            value: 'Female',
                          },
                          {
                            label: 'Others',
                            value: 'Others',
                          },
                          {
                            label: 'Rather not say',
                            value: 'Not-Say',
                          },
                        ]}
                        value={formInput.sex}
                        formInput={formInput}
                        setFormInput={setFormInput}
                        component={CNSelectDropdownField}
                        customLabel={
                          <Text fontSize="md" color="#1A202C">
                            Gender <span style={{ color: 'red' }}>*</span>
                          </Text>
                        }
                      />
                      <Field
                        label="Citizenship:"
                        name="citizenship"
                        placeholder={
                          formInput.citizenship === ''
                            ? 'Select'
                            : formInput.citizenship
                        }
                        options={[
                          {
                            label: 'Malaysian',
                            value: 'Malaysian',
                          },
                          {
                            label: 'International',
                            value: 'International',
                          },
                        ]}
                        value={formInput.citizenship}
                        customLabel={
                          <Text fontSize="md" color="#1A202C">
                            Citizenship <span style={{ color: 'red' }}>*</span>
                          </Text>
                        }
                        formInput={formInput}
                        setFormInput={setFormInput}
                        component={CNSelectDropdownField}
                      />
                    </SimpleGrid>

                    <Field
                      label="Name of institution/university: "
                      name="university"
                      placeholder="Multimedia University"
                      component={CNTextFormField}
                      value={formInput.university}
                      onChange={(e: any) => {
                        handleOnChange(e);
                        // eslint-disable-next-line
                        props.setFieldValue('university', e.target.value);
                      }}
                      customLabel={
                        <Text fontSize="md" color="#1A202C">
                          Name of institution/university{' '}
                          <span style={{ color: 'red' }}>*</span>
                        </Text>
                      }
                    />
                    <Field
                      label="Field Major: "
                      name="field_major"
                      placeholder="Computer Science/Data Science/Artificial Intelligence"
                      component={CNTextFormField}
                      value={formInput.field_major}
                      onChange={(e: any) => {
                        handleOnChange(e);
                        // eslint-disable-next-line
                        props.setFieldValue('field_major', e.target.value);
                      }}
                      customLabel={
                        <Text fontSize="md" color="#1A202C">
                          Field Major <span style={{ color: 'red' }}>*</span>
                        </Text>
                      }
                    />
                    <Field
                      label="Level of education: "
                      name="education_level"
                      placeholder={
                        formInput.education_level === ''
                          ? 'Selelct level of education'
                          : formInput.education_level === 'A-level'
                          ? 'A" level'
                          : formInput.education_level === 'Diploma'
                          ? 'Diploma/Advanced Diploma'
                          : formInput.education_level === 'Degree'
                          ? 'Bachelor"s degree'
                          : formInput.education_level === 'Master'
                          ? 'Master/PHD'
                          : formInput.education_level
                      }
                      options={[
                        {
                          label: `A' level`,
                          value: 'A-level',
                        },
                        {
                          label: 'Pre-U',
                          value: 'Pre-u',
                        },
                        {
                          label: 'Diploma/Advanced Diploma',
                          value: 'Diploma',
                        },
                        {
                          label: `Bachelor's degree`,
                          value: 'Degree',
                        },
                        {
                          label: 'Master/PHD',
                          value: 'Master',
                        },
                      ]}
                      component={CNSelectDropdownField}
                      value={formInput.education_level}
                      formInput={formInput}
                      setFormInput={setFormInput}
                      customLabel={
                        <Text fontSize="md" color="#1A202C">
                          Level of education{' '}
                          <span style={{ color: 'red' }}>*</span>
                        </Text>
                      }
                    />

                    <Field
                      label="Coding proficiency: "
                      name="coding_prof"
                      placeholder={
                        formInput.coding_prof === ''
                          ? 'Select coding proficiency'
                          : formInput.coding_prof
                      }
                      options={[
                        {
                          label: 'Novice',
                          value: 'Novice',
                        },
                        {
                          label: 'Beginner',
                          value: 'Beginner',
                        },
                        {
                          label: 'Intermediate',
                          value: 'Intermediate',
                        },
                        {
                          label: 'Skillful',
                          value: 'Skillful',
                        },
                        {
                          label: 'Expert',
                          value: 'Expert',
                        },
                      ]}
                      component={CNSelectDropdownField}
                      value={formInput.coding_prof}
                      formInput={formInput}
                      setFormInput={setFormInput}
                      customLabel={
                        <Text fontSize="md" color="#1A202C">
                          Coding proficiency{' '}
                          <span style={{ color: 'red' }}>*</span>
                        </Text>
                      }
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
