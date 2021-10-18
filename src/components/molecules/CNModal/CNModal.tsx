import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from '@chakra-ui/layout';
import { IconButton } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { AnimatePresence, motion } from 'framer-motion';
import { MutedButton, PrimaryButton } from '../../atoms';

interface Props {
  onClose?: () => void;
  modalIsOpen: boolean;
  children?: any;
  blur?: boolean;
  mutedText?: string;
  successText?: string;
  disableButton?: boolean;
  maxHeight?: string;
  CTAIsCenter?: boolean;
}
const modalAnimation = {
  hidden: {
    x: '-50%',
    scale: 0.8,
    opacity: 0,
    transition: {
      delay: 0.2,
    },
  },

  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },

  exit: {
    scale: 0,
    opacity: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};
const CNModal = ({
  mutedText = 'Close',
  successText = 'Proceed',
  blur = false,
  maxHeight = '70%',
  onClose,
  modalIsOpen,
  disableButton = false,
  CTAIsCenter = false,
  ...props
}: Props) => {
  const children: React.ReactNode = props.children;

  if (!modalIsOpen) return null;
  return (
    <>
      <AnimatePresence exitBeforeEnter={true}>
        {modalIsOpen && (
          <>
            <motion.div
              className="modal-overlay"
              style={{ backdropFilter: blur ? 'blur(10px)' : undefined }}
              onClick={onClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            ></motion.div>

            <motion.div
              variants={modalAnimation}
              className="CNModal"
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{
                height: '100%',
                maxHeight: maxHeight,
              }}
              {...props}
            >
              {!disableButton && (
                <Box
                  d="flex"
                  position="absolute"
                  top="30px"
                  right="30px"
                  justifyContent="flex-end"
                  onClick={onClose}
                >
                  <IconButton
                    variant="ghost"
                    aria-label="Close modal"
                    icon={<CloseIcon w="12px" h="12px" />}
                  />
                </Box>
              )}

              {children}
              {!disableButton && (
                <Flex
                  flexDir={['column', 'column', 'row']}
                  justifyContent={CTAIsCenter ? 'center' : 'flex-end'}
                  alignSelf="flex-end"
                  w="100%"
                  pt="15px"
                  mt="15px"
                >
                  <MutedButton onClick={onClose}>{mutedText}</MutedButton>
                  <PrimaryButton
                    ml="20px"
                    border="none"
                    borderRadius="5px"
                    _hover={{ border: 'none', bg: '#000000' }}
                  >
                    {successText}
                  </PrimaryButton>
                </Flex>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

CNModal.propTypes = {
  maxHeight: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
  modalIsOpen: PropTypes.bool,
  blur: PropTypes.bool,
  mutedText: PropTypes.string,
  successText: PropTypes.string,
  disableButton: PropTypes.bool,
};

export default CNModal;
