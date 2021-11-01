import React, { useState, useEffect } from 'react';

interface useConditionProps {
  condition: boolean | undefined | null;
}

interface BlockProps {
  children: any;
}

const useCondition = ({ ...props }: useConditionProps) => {
  let { condition = false } = props;

  const [show, setShow] = useState(condition);

  useEffect(() => {
    setShow(condition);
  }, [condition]);

  const IfBlock = ({ children }: BlockProps) => {
    if (show) {
      return children;
    }
    return <></>;
  };

  const ElseBlock = ({ children }: BlockProps) => {
    if (!show) {
      return children;
    }
    return <></>;
  };

  return [IfBlock, ElseBlock];
};

export default useCondition;
