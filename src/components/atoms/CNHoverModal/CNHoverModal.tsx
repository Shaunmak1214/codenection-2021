import { VStack } from '@chakra-ui/layout';
import React from 'react';

interface CNHoverModalProps {
  children?: React.ReactNode;
  show: boolean;
  [x: string]: any;
}

const Index = ({ children, ...props }: CNHoverModalProps) => {
  return (
    <VStack
      alignItems="flex-start"
      w="250px"
      maxW="500px"
      h="fit-content"
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
      {children}
    </VStack>
  );
};

export default Index;
