/* eslint-disable */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Select } from 'chakra-react-select';

interface Props {
  label: string;
  value: string;

  field: any;
  form: any;
}

const CNSelectDropdownField = ({
  field,
  form,
  label,
  value,
  ...props
}: Props) => {
  const [selected, setSelected] = React.useState('');

  const handleSelect = (e: any) => {
    setSelected(e.value);
  };

  useEffect(() => {
    console.log(selected);
    form.setFieldValue(field.name, selected);
  }, [selected]);

  return (
    <>
      <FormControl>
        <FormLabel>{label}</FormLabel>
        <Select
          value={selected}
          {...field}
          {...props}
          size="md"
          onChange={handleSelect}
        />
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
