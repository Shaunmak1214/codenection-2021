/* eslint-disabled */
// @ts-nocheck

import React from 'react';
import * as yup from 'yup';
import { motion } from 'framer-motion';
import { Formik, Form, Field } from 'formik';

import { Text, Image } from '@chakra-ui/react';
import { VStack, Container, HStack, Box, SimpleGrid } from '@chakra-ui/layout';

import {
  CNTextFormField,
  SecondaryText,
  PrimaryButton,
  // CNSelectFormField,
  CNSelectDropdownField,
} from '../../atoms';

import { BackIcon } from '../../.././assets';
interface Props {
  nextStep: () => void;
  prevStep: () => void;
}

interface MyFormValues {
  dob: string;
  gender: string;
  citizenship: string;
  noiu: string;
  major: string;
  educationLevel: string;
  codingProf: string;
}

// eslint-disable-next-line
const FormPersonalDetails = ({ nextStep, prevStep }: Props) => {
  const [CNData, setCNData] = React.useState({});

  const updateValues = (name: any, value: any) => {
    setCNData({
      ...CNData,
      [name]: value,
    });
  };

  // eslint-disable-next-line
  const schema = yup.object({
    dob: yup.string().min(3).max(60).required(),
    noiu: yup.string().min(3).max(60).required(),
    major: yup.string().min(3).max(60).required(),
    gender: yup.string().min(3).max(60).required(),
    citizenship: yup.string().min(3).max(60).required(),
    educationLevel: yup.string().min(3).max(60).required(),
    codingProf: yup.string().min(3).max(60).required(),
  });

  const initialValues: MyFormValues = {
    dob: '',
    gender: '',
    citizenship: '',
    noiu: '',
    major: '',
    educationLevel: '',
    codingProf: '',
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
            <Box
              boxShadow="0px 4px 10px rgba(159, 159, 159, 0.25)"
              borderRadius="10px"
              w="35px"
              h="35px"
              d="flex"
              justifyContent="center"
              alignItems="center"
              my="50px"
              cursor="pointer"
              onClick={prevStep}
              _hover={{
                transform: 'scale(1.1)',
                transition: 'all .3s ease-in-out',
              }}
            >
              <Image src={BackIcon} ml="-2px" />
            </Box>
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
              // validationSchema={schema}
              initialValues={initialValues}
              validator={() => {}}
              onSubmit={(data) => {
                let mergedData = { ...data, ...CNData };
                console.log(mergedData);
              }}
            >
              {(props) => (
                // eslint-disable-next-line
                <Form>
                  {/* {console.log(props)} */}
                  <VStack spacing={8}>
                    <SimpleGrid
                      columns={3}
                      spacing={4}
                      w="100%"
                      alignItems="center"
                    >
                      <Field
                        label="Date of birth "
                        name="dob"
                        px="3"
                        py="0"
                        borderRadius="8px"
                        placeholder="DD / MM / YY"
                        type="string"
                        component={CNTextFormField}
                      />
                      <Field
                        label="Gender:"
                        name="gender"
                        placeholder="Select"
                        options={[
                          {
                            label: 'Male',
                            value: 'male',
                          },
                          {
                            label: 'female',
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
                        onSelect={(name, value) => {
                          updateValues(name, value);
                        }}
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
                        onSelect={(name, value) => {
                          updateValues(name, value);
                        }}
                        component={CNSelectDropdownField}
                      />
                    </SimpleGrid>

                    <Field
                      label="Name of institution/university: "
                      name="noiu"
                      placeholder="Multimedia University"
                      component={CNTextFormField}
                    />
                    <Field
                      label="Field Major: "
                      name="major"
                      placeholder="Computer Science/Data Science/Artificial Intelligence"
                      component={CNTextFormField}
                    />
                    <Field
                      label="Level of education: "
                      name="educationLevel"
                      placeholder="Selelct level of education"
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
                      onSelect={(name, value) => {
                        updateValues(name, value);
                      }}
                      component={CNSelectDropdownField}
                    />
                    <Field
                      label="Coding proficiency: "
                      name="codingProf"
                      placeholder="Select coding proficiency"
                      options={[
                        {
                          label: 'Beginner',
                          value: 'beginner',
                        },
                        {
                          label: 'Intermediate',
                          value: 'intermediate',
                        },
                        {
                          label: 'Expert',
                          value: 'expert',
                        },
                      ]}
                      onSelect={(name, value) => {
                        updateValues(name, value);
                      }}
                      component={CNSelectDropdownField}
                    />
                  </VStack>
                  <HStack mt="50px" mb="50px">
                    <PrimaryButton
                      borderRadius="8px"
                      w="100%"
                      _hover={{ bg: '#000000' }}
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        //eslint-disable-next-line
                        props.submitForm();
                        // nextStep();
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
