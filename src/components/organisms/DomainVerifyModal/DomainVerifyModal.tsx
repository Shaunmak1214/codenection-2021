import React, { useEffect, useState } from 'react';
import {
  useToast,
  VStack,
  Text,
  Flex,
  Center,
  Spinner,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import Lottie from 'react-lottie';

import { CNTextFormField, PrimaryButton } from '../../atoms';
import { CNModal } from '../../molecules';
import { useAxios } from '../../../hooks';
import store from '../../../store';
import { Checking } from '../../../constants';

import * as yup from 'yup';
interface Props {
  isOpen: boolean;
}

interface MyFormValues {
  uni_name: string;
  email: string;
  domain: string;
}
const DomainVerifyModal = ({ isOpen }: Props) => {
  const authStore = store.getState().auth;
  const toast = useToast();

  const [checkExists, setCheckExists] = useState(false);

  const schema = yup.object({
    uni_name: yup
      .string()
      .min(3)
      .max(60)
      .required('Name of institution/university is a required field'),
    domain: yup.string().min(3).max(60).required('Domain is a required field'),
  });

  const { loading: requestDomainLoading, fetch: requestDomainVerify } =
    useAxios(
      {
        url: '/domain/',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${authStore!.accessToken}`,
        },
      },
      // eslint-disable-next-line
      (err, data) => {
        if (err) {
          toast({
            title: 'Unable to request domain verification',
            description: err.data.message || '',
            position: 'top-right',
            status: 'error',
            duration: 2000,
            isClosable: true,
          });
        } else {
          toast({
            title: 'Success',
            description: 'Domain verfication request has been sent',
            position: 'top-right',
            status: 'success',
            duration: 2000,
            isClosable: true,
          });

          setTimeout(() => {
            window.location.reload();
          }, 1200);
        }
      },
    );

  const { loading: checkExistsLoading, fetch: checkExistsCall } = useAxios(
    {
      url: `/domain/exists/${authStore!.user!.email}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${authStore!.accessToken}`,
      },
    },
    // eslint-disable-next-line
    (err, data) => {
      if (err) {
        if (err.status === 204) {
          setCheckExists(false);
        } else {
          toast({
            title: 'Unable to get domain verification',
            description: err.data.message || '',
            status: 'error',
            duration: 2000,
            isClosable: true,
          });
        }
      } else {
        if (data.status === 200) {
          setCheckExists(true);
        }
      }
    },
  );

  useEffect(() => {
    checkExistsCall();
    // eslint-disable-next-line
  }, []);

  const domainFromEmail = authStore!.user!.email.split('@')[1];

  const initialValues: MyFormValues = {
    uni_name: authStore!.user!.university,
    email: authStore!.user!.email,
    domain: domainFromEmail,
  };

  return (
    <CNModal blur disableButton centerSpacing={false} modalIsOpen={isOpen}>
      {checkExistsLoading ? (
        <Center py="20px">
          <Spinner />
        </Center>
      ) : checkExists ? (
        <Center>
          <VStack w="100%" h="100%">
            <Lottie
              options={Checking}
              height={125}
              width={125}
              style={{ marginTop: 5, marginBottom: 5 }}
            />
            <Text textAlign="center" fontSize="lg" mt="15px !important">
              Your email domain is still being screened
            </Text>
          </VStack>
        </Center>
      ) : (
        <>
          <Flex w="100%" justifyContent="flex-start" mb="15px">
            <Text fontSize="35px" fontWeight="600">
              Request Domain Verification
            </Text>
          </Flex>
          <Formik
            validationSchema={schema}
            initialValues={initialValues}
            onSubmit={(data) => {
              requestDomainVerify(data);
            }}
          >
            {(props) => (
              <Form>
                <>
                  <VStack spacing={7}>
                    <Field
                      label="Email"
                      name="email"
                      placeholder="email"
                      disabled={true}
                      component={CNTextFormField}
                      // eslint-disable-next-line react/prop-types
                      value={props.values.email}
                      // eslint-disable-next-line react/prop-types
                      onChange={props.handleChange}
                    />
                    <Field
                      label="Domain "
                      name="domain"
                      placeholder="Domain"
                      component={CNTextFormField}
                      // eslint-disable-next-line react/prop-types
                      value={props.values.domain}
                      // eslint-disable-next-line react/prop-types
                      onChange={props.handleChange}
                    />
                    <Field
                      label="Name of institution/university "
                      name="uni_name"
                      placeholder="Multimedia University"
                      component={CNTextFormField}
                      // eslint-disable-next-line react/prop-types
                      value={props.values.uni_name}
                      // eslint-disable-next-line react/prop-types
                      onChange={props.handleChange}
                    />
                  </VStack>

                  <PrimaryButton
                    mt="35px"
                    borderRadius="8px"
                    w="100%"
                    _hover={{ bg: '#000000' }}
                    isLoading={requestDomainLoading}
                    type="submit"
                    onClick={() => {
                      // eslint-disable-next-line
                      props.submitForm();
                    }}
                  >
                    Request Domain Verification
                  </PrimaryButton>
                </>
              </Form>
            )}
          </Formik>
        </>
      )}
    </CNModal>
  );
};

export default DomainVerifyModal;
