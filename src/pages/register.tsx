/* eslint-disable */

import React, { useCallback } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { HStack } from '@chakra-ui/layout';

import {
  FormPersonalDetails,
  FormTeamDetails,
  FormUserDetails,
  RegisterIndicator,
} from '../components/organisms';

import { CLEARREG, UPDATEREG } from '../reducers/formSlice';
import { useWindowSize } from '../hooks';
import store from '../store';
import '../register.css';
import '../wdyr';

const Register = () => {
  const dispatch = useDispatch();
  const formStore = store.getState().form;
  const authStore = store.getState().auth;

  const [step, setStep] = useState<number>(1);
  const [prev, setPrev] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');

  const [windowWidth, windowHeight] = useWindowSize();

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
    if (authStore.user.permission_level > 0) {
      return <Redirect to="/dashboard" />;
    }
  }

  return (
    <HStack alignItems="flex-start" id="non-scrollable">
      {windowWidth > 1120 && <RegisterIndicator currentStep={step} />}

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
