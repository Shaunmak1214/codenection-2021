import { HStack } from '@chakra-ui/layout';
import { useStyleConfig } from '@chakra-ui/react';

import React from 'react';
import PropTypes from 'prop-types';

const StepperBox = ({ ...props }) => {
  const children: React.ReactNode = props.children;
  const { variant }: any = props;
  const styles = useStyleConfig('stepperBox', { variant });
  return (
    <HStack __css={styles} {...props}>
      {children}
    </HStack>
  );
};

StepperBox.propTypes = {
  variant: PropTypes.any,
  children: PropTypes.node.isRequired,
};

export default StepperBox;
