import React from 'react';
import { Input } from '@chakra-ui/react';

const InputField = React.forwardRef((props: any, ref: any, inputId?: any) => (
  <Input
    textAlign="center"
    p="0px 6px !important"
    w="45px"
    type="text"
    boxShadow="0px 5px 6px rgba(185, 185, 185, 0.25);"
    {...props}
    id={inputId}
    ref={ref}
  />
));

InputField.displayName = 'InputField';
export { InputField };
