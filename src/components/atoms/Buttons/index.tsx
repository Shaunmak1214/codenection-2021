import React from 'react';
import PropTypes from 'prop-types';
import { Button, Text } from '@chakra-ui/react';

const PrimaryButton = ({ ...props }) => {
  let children: React.ReactNode = props.children;
  return (
    <Button
      borderRadius="0"
      border="2px solid #FFFFFF"
      bg="#002A97"
      color="#FFFFFF"
      _hover={{
        bg: '#FFFFFF',
        color: '#002A97',
      }}
      {...props}
    >
      <Text>{children}</Text>
    </Button>
  );
};

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export { PrimaryButton };
