import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

import { InfoOutlineIcon } from '@chakra-ui/icons';
import { Text, useToast, Tooltip } from '@chakra-ui/react';
import { VStack, Flex } from '@chakra-ui/layout';
import {
  CNTextFormField,
  MutedButton,
  PrimaryButton,
  CNRadio,
  CNSpacer,
} from '../../atoms';
import { CNModal } from '../../molecules';

import store from '../../../store';
import authTypes from '../../../types/auth.types';
import { useAxios } from '../../../hooks';

interface InitialValues {
  teamName: string;
  is_internal: boolean;
  is_external: boolean;
  hackerrankUsername: string;
  contactInfo: string;
  visible: string;
}

interface UpdatedTeam {
  team_name: string;
  hackerrank_username: string;
  visible: string;
  contact_info: string;
}

interface ModalProps {
  isOpen: boolean;
  initialValues: InitialValues;
  onClose: () => void;
  onUpdatedTeam?: (data: UpdatedTeam) => void;
}

const EditTeamModal = ({
  isOpen,
  initialValues,
  onClose,
  onUpdatedTeam,
  ...props
}: ModalProps) => {
  const authStore: authTypes = store.getState().auth;
  // const dispatch = useDispatch();
  const toast = useToast();
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
  const { loading: editTeamLoading, fetch: editTeam } = useAxios(
    {
      url: `/team/${authStore.user?.team_id}`,
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${authStore.accessToken}`,
      },
    },
    // eslint-disable-next-line
    (err, data) => {
      if (err) {
        toast({
          title: 'Failed to edit team',
          description: err.data.message,
          status: 'error',
          position: 'top-right',
          duration: 90000,
          isClosable: true,
        });
      } else {
        toast({
          title: 'Edit Team Success',
          description: 'You have successfully edited the team',
          status: 'success',
          position: 'top-right',
          duration: 10000,
          isClosable: true,
        });
        onClose();

        if (onUpdatedTeam) onUpdatedTeam(data.data.team);
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
          Edit Team
        </Text>
      </Flex>

      <CNSpacer size="3xs" />

      <Formik
        validationSchema={createTeamSchema}
        initialValues={initialValues}
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

          editTeam(teamData);
        }}
      >
        {(props) => (
          <Form style={{ width: '100%' }}>
            <VStack spacing={7} w="100%">
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
                defaultSelected={initialValues.visible}
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
                  isLoading={editTeamLoading}
                  _hover={{ border: 'none', bg: '#000000' }}
                >
                  Edit Team
                </PrimaryButton>
              </Flex>
            </VStack>
          </Form>
        )}
      </Formik>
    </CNModal>
  );
};

React.memo(EditTeamModal);

EditTeamModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EditTeamModal;
