/* eslint-disable react/no-children-prop */
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
} from '@chakra-ui/react';
import { ShowIcon, HideIcon } from '../../../assets';
import PropTypes from 'prop-types';

import React from 'react';

interface Props {
  label: string;
  leftIcon?: string;

  field: any;
  form: any;
  type?: string;
}

const CNTextFormField = ({ field, label, leftIcon, type, ...props }: Props) => {
  const textRef = React.useRef<any>(null);
  const imgRef = React.useRef<any>(null);
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
      <FormControl w="100%">
        <FormLabel>{label}</FormLabel>
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
          {type === 'password' && (
            <InputRightElement
              pt="8px"
              pr="10px"
              children={<Image ref={imgRef} src={ShowIcon} />}
              onClick={handleClick}
            />
          )}
        </InputGroup>

        <FormErrorMessage></FormErrorMessage>
      </FormControl>
    </VStack>
  );
};

CNTextFormField.propTypes = {
  field: PropTypes.any,
  label: PropTypes.any,
  leftIcon: PropTypes.string,

  type: PropTypes.string,
};

export default CNTextFormField;
