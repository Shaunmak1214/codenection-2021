import React, { useState } from 'react';

import {
  Stack,
  Radio,
  RadioGroup,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';

import { getIn } from 'formik';

interface Props {
  value: string;
  form: any;
  field: any;
  label: string;
  options: any;
  onChange?: () => void;
}

const CNRadio = (props: Props) => {
  // eslint-disable-next-line
  let { value, form, field, label, options, ...rest } = props;

  const [selected, setSelected] = useState(value);

  const errorText: string =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);

  const handleChange = (value: any) => {
    setSelected(value);
    form.setFieldValue(field.name, value);
  };

  return (
    <VStack w="100%">
      <FormControl w="100%" isInvalid={errorText ? true : false}>
        <FormLabel>{label}</FormLabel>
        <RadioGroup onChange={handleChange} value={selected}>
          <Stack spacing={5} direction="row">
            {options.map((option: any) => (
              <Radio key={option.value} value={option.value}>
                {option.label}
              </Radio>
            ))}
          </Stack>
        </RadioGroup>

        <FormErrorMessage fontSize="sm">{errorText}</FormErrorMessage>
      </FormControl>
    </VStack>
  );
};

export default CNRadio;
