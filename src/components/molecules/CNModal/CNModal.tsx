import React from 'react';
import PropTypes from 'prop-types';
import { Flex, VStack } from '@chakra-ui/layout';
import { PrimaryButton } from '../../atoms';

interface Props {
  onClose?: () => void;
  modalIsOpen?: boolean;
  children?: any;
  blur?: boolean;
}

const CNModal = ({ blur, onClose, modalIsOpen, ...props }: Props) => {
  const children: React.ReactNode = props.children;

  if (!modalIsOpen) return null;
  return (
    <>
      <Flex
        className="modal-overlay"
        position="fixed"
        top="0"
        left="0"
        width="100%"
        height="100%"
        zIndex="200"
        justifyContent="center"
        alignItems="center"
        bg="rgba(31, 48, 65, 0.5);"
        backdropFilter={blur ? 'blur(10px)' : undefined}
      >
        <VStack
          p="35px"
          bgColor="white"
          borderRadius="20px"
          w="550px"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          {...props}
        >
          {children}
          <Flex flexDir={['column', 'column', 'row']}>
            <PrimaryButton>LoL</PrimaryButton>
            <PrimaryButton onClick={onClose}>Testing</PrimaryButton>
          </Flex>
        </VStack>
      </Flex>
    </>
  );
};

CNModal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
  modalIsOpen: PropTypes.bool,
  blur: PropTypes.bool,
};

export default CNModal;
