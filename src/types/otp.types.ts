import React from 'react';

export default interface OTPInputProps {
  length: number;
  onChangeOTP: (otp: string) => any;

  autoFocus?: boolean;
  isNumberInput?: boolean;
  disabled?: boolean;

  style?: React.CSSProperties;
  className?: string;

  inputStyle?: React.CSSProperties;
  inputClassName?: string;
}
