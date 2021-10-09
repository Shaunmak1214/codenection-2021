import React from 'react';
import PropTypes from 'prop-types';

import { Flex, VStack } from '@chakra-ui/layout';

const CNModal = ({ ...props }) => {
  const children: React.ReactNode = props.children;
  return (
    <>
      <Flex
        className="modal-overlay"
        position="fixed"
        top="0"
        left="0"
        width="100%"
        height="100%"
        zIndex="50"
        justifyContent="center"
        alignItems="center"
        bg="rgba(31, 48, 65, 0.5);"
        backdropFilter="blur(10px)"
      >
        <VStack p="35px" bgColor="white" borderRadius="20px" {...props}>
          {children}
        </VStack>
      </Flex>
    </>
  );
};

CNModal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CNModal;
