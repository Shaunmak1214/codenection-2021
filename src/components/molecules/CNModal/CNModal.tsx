import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Flex, Box } from '@chakra-ui/layout';
import { IconButton } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { AnimatePresence, motion } from 'framer-motion';

import { MutedButton, PrimaryButton, CNSpacer } from '../../atoms';
import { useWindowSize } from '../../../hooks';

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
  blockClose?: boolean;
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
  blockClose = false,
  ...props
}: Props) => {
  const children: React.ReactNode = props.children;

  // eslint-disable-next-line
  const [windowWidth, windowHeight] = useWindowSize();

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
                maxHeight: windowWidth > 650 ? '95%' : '85%',
                width: windowWidth > 650 ? '600px' : '90%',
                padding: windowWidth > 650 ? '20px' : '25px',
              }}
              {...props}
            >
              {centerSpacing && <CNSpacer size="xs" />}
              <Box
                className="CNModal-content"
                w="100%"
                h="100%"
                overflowY="scroll"
                padding={['0px', '0px', '1.5rem']}
                marginLeft={windowWidth > 600 ? '25px' : '0'}
              >
                {!disableCloseButton && (
                  <Box
                    d="flex"
                    position="absolute"
                    top="35px"
                    right="35px"
                    justifyContent="flex-end"
                    disabled={blockClose}
                    onClick={() => {
                      if (!blockClose) {
                        // @ts-ignore
                        onClose();
                      }
                    }}
                    zIndex={100}
                  >
                    <IconButton
                      variant="ghost"
                      aria-label="Close modal"
                      _hover={{
                        bg: theme === 'discord' ? '#3945C9' : '#F5F5F5',
                      }}
                      icon={<CloseIcon w="12px" h="12px" />}
                      zIndex={100}
                    />
                  </Box>
                )}

                {children}
                {!disableButton && (
                  <Flex
                    flexDir={['column-reverse', 'column-reverse', 'row']}
                    justifyContent={CTAIsCenter ? 'center' : 'flex-end'}
                    alignSelf="flex-end"
                    w="100%"
                    pt="15px"
                    mt="15px"
                  >
                    <MutedButton
                      disabled={blockClose}
                      onClick={() => {
                        if (!blockClose) {
                          // @ts-ignore
                          onClose();
                        }
                      }}
                    >
                      {mutedText}
                    </MutedButton>
                    <PrimaryButton
                      ml={[0, 0, '20px']}
                      mb={['20px', '20px', 0]}
                      w={['100%', '100%', 'auto']}
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
