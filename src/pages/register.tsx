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

import '../register.css';

const Register = () => {
  const dispatch = useDispatch();
  const formStore = store.getState().form;

  // will be passed down to children to execute the action
  const updateReg = (data: any) => {
    dispatch(
      UPDATEREG({
        ...formStore.register_state,
        ...data,
      }),
    );
  };
  const [step, setStep] = useState<number>(1);

  const nextStep = () => {
    setStep((currentStep) => currentStep + 1);
  };

  const prevStep = () => {
    setStep((currentStep) => currentStep - 1);
  };

  const UserForm = () => {
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={nextStep}
            updateReg={updateReg}
            formStore={formStore}
          />
        );

      case 2:
        return (
          <FormPersonalDetails
            nextStep={nextStep}
            prevStep={prevStep}
            updateReg={updateReg}
            formStore={formStore}
          />
        );
      case 3:
        return <FormTeamDetails />;
      default:
        break;
    }
  };

  return (
    <HStack alignItems="flex-start">
      <RegisterIndicator currentStep={step} />
      {/* @ts-ignore */}
      <UserForm />
    </HStack>
  );
};
export default Register;
