/* eslint-disabled */
// @ts-nocheck

import React, { useEffect } from 'react';
import * as yup from 'yup';
import { motion } from 'framer-motion';
import { Formik, Form, Field } from 'formik';

import { Text, FormLabel, Image } from '@chakra-ui/react';
import { VStack, Container, HStack, Box, SimpleGrid } from '@chakra-ui/layout';

import {
  CNTextFormField,
  SecondaryText,
  PrimaryButton,
  CNSelectFormField,
  CNSelectDropdownField,
} from '../../atoms';

import { BackIcon } from '../../.././assets';
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
  // eslint-disable-next-line
  const [eventType, setEventType] = React.useState([]);

  const continueNext = (e: any) => {
    e.preventDefault();
    nextStep();
  };

  const schema = yup.object({
    dob: yup.number().required(),
    noiu: yup.string().required(),
    major: yup.string().required(),
  });
  const initialValues: MyFormValues = {};

  const onSelect = React.useCallback(
    (value, selected) => {
      setEventType((eventType) => {
        if (selected) {
          if (eventType.includes(value)) {
            return [...eventType];
          } else {
            return [...eventType, value];
          }
        } else {
          return eventType.filter((item) => item !== value);
        }
      });
    },
    [setEventType],
  );

  useEffect(() => {
    console.log(eventType);
  }, [eventType]);

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
              validationSchema={schema}
              initialValues={initialValues}
              onSubmit={() => console.log('submitted')}
            >
              {() => (
                <Form>
                  <Box w="100%" h="100%" py="2" borderRadius="8px">
                    <FormLabel>Select Event:</FormLabel>
                    <CNSelectFormField value="internal" onSelect={onSelect}>
                      <Text>Close Category (Open to MMU only)</Text>
                    </CNSelectFormField>
                    <CNSelectFormField value="external" onSelect={onSelect}>
                      <Text>
                        Open Category (Open to all universities including MMU)
                      </Text>
                    </CNSelectFormField>
                  </Box>
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
                        onSelect={(valueSelected) => {
                          console.log(valueSelected);
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
                        onSelect={(valueSelected) => {
                          console.log(valueSelected);
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
                      onSelect={(valueSelected) => {
                        console.log(valueSelected);
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
                      onSelect={(valueSelected) => {
                        console.log(valueSelected);
                      }}
                      component={CNSelectDropdownField}
                    />
                  </VStack>

                  <HStack mt="50px" mb="50px">
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
    </VStack>
  );
};

export default FormPersonalDetails;
