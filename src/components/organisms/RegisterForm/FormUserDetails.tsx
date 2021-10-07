import React from 'react';
import { VStack, Container, Box } from '@chakra-ui/layout';
import { Text, Link, Image } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { CNTextFormField, PrimaryButton, SecondaryText } from '../../atoms';
import { EmailIcon, PasswordIcon, HomeIcon } from '../../../assets';
import * as yup from 'yup';
import { motion } from 'framer-motion';

interface MyFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

interface Props {
  nextStep: () => void;
}

const FormUserDetails = ({ nextStep }: Props) => {
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
              onSubmit={() => console.log('submitted')}
            >
              {() => (
                <Form>
                  <VStack spacing={8}>
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
                  </VStack>
                  <PrimaryButton
                    mt="35px"
                    borderRadius="8px"
                    w="100%"
                    _hover={{ bg: '#000000' }}
                    onClick={continueNext}
                  >
                    Next
                  </PrimaryButton>
                </Form>
              )}
            </Formik>
            <SecondaryText pt="15px" pl="5px">
              Already have an account?{' '}
              <Link fontWeight="bold" color="#002A97">
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
