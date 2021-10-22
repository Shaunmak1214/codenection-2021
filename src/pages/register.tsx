/* eslint-disable */

import React from 'react';
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

const Register = () => {
  const dispatch = useDispatch();
  const formStore = store.getState().form;

  const authStore = store.getState().auth;
  // will be passed down to children to execute the action
  const updateReg = (data: any) => {
    dispatch(
      UPDATEREG({
        ...formStore.register_state,
        ...data,
      }),
    );
  };

  const [password, setPassword] = useState<string>('');

  const clearReg = () => {
    dispatch(CLEARREG());
  };
  const [step, setStep] = useState<number>(1);

  const [prev, setPrev] = useState<boolean>(false);

  const nextStep = () => {
    setStep((currentStep) => currentStep + 1);
    setPrev(false);
  };

  const prevStep = () => {
    setStep((currentStep) => currentStep - 1);
    setPrev(true);
  };

  const UserForm = () => {
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={nextStep}
            updateReg={updateReg}
            formStore={formStore}
            prev={prev}
            setPassword={setPassword}
          />
        );

      case 2:
        return (
          <FormPersonalDetails
            nextStep={nextStep}
            prevStep={prevStep}
            updateReg={updateReg}
            clearReg={clearReg}
            formStore={formStore}
            password={password}
          />
        );
      case 3:
        return <FormTeamDetails />;
      default:
        break;
    }
  };

  if (authStore.isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <HStack alignItems="flex-start">
      <RegisterIndicator currentStep={step} />
      {/* @ts-ignore */}
      <UserForm />
    </HStack>
  );
};
export default Register;
