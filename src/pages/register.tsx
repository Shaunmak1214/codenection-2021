/* eslint-disable */

import React from 'react';
import { useDispatch } from 'react-redux';
import { CLEARREG, UPDATEREG } from '../reducers/formSlice';
import { RegisterIndicator } from '../components/organisms';
import { HStack } from '@chakra-ui/layout';
import store from '../store';

const Register = () => {
  const dispatch = useDispatch();
  const formStore = store.getState().form;

  // will be passed down to children to execute the action
  const updateReg = (e: any) => {
    dispatch(
      UPDATEREG({
        [e.target.name]: e.target.value,
      }),
    );
  };

  return (
    <HStack>
      <RegisterIndicator />
    </HStack>
  );
};
export default Register;
