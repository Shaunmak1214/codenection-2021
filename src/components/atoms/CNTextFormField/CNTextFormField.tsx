/* eslint-disable react/no-children-prop */
import React from 'react';
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Image,
  Box,
  HStack,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { getIn } from 'formik';

import { PrimaryButton } from '../../atoms';
import { ShowIcon, HideIcon } from '../../../assets';

interface Props {
  label: string;
  leftIcon?: string;
  form?: any;
  field?: any;
  type?: string;
  placeholder?: string;
  sendCodeBtn?: boolean;
  tooltip?: any;
}

const CNTextFormField = ({
  form,
  field,
  label,
  leftIcon,
  type,
  sendCodeBtn = false,
  tooltip,
  ...props
}: Props) => {
  const textRef = React.useRef<any>(null);
  const imgRef = React.useRef<any>(null);
  const errorText: string =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);
  const handleClick = () => {
    if (textRef.current!.type === 'password') {
      imgRef.current!.src = HideIcon;
      textRef.current!.type = 'text';
    } else if (textRef.current!.type === 'text') {
      imgRef.current!.src = ShowIcon;
      textRef.current!.type = 'password';
    }
  };

  return (
    <VStack w="100%">
      <FormControl w="100%" isInvalid={errorText ? true : false}>
        <HStack
          w="100%"
          pr="10px"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <FormLabel>{label}</FormLabel>
          {tooltip}
        </HStack>
        <InputGroup>
          {leftIcon && (
            <InputLeftElement
              ml="10px"
              pt="8px"
              children={<Image src={leftIcon} />}
            />
          )}

          <Input
            backgroundColor="#F5F5F5"
            pl={leftIcon && '50px'}
            py="23px"
            borderRadius="10px"
            type={type}
            ref={textRef}
            {...field}
            {...props}
          />
          {type === 'password' && sendCodeBtn ? (
            <InputRightElement
              pt="8px"
              pr="10px"
              children={
                <>
                  <Box d="flex" mr="100px">
                    <Image ref={imgRef} src={ShowIcon} />
                    <PrimaryButton
                      bg="#BBE7FF"
                      border="none"
                      borderRadius="8px"
                      color="#000000"
                      py="0"
                      px="8"
                      h="35px"
                      ml="30px"
                      _hover={{ border: 'none' }}
                    >
                      Send
                    </PrimaryButton>
                  </Box>
                </>
              }
              onClick={handleClick}
            />
          ) : type === 'password' ? (
            <InputRightElement
              pt="8px"
              pr="10px"
              children={<Image ref={imgRef} src={ShowIcon} />}
              onClick={handleClick}
            />
          ) : null}
        </InputGroup>

        <FormErrorMessage fontSize="sm">{errorText}</FormErrorMessage>
      </FormControl>
    </VStack>
  );
};

React.memo(CNTextFormField);

CNTextFormField.propTypes = {
  field: PropTypes.any,
  label: PropTypes.any,
  leftIcon: PropTypes.string,
  type: PropTypes.string,
  sendCodeBtn: PropTypes.bool,
};

export default CNTextFormField;
