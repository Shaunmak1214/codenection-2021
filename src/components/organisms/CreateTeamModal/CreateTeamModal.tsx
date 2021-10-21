import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

import { FormLabel, Text, useToast } from '@chakra-ui/react';
import { VStack, Flex } from '@chakra-ui/layout';
import {
  CNTextFormField,
  CNSelectFormField,
  MutedButton,
  PrimaryButton,
} from '../../atoms';
import { CNModal } from '../../molecules';

import { useDispatch } from 'react-redux';
import { UPDATE } from '../../../reducers/authSlice';

import store from '../../../store';
import authTypes from '../../../types/auth.types';
import { useAxios } from '../../../hooks';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateTeamModal = ({ isOpen, onClose, ...props }: ModalProps) => {
  const authStore: authTypes = store.getState().auth;
  const dispatch = useDispatch();
  const toast = useToast();
  const createTeamSchema = yup.object({
    teamName: yup
      .string()
      .max(35, 'Team name must be less than 35 characters')
      .required('Team name is required'),
  });

  // eslint-disable-next-line
  const { loading: createTeamLoading, fetch: createTeam } = useAxios(
    {
      url: '/team/',
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authStore.accessToken}`,
      },
    },
    (err, data) => {
      if (err) {
        toast({
          title: 'Failed to create team',
          // @ts-ignore
          description: err.data.message,
          status: 'error',
          position: 'top-right',
          duration: 90000,
          isClosable: true,
        });
      } else {
        toast({
          title: 'Create Team Success',
          // @ts-ignore
          description: 'You have successfully created the team',
          status: 'success',
          position: 'top-right',
          duration: 10000,
          isClosable: true,
        });
        dispatch(
          UPDATE({
            ...authStore.user,
            // @ts-ignore
            team_id: data.data.id,
          }),
        );

        setTimeout(() => {
          window.location.href = '/dashboard';
        }, 3000);
      }
    },
  );

  return (
    <CNModal
      disableButton
      blur
      modalIsOpen={isOpen}
      disableCloseButton={false}
      onClose={onClose}
      {...props}
    >
      <Flex w="100%" justifyContent="flex-start" mb="0px">
        <Text fontSize="35px" fontWeight="600">
          Create Team
        </Text>
      </Flex>

      <Formik
        validationSchema={createTeamSchema}
        initialValues={{
          teamName: '',
          is_internal: false,
          is_external: true,
        }}
        onSubmit={(data) => {
          let teamData = {
            team_name: data.teamName,
            is_internal: authStore.user?.email.includes('mmu.edu.my')
              ? data.is_internal
              : false,
            is_external: data.is_external,
            // @ts-ignore
            user_id: authStore.user.id,
          };

          createTeam(teamData);
        }}
      >
        {() => (
          <Form style={{ width: '100%' }}>
            <VStack spacing={7} w="100%">
              <VStack spacing={2} alignItems="flex-start" w="100%">
                {authStore.user?.email.includes('mmu.edu.my') ? (
                  <>
                    <FormLabel>Select Event: </FormLabel>
                    <Field
                      display={
                        <Flex justifyContent="flex-start">
                          Closed Category (Open to MMU only)
                        </Flex>
                      }
                      name="is_internal"
                      component={CNSelectFormField}
                    />
                    <Field
                      display={
                        <Flex justifyContent="flex-start">
                          Open Category (Open to all universities including MMU)
                        </Flex>
                      }
                      name="is_external"
                      component={CNSelectFormField}
                    />
                  </>
                ) : (
                  <></>
                )}
              </VStack>

              <Field
                type="string"
                name="teamName"
                label="Team Name:"
                placeholder="Team Name"
                component={CNTextFormField}
              />

              <Flex
                flexDir={['column', 'column', 'row']}
                justifyContent={'flex-end'}
                alignSelf="flex-end"
                w="100%"
                pt="15px"
                mt="15px"
              >
                <MutedButton onClick={onClose}>Cancel</MutedButton>
                <PrimaryButton
                  type="submit"
                  ml="20px"
                  border="none"
                  borderRadius="5px"
                  isLoading={createTeamLoading}
                  _hover={{ border: 'none', bg: '#000000' }}
                >
                  Create Team
                </PrimaryButton>
              </Flex>
            </VStack>
          </Form>
        )}
      </Formik>
    </CNModal>
  );
};

CreateTeamModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CreateTeamModal;
