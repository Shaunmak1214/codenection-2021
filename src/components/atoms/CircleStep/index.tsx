import React from 'react';
import { Center, Container } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
const CircleStep = ({ ...props }) => {
  const children: React.ReactNode = props.children;
  return (
    <Center
      border="1px solid #FFFFFF"
      borderRadius="50%"
      h="50px"
      w="50px"
      position="absolute"
      left="-10px"
    >
      <Container
        bg="#FFFFFF"
        borderRadius="50%"
        w="40px"
        h="40px"
        d="flex"
        justifyContent="center"
        alignItems="center"
        {...props}
      >
        <Text color="#002A97" zIndex="20" fontWeight="bold" fontSize="2xl">
          {children}
        </Text>
      </Container>
    </Center>
  );
};

CircleStep.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CircleStep;
