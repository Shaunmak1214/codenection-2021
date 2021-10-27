import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from '@chakra-ui/layout';
import { IconButton } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { AnimatePresence, motion } from 'framer-motion';
import { MutedButton, PrimaryButton, CNSpacer } from '../../atoms';

interface Props {
  onClose?: () => void;
  modalIsOpen: boolean;
  children?: any;
  blur?: boolean;
  mutedText?: string;
  successText?: string;
  disableButton?: boolean;
  disableCloseButton?: boolean;
  maxHeight?: string;
  CTAIsCenter?: boolean;
  centerSpacing?: boolean;
  isPrimaryLoading?: boolean;
  onPrimaryClick?: () => void;
  onRenderUpdate?: (modalIsOpen: boolean) => void;
  primaryButtonFormId?: string;
  theme?: any;
}
const modalAnimation = {
  hidden: {
    x: '-50%',
    y: '-50%',
    scale: 0.8,
    opacity: 0,
    transition: {
      delay: 0.2,
    },
  },

  visible: {
    x: '-50%',
    y: '-50%',
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },

  exit: {
    x: '-50%',
    y: '-50%',
    scale: 0.8,
    opacity: 0,
    transition: {
      delay: 0.15,
      duration: 0.15,
    },
  },
};
const CNModal = ({
  mutedText = 'Close',
  successText = 'Proceed',
  blur = false,
  onClose,
  modalIsOpen,
  disableButton = false,
  disableCloseButton = disableButton,
  CTAIsCenter = false,
  isPrimaryLoading = false,
  onPrimaryClick,
  centerSpacing = true,
  theme,
  onRenderUpdate,
  ...props
}: Props) => {
  const children: React.ReactNode = props.children;

  const handlePrimaryClick = () => {
    if (onPrimaryClick) {
      onPrimaryClick();
    }
  };

  // temp fix
  useEffect(() => {
    if (onRenderUpdate) {
      onRenderUpdate(modalIsOpen);
    }
    // eslint-disable-next-line
  }, [modalIsOpen]);

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
                backgroundColor: theme === 'discord' ? '#5865F2' : '#fff',
                transition: 'height 0.3s ease-in-out',
                maxHeight: '95%',
              }}
              {...props}
            >
              {centerSpacing && <CNSpacer size="xs" />}
              <Box
                className="CNModal-content"
                w="100%"
                h="100%"
                overflowY="scroll"
                padding="1.5rem"
                marginLeft="25px"
              >
                {!disableCloseButton && (
                  <Box
                    d="flex"
                    position="absolute"
                    top="35px"
                    right="35px"
                    justifyContent="flex-end"
                    onClick={onClose}
                  >
                    <IconButton
                      variant="ghost"
                      aria-label="Close modal"
                      _hover={{
                        bg: theme === 'discord' ? '#3945C9' : '#F5F5F5',
                      }}
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
                      onClick={() => {
                        handlePrimaryClick();
                      }}
                      isLoading={isPrimaryLoading}
                      type="submit"
                    >
                      {successText}
                    </PrimaryButton>
                  </Flex>
                )}
              </Box>
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
