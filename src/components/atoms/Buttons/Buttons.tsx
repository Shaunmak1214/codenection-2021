import React from 'react';
import PropTypes from 'prop-types';
import { Button, Text } from '@chakra-ui/react';

const PrimaryButton = ({ ...props }) => {
  const children: React.ReactNode = props.children;

  return (
    <Button
      borderRadius="0"
      border="2px solid #FFFFFF"
      bg="#002A97"
      color="#FFFFFF"
      px="10"
      py="20px"
      _hover={{
        bg: '#FFFFFF',
        color: '#002A97',
        border: '2px solid #002A97',
      }}
      {...props}
    >
      <Text>{children}</Text>
    </Button>
  );
};

const SecondaryButton = ({ ...props }) => {
  const children: React.ReactNode = props.children;

  return (
    <Button
      color="#000000"
      border="2px solid #000000"
      bg="transparent"
      borderRadius="3px"
      px="10"
      py="20px"
      _hover={{
        bg: '#000000',
        color: '#FFFFFF',
      }}
      {...props}
    >
      <Text>{children}</Text>
    </Button>
  );
};

const HeaderButton = React.forwardRef((props: any, ref: any) => (
  <Button
    borderRadius="5px"
    px="10"
    py="20px"
    bg="#FFFFFF"
    color="#002A97"
    {...props}
    ref={ref}
  >
    <Text>{props.children}</Text>
  </Button>
));

HeaderButton.displayName = 'HeaderButton';

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
};

SecondaryButton.propTypes = {
  children: PropTypes.node.isRequired,
};

HeaderButton.propTypes = {
  children: PropTypes.node.isRequired,
  ref: PropTypes.any,
};

export { PrimaryButton, SecondaryButton, HeaderButton };