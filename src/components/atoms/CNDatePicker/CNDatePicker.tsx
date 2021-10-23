import React, { HTMLAttributes } from 'react';
import {
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';
import ReactDatePicker from 'react-datepicker';
import { getIn } from 'formik';

import 'react-datepicker/dist/react-datepicker.css';
import '../../../assets/css/date-picker.css';

interface Props {
  formInputName?: string;
  isClearable?: boolean;
  label: string;
  form?: any;
  field?: any;
  selectedDate: Date | undefined;
  showPopperArrow?: boolean;
  updateReg: (values: any) => void;
}

const CNDatePicker = ({
  selectedDate,
  formInputName,
  label,
  form,
  field,
  isClearable = false,
  showPopperArrow = false,
  ...props
}: Props & HTMLAttributes<HTMLElement>) => {
  const errorText: string =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);

  const onChange = (date: Date | [Date | null, Date | null] | null) => {
    // eslint-disable-next-line
    form.setFieldValue(formInputName, date);
  };

  return (
    <VStack w="100%">
      <FormControl w="100%" isInvalid={errorText ? true : false}>
        <FormLabel>{label}</FormLabel>
        {/* @ts-ignore */}
        <ReactDatePicker
          selected={selectedDate}
          // @ts-ignore
          onChange={onChange}
          isClearable={isClearable}
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          showPopperArrow={showPopperArrow}
          {...props}
        />
        <FormErrorMessage fontSize="sm">{errorText}</FormErrorMessage>
      </FormControl>
    </VStack>
  );
};

React.memo(CNDatePicker);

export default CNDatePicker;
