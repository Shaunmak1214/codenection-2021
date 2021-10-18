import React from 'react';
import { HStack } from '@chakra-ui/layout';

import { PrimaryButton } from '../../atoms';
import { CNTextFormField } from '../../atoms';

interface Props {
  isLoading?: boolean;
  onSubmit: () => void;
  label: string;
  leftIcon?: string;
  form?: any;
  field?: any;
  type?: string;
  placeholder?: string;
}

const JoinTeamBlock = ({
  onSubmit,
  isLoading = false,
  form,
  field,
  label,
  placeholder,
  type,
  ...props
}: Props) => {
  return (
    <HStack
      w="100%"
      d="flex"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <CNTextFormField
        form={form}
        field={field}
        label={label}
        placeholder={placeholder}
        type={type}
        {...props}
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
        isLoading={isLoading}
        onClick={onSubmit}
      >
        Join Team
      </PrimaryButton>
    </HStack>
  );
};

export default JoinTeamBlock;
