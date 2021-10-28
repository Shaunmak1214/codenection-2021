import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

import { InfoOutlineIcon } from '@chakra-ui/icons';
import { FormLabel, Text, Tooltip, useToast } from '@chakra-ui/react';
import { VStack, Flex } from '@chakra-ui/layout';
import {
  CNTextFormField,
  CNSelectFormField,
  MutedButton,
  PrimaryButton,
  CNRadio,
} from '../../atoms';
import { CNModal } from '../../molecules';

import { useDispatch } from 'react-redux';
import { UPDATE } from '../../../reducers/authSlice';

import store from '../../../store';
import authTypes from '../../../types/auth.types';
import { useAxios, useWindowSize } from '../../../hooks';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateTeamModal = ({ isOpen, onClose, ...props }: ModalProps) => {
  const authStore: authTypes = store.getState().auth;
  const dispatch = useDispatch();
  const toast = useToast();

  // eslint-disable-next-line
  const [windowWidth, windowHeight] = useWindowSize();

  const createTeamSchema = yup.object({
    teamName: yup
      .string()
      .max(35, 'Team name must be less than 35 characters')
      .required('Team name is required'),
    hackerrankUsername: yup
      .string()
      .max(35, 'Username must be less than 35 characters')
      .required('Username is required'),
    contactInfo: yup
      .string()
      .max(125, 'Contact info must be less than 35 characters')
      .required('Contact info is required'),
    visible: yup.string().required('Team Visibility is required'),
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
        console.log(err);
        toast({
          title: 'Failed to create team',
          description: err.data.message,
          status: 'error',
          position: 'top-right',
          duration: 90000,
          isClosable: true,
        });
      } else {
        console.log(data);
        toast({
          title: 'Create Team Success',
          description: 'You have successfully created the team',
          status: 'success',
          position: 'top-right',
          duration: 10000,
          isClosable: true,
        });
        dispatch(
          UPDATE({
            ...authStore.user,
            permission_level: 5,
            team_id: data.data!.id,
          }),
        );
        onClose();
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
      centerSpacing={false}
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
          hackerrankUsername: '',
          contactInfo: '',
          visible: '',
        }}
        onSubmit={(data) => {
          let teamData = {
            team_name: data.teamName,
            is_internal: authStore.user?.email.includes('mmu.edu.my')
              ? data.is_internal
              : false,
            is_external: data.is_external,
            hackerrank_username: data.hackerrankUsername,
            contact_info: data.contactInfo,
            user_id: authStore!.user!.id,
            visible: data.visible,
          };

          createTeam(teamData);
        }}
      >
        {(props) => (
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
                      defaultSelected={true}
                      name="is_external"
                      component={CNSelectFormField}
                    />

                    {props!.values!.is_internal === false &&
                    props!.values!.is_external === false ? (
                      <Text
                        fontSize="sm"
                        color="#E53E3E"
                        fontWeight="500"
                        mt={4}
                      >
                        Please select at least 1 event
                      </Text>
                    ) : (
                      <></>
                    )}
                  </>
                ) : (
                  <>
                    <FormLabel>Select Event: </FormLabel>
                    <Field
                      display={
                        <Flex justifyContent="flex-start">
                          Open Category (Open to all universities including MMU)
                        </Flex>
                      }
                      name="is_external"
                      defaultSelected={true}
                      disabled={true}
                      onDisabledClick={() => {
                        toast({
                          title: 'Failed to de-select',
                          description: 'At least 1 event have to be selected',
                          status: 'warning',
                          position: 'top-right',
                          duration: 5000,
                          isClosable: true,
                        });
                      }}
                      component={CNSelectFormField}
                    />
                  </>
                )}
              </VStack>

              <Field
                name="visible"
                label="Team Visibility:"
                placeholder="Team Visibility"
                options={[
                  {
                    label: 'Public',
                    value: 'public',
                  },
                  {
                    label: 'Private',
                    value: 'private',
                  },
                ]}
                component={CNRadio}
              />

              <Field
                type="string"
                name="teamName"
                label="Team Name:"
                placeholder="Team Name"
                component={CNTextFormField}
              />

              <Field
                type="string"
                name="hackerrankUsername"
                label="HackerRank Username:"
                placeholder="xxx"
                tooltip={
                  <Tooltip
                    hasArrow
                    label="Your hackerrank username will be used to do linking stuff"
                    fontSize="md"
                  >
                    <InfoOutlineIcon />
                  </Tooltip>
                }
                component={CNTextFormField}
              />

              <Field
                type="string"
                name="contactInfo"
                label="Contact Information:"
                placeholder="Please contact me via discord: qwe#4001"
                component={CNTextFormField}
              />

              <Flex
                flexDir={['column-reverse', 'column-reverse', 'row']}
                justifyContent={'flex-end'}
                alignSelf="flex-end"
                w="100%"
                pt="15px"
                mt="15px"
              >
                <MutedButton onClick={onClose}>Cancel</MutedButton>
                <PrimaryButton
                  type="submit"
                  ml={[0, 0, '20px']}
                  mb={['20px', '20px', 0]}
                  border="none"
                  borderRadius="5px"
                  w={['100%', '100%', 'auto']}
                  disabled={
                    props!.values!.is_internal === false &&
                    props!.values!.is_external === false
                      ? true
                      : false
                  }
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

React.memo(CreateTeamModal);

CreateTeamModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CreateTeamModal;
