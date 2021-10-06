import React from 'react';
import { PrimaryButton, SecondaryButton } from '../../atoms';

interface Props {
  nextStep: () => void;
  prevStep: () => void;
}

const FormPersonalDetails = ({ nextStep, prevStep }: Props) => {
  return (
    <>
      <div>
        <h1>Form Personal Details</h1>
      </div>
      <SecondaryButton onClick={nextStep}>Next</SecondaryButton>
      <PrimaryButton onClick={prevStep}>Back</PrimaryButton>
    </>
  );
};

export default FormPersonalDetails;
