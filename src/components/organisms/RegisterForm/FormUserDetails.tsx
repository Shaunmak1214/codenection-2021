import React from 'react';
import { Center, VStack, Container } from '@chakra-ui/layout';
import { Text, Link } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { CNTextFormField, PrimaryButton, SecondaryText } from '../../atoms';
import { EmailIcon, PasswordIcon } from '../../../assets';
import * as yup from 'yup';

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
    <Center h="100vh" w="50%">
      <Container maxW="container.form">
        <Container>
          <Text color="#5B5B5B">Step 1</Text>
          <SecondaryText fontWeight="bold" fontSize="4xl">
            Create Your Account
          </SecondaryText>
          <Text color="#5B5B5B">
            Set up your CodeNector account to participate the contest
          </Text>
        </Container>
        <Container maxW="container.xl" w="100%" py="30px">
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
    </Center>
  );
};

export default FormUserDetails;
