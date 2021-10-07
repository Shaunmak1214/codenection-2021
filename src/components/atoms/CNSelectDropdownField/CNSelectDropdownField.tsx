/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Select } from 'chakra-react-select';

interface Props {
  label: string;
  value: string;
  onSelect: (value: any) => void;
  field: any;
  form: any;
}

const CNSelectDropdownField = ({
  field,
  label,
  value,
  onSelect,
  ...props
}: Props) => {
  const handleSelect = (e: any) => {
    onSelect(e.value);
  };

  return (
    <>
      <FormControl id="email">
        <FormLabel>{label}</FormLabel>
        <Select {...field} {...props} size="md" onChange={handleSelect} />
      </FormControl>
    </>
  );
};

React.memo(CNSelectDropdownField);

CNSelectDropdownField.propTypes = {
  onSelect: PropTypes.func,
  props: PropTypes.node,
};

export default CNSelectDropdownField;
