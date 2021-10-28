import React, { useEffect, useState } from 'react';
import { CNModal } from '../../molecules';
import { useAxios } from '../../../hooks';
import store from '../../../store';
import { useToast, VStack, HStack, Text } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { CNTextFormField, PrimaryButton } from '../../atoms';

import * as yup from 'yup';
interface Props {
  isOpen: boolean;
}

interface MyFormValues {
  university: string;
}
const DomainVerifyModal = ({ isOpen }: Props) => {
  const authStore = store.getState().auth;
  const toast = useToast();

  const [checkExists, setCheckExists] = useState(false);

  const schema = yup.object({
    university: yup
      .string()
      .min(3)
      .max(60)
      .required('Name of institution/university is a required field'),
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
            description: err.data.message,
            status: 'error',
            duration: 2000,
            isClosable: true,
          });
        } else {
          toast({
            title: 'Success',
            description: 'Domain verfication request has been sent',
            status: 'success',
            duration: 2000,
            isClosable: true,
          });
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
          console.log(err);
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

  const initialValues: MyFormValues = {
    university: authStore!.user!.university,
  };

  const domain = authStore!.user!.email.split('@')[1];

  return (
    <CNModal blur disableButton modalIsOpen={isOpen}>
      {checkExistsLoading ? (
        <h1>Loading</h1>
      ) : checkExists ? (
        <Text>Checking</Text>
      ) : (
        <>
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
                  <VStack spacing={9}>
                    <Field
                      label="Name of institution/university "
                      name="university"
                      placeholder="Multimedia University"
                      component={CNTextFormField}
                      // eslint-disable-next-line react/prop-types
                      value={props.values.university}
                      // eslint-disable-next-line react/prop-types
                      onChange={props.handleChange}
                    />
                    <HStack>
                      <Text>Domain</Text>
                      <Text>{domain}</Text>
                    </HStack>
                    <HStack>
                      <Text>afsd</Text>
                      <Text>{authStore!.user!.email}</Text>
                    </HStack>
                  </VStack>

                  <PrimaryButton
                    mt="35px"
                    borderRadius="8px"
                    w="100%"
                    _hover={{ bg: '#000000' }}
                    isLoading={requestDomainLoading}
                    type="submit"
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
