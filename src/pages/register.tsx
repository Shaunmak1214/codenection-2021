/* eslint-disable */

import React, { useCallback, useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CLEARREG, UPDATEREG } from '../reducers/formSlice';
import {
  FormPersonalDetails,
  FormTeamDetails,
  FormUserDetails,
  RegisterIndicator,
} from '../components/organisms';
import { HStack } from '@chakra-ui/layout';
import store from '../store';
import { Redirect } from 'react-router';
import '../register.css';
import '../wdyr';

const Register = () => {
  const dispatch = useDispatch();
  const formStore = store.getState().form;
  const authStore = store.getState().auth;

  const [step, setStep] = useState<number>(1);
  const [prev, setPrev] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');

  // will be passed down to children to execute the action
  const handleUpdateReg = (data: any) => {
    dispatch(
      UPDATEREG({
        ...formStore.register_state,
        ...data,
      }),
    );
  };

  const handleSetPassword = useCallback((pass) => {
    setPassword(pass);
  }, []);

  const clearReg = () => {
    dispatch(CLEARREG());
  };

  const nextStep = () => {
    setStep((currentStep) => currentStep + 1);
    setPrev(false);
  };

  const prevStep = () => {
    setStep((currentStep) => currentStep - 1);
    setPrev(true);
  };

  if (authStore.user) {
    if (authStore!.user!.permission_level > 0) {
      return <Redirect to="/dashboard" />;
    }
  }

  return (
    <HStack alignItems="flex-start">
      <RegisterIndicator currentStep={step} />
      {step == 1 && (
        <FormUserDetails
          nextStep={nextStep}
          updateReg={handleUpdateReg}
          formStore={formStore}
          prev={prev}
          setPassword={handleSetPassword}
        />
      )}

      {step == 2 && (
        <FormPersonalDetails
          nextStep={nextStep}
          prevStep={prevStep}
          updateReg={handleUpdateReg}
          clearReg={clearReg}
          formStore={formStore}
          password={password}
        />
      )}

      {step == 3 && <FormTeamDetails />}
    </HStack>
  );
};

export default Register;
