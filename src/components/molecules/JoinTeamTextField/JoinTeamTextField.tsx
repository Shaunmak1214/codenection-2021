import React from 'react';
import { PrimaryButton } from '../../atoms';
import { CNTextFormField } from '../../atoms';
import { HStack } from '@chakra-ui/layout';
import { Field } from 'formik';
const JoinTeamTextField: React.FC = () => {
  return (
    <HStack
      w="100%"
      d="flex"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <Field
        name="teamCode"
        label=""
        placeholder="Team Code"
        border="none"
        backgroundColor="white"
        w="100%"
        borderRadius="20px"
        py="28px"
        component={CNTextFormField}
      />

      <PrimaryButton
        d="flex"
        position="absolute"
        top="18px"
        right="10px"
        w="150px"
        borderRadius="12px"
        border="none"
        bgColor="#50C0D9"
        padding="10px 10px"
        justifyContent="center"
        alignItems="center"
        height="35px !important"
        fontSize="14px"
        _hover={{ bg: '#147186' }}
        zIndex="49"
      >
        Join Team
      </PrimaryButton>
    </HStack>
  );
};

export default JoinTeamTextField;
