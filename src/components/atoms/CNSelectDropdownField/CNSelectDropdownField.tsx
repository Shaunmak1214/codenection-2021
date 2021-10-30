/* eslint-disable */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/form-control';
import { Select } from 'chakra-react-select';
import { getIn } from 'formik';

interface Props {
  label?: string;
  value?: string;
  field?: any;
  form?: any;
  formInput?: any;
  setFormInput?: any;
  name: string;
  updateReg: (values: any) => void;
}

const CNSelectDropdownField = ({
  field,
  form,
  label,
  value,
  formInput,
  setFormInput,
  name,
  ...props
}: Props) => {
  const errorText: string =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);

  const handleSelect = (e: any) => {
    if (formInput) {
      setFormInput({ ...formInput, [field.name]: e.value });
    }

    form.setFieldValue(field.name, e.value);
  };

  return (
    <>
      <FormControl isInvalid={errorText ? true : false}>
        <FormLabel>{label}</FormLabel>
        <Select
          {...props}
          // @ts-ignore
          onChange={handleSelect}
        />
        <FormErrorMessage fontSize="sm">{errorText}</FormErrorMessage>
      </FormControl>
    </>
  );
};

React.memo(CNSelectDropdownField);

CNSelectDropdownField.propTypes = {
  onSelect: PropTypes.func,
  setFormState: PropTypes.bool,
  props: PropTypes.node,
};

export default CNSelectDropdownField;
