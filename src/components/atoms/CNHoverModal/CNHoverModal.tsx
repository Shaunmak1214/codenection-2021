import { VStack } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import React from 'react';
import PropTypes from 'prop-types';

const Index = ({ ...props }) => {
  return (
    <VStack
      alignItems="flex-start"
      w="250px"
      maxW="500px"
      h="150px"
      maxH="300px"
      borderRadius="8px"
      py="5"
      px="5"
      bgColor="white"
      boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
      zIndex="49"
      visibility={props.show ? 'visible' : 'hidden'}
      opacity={props.show ? '1' : '0'}
      transform={props.show ? 'translateY(0)' : 'translateY(-10%)'}
      transition="all 0.3s ease-in-out"
      {...props}
    >
      <Image src={props.uni} borderRadius="50%" h="30px" w="30px" />
    </VStack>
  );
};

Index.propTypes = {
  uni: PropTypes.string,
  show: PropTypes.bool,
};

export default Index;
