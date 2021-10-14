import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';

import { FormLabel, Text } from '@chakra-ui/react';
import { VStack, Flex } from '@chakra-ui/layout';

import { CNTextFormField, CNSelectFormField } from '../../atoms';
import { CNModal } from '../../molecules';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateTeamModal = ({ isOpen, onClose, ...props }: ModalProps) => {
  return (
    <CNModal blur modalIsOpen={isOpen} onClose={onClose} {...props}>
      <Flex w="100%" justifyContent="flex-start">
        <Text fontSize="35px" fontWeight="600">
          Create Team
        </Text>
      </Flex>

      <Formik
        initialValues={{
          name: '',
          teamName: '',
          hackerrankUsername: '',
        }}
        onSubmit={(data) => console.log(data)}
      >
        {() => (
          <Form style={{ width: '100%' }}>
            <VStack spacing={7} w="100%">
              <VStack spacing={2} alignItems="flex-start" w="100%">
                <FormLabel>Select Event: </FormLabel>
                <Field
                  display={
                    <Flex justifyContent="flex-start">
                      Closed Category (Open to MMU only)
                    </Flex>
                  }
                  name="event"
                  value="closed"
                  component={CNSelectFormField}
                />
                <Field
                  display={
                    <Flex justifyContent="flex-start">
                      Open Category (Open to all universities including MMU)
                    </Flex>
                  }
                  name="event"
                  value="open"
                  component={CNSelectFormField}
                />
              </VStack>

              <Field
                type="string"
                name="teamName"
                label="Team Name:"
                placeholder="Team Name"
                component={CNTextFormField}
              />

              <Field
                type="string"
                label="Hackerrank Username:"
                name="hackerrankUsername"
                placeholder=""
                component={CNTextFormField}
              />
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
