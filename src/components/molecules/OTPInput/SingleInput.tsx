import React, { useRef, useLayoutEffect, memo } from 'react';

import usePrevious from '../../../hooks/usePrevious';

interface SingleOTPInputComponentProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  focus?: boolean;
}

export function SingleOTPInputComponent(props: SingleOTPInputComponentProps) {
  const { focus, autoFocus, ...rest } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const prevFocus = usePrevious(!!focus);
  useLayoutEffect(() => {
    if (inputRef.current) {
      if (focus && autoFocus) {
        inputRef.current.focus();
      }
      if (focus && autoFocus && focus !== prevFocus) {
        inputRef.current.focus();
        inputRef.current.select();
      }
    }
  }, [autoFocus, focus, prevFocus]);

  return (
    <input
      style={{
        width: '45px',
        textAlign: 'center',
        boxShadow: '"0px 5px 6px rgba(185, 185, 185, 0.25);',
      }}
      ref={inputRef}
      {...rest}
    />
  );
}

const SingleOTPInput = memo(SingleOTPInputComponent);
export default SingleOTPInput;
