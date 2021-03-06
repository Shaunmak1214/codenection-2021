import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import Lottie from 'react-lottie';

import {
  Text,
  useToast,
  Link,
  Box,
  SimpleGrid,
  Input,
  IconButton,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { VStack } from '@chakra-ui/layout';
import { ChevronLeftIcon } from '@chakra-ui/icons';

import { PrimaryButton, SecondaryText } from '../../atoms';
import { CNModal } from '../../molecules';

import { LOGIN } from '../../../reducers/authSlice';
import store from '../../../store';
import authTypes from '../../../types/auth.types';
import { EmailLoader, Warning } from '../../../constants';
import { useAxios } from '../../../hooks';

interface ModalProps {
  isOpen: boolean;
  sendable?: boolean;
  onClose: () => void;
}

const EmailVerifyModal = ({
  isOpen,
  onClose,
  sendable = false,
}: ModalProps) => {
  const [step, setStep] = useState(2);

  const authStore: authTypes = store.getState().auth;
  const dispatch = useDispatch();
  const toast = useToast();
  const {
    isOpen: isDialogOpen,
    onOpen: onDialogOpen,
    onClose: onDialogClose,
  } = useDisclosure();
  const cancelRef = React.useRef();

  // eslint-disable-next-line
  const { loading: verifyLoading, fetch: verify } = useAxios(
    {
      url: '/verify/verify',
      method: 'POST',
    },
    // eslint-disable-next-line
    (err, data) => {
      if (err) {
        toast({
          title: 'Error',
          description: 'Verify code is incorrect',
          status: 'error',
          duration: 2000,
          isClosable: true,
        });
      } else {
        toast({
          title: 'Success',
          description: 'Verify code is correct',
          status: 'success',
          duration: 2000,
          isClosable: true,
        });

        dispatch(
          LOGIN({
            // @ts-ignore
            user: data.data.user,
            // @ts-ignore
            accessToken: data.data.token,
            // @ts-ignore
            refreshToken: data.data.refreshToken,
          }),
        );

        onClose();
      }
    },
  );

  // eslint-disable-next-line
  const { loading: requestVerifyLoading, fetch: requestVerify } = useAxios(
    {
      url: '/verify/',
      method: 'POST',
    },
    // eslint-disable-next-line
    (err, data) => {
      if (err) {
        toast({
          title: 'Verification code not sent',
          // @ts-ignore
          description: err.data.message,
          status: 'error',
          duration: 2000,
          isClosable: true,
        });
      } else {
        toast({
          title: 'Success',
          description: 'Verification code is sent',
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
        setStep(2);
        onDialogClose();
      }
    },
  );

  let firstNum = useRef(null);
  let SecNum = useRef(null);
  let thirdNum = useRef(null);
  let forthNum = useRef(null);
  let fifthNum = useRef(null);
  let sixthNum = useRef(null);

  const submitVerify = () => {
    // @ts-ignore
    const code =
      // @ts-ignore
      firstNum.current.value +
      // @ts-ignore
      SecNum.current.value +
      // @ts-ignore
      thirdNum.current.value +
      // @ts-ignore
      forthNum.current.value +
      // @ts-ignore
      fifthNum.current.value +
      // @ts-ignore
      sixthNum.current.value;

    verify({
      email: authStore.user!.email,
      code,
    });
  };

  function isNumeric(value: string) {
    return /^-?\d+$/.test(value);
  }

  function OTPInputFunc() {
    const inputs = document.querySelectorAll<HTMLInputElement>('#otp > *[id]');
    for (let i = 0; i < inputs.length; i++) {
      let isCtrl = false;
      inputs[i].addEventListener('keydown', async function (event: any) {
        if (event.keyCode === 17 || event.keyCode === 91) isCtrl = true;
        if (event.key === 'Backspace') {
          inputs[i].value = '';
          if (i !== 0) inputs[i - 1].focus();
        } else if (event.keyCode === 86 && isCtrl) {
          event.preventDefault();

          const text = await (await navigator.clipboard.readText()).trim();
          if (isNumeric(text)) {
            for (let h = 0; h < text.length; h++) {
              inputs[h].value = text.charAt(h);

              if (h === inputs.length - 1) {
                return;
              }
            }
          } else {
            toast({
              title: 'Pasting error',
              description: 'You can only paste a series of number',
              status: 'error',
              position: 'top-right',
              duration: 2000,
              isClosable: true,
            });
          }
        } else {
          if (i === inputs.length - 1 && inputs[i].value !== '') {
            return true;
          } else if (event.keyCode > 47 && event.keyCode < 58) {
            inputs[i].value = event.key;
            if (i !== inputs.length - 1) inputs[i + 1].focus();
            event.preventDefault();
          } else if (event.keyCode > 64 && event.keyCode < 91) {
            inputs[i].value = String.fromCharCode(event.keyCode);
            if (i !== inputs.length - 1) inputs[i + 1].focus();
            event.preventDefault();
          }
        }
      });

      inputs[i].addEventListener('keyup', function (event: any) {
        if (event.keyCode === 17) isCtrl = false;
      });
    }
  }

  useEffect(() => {
    sendable ? setStep(1) : setStep(2);
    // eslint-disable-next-line
  }, [setStep, sendable]);

  useEffect(() => {
    OTPInputFunc();
    // eslint-disable-next-line
  }, [step]);

  return (
    <>
      <AlertDialog
        motionPreset="slideInBottom"
        isOpen={isDialogOpen}
        // @ts-ignore
        leastDestructiveRef={cancelRef}
        onClose={onDialogClose}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Resend verification email
            </AlertDialogHeader>

            <AlertDialogBody>
              <Text>Please make sure your email is correct:</Text>
              <span
                style={{
                  backgroundColor: '#F5F5F5',
                  padding: '5px 5px',
                  borderRadius: '8px',
                  fontSize: '16px',
                  textAlign: 'center',
                  marginTop: '10px',
                }}
              >
                {authStore.user!.email}
              </span>
            </AlertDialogBody>

            <AlertDialogFooter>
              {/* @ts-ignore */}
              <Button ref={cancelRef} onClick={onDialogClose}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  requestVerify({
                    email: authStore.user!.email,
                  });
                }}
                ml={3}
                isLoading={requestVerifyLoading}
              >
                Resend email
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      <CNModal
        maxHeight={step === 1 ? '55%' : '70%'}
        blur
        disableButton
        modalIsOpen={isOpen}
        centerSpacing={false}
        onRenderUpdate={(modalIsOpen) => {
          if (modalIsOpen) {
            OTPInputFunc();
          }
        }}
      >
        {step === 1 ? (
          <VStack height="100%" w="100%" justifyContent="center">
            <Lottie
              options={Warning}
              height={125}
              width={125}
              style={{ marginTop: 5, marginBottom: 5 }}
            />
            <SecondaryText fontSize="3xl" fontWeight="bold">
              Your email is not verified
            </SecondaryText>

            <SecondaryText fontSize="sm" opacity=".7">
              Click the button below to send a confirmation code to your email
            </SecondaryText>

            <PrimaryButton
              bgColor="#407DC1"
              mt="40px !important"
              borderRadius="8px"
              isLoading={requestVerifyLoading ? true : false}
              onClick={() => {
                requestVerify({
                  email: authStore.user!.email,
                });
              }}
            >
              Send a verification code
            </PrimaryButton>
            <Text mt="20px" fontSize="15px">
              <Link
                color="#407DC1"
                onClick={() => {
                  setStep(2);
                }}
              >
                I already have the code
              </Link>
            </Text>
          </VStack>
        ) : (
          <>
            <VStack
              height="100%"
              w="100%"
              justifyContent="center"
              position="relative"
            >
              {sendable ? (
                <Box position="absolute" top="-10px" left="15px">
                  <IconButton
                    variant="ghost"
                    aria-label="Back"
                    icon={<ChevronLeftIcon w="25px" h="25px" />}
                    onClick={() => {
                      setStep(1);
                    }}
                  />
                </Box>
              ) : (
                <></>
              )}

              <Lottie
                options={EmailLoader}
                height={125}
                width={125}
                style={{ marginTop: 5, marginBottom: 5 }}
              />
              <Text fontWeight="600" fontSize="28px" w="100%">
                Verify your email
              </Text>
              <Text fontSize="18px" w="100%">
                A verification code has been sent to your email{' '}
                <span
                  style={{
                    backgroundColor: '#F5F5F5',
                    padding: '5px 5px',
                    borderRadius: '8px',
                    fontSize: '16px',
                  }}
                >
                  {authStore.user!.email}
                </span>
              </Text>
              <SimpleGrid
                columns={[3, 3, 6]}
                spacing={2}
                mt="35px !important"
                id="otp"
                justifyContent="center"
                className="flex justify-center"
                alignItems="center"
              >
                <Input
                  textAlign="center"
                  p="0px 6px !important"
                  w="45px"
                  type="text"
                  id="first"
                  ref={firstNum}
                  maxLength={1}
                  keyboardType="number-pad"
                  boxShadow="0px 5px 6px rgba(185, 185, 185, 0.25);"
                />
                <Input
                  textAlign="center"
                  p="0px 6px !important"
                  w="45px"
                  type="text"
                  id="second"
                  ref={SecNum}
                  maxLength={1}
                  keyboardType="number-pad"
                  boxShadow="0px 5px 6px rgba(185, 185, 185, 0.25);"
                />
                <Input
                  textAlign="center"
                  p="0px 6px !important"
                  w="45px"
                  type="text"
                  id="third"
                  ref={thirdNum}
                  maxLength={1}
                  keyboardType="number-pad"
                  boxShadow="0px 5px 6px rgba(185, 185, 185, 0.25);"
                />
                <Input
                  textAlign="center"
                  p="0px 6px !important"
                  w="45px"
                  type="text"
                  id="fourth"
                  ref={forthNum}
                  maxLength={1}
                  keyboardType="number-pad"
                  boxShadow="0px 5px 6px rgba(185, 185, 185, 0.25);"
                />
                <Input
                  textAlign="center"
                  p="0px 6px !important"
                  w="45px"
                  type="text"
                  id="fifth"
                  ref={fifthNum}
                  maxLength={1}
                  keyboardType="number-pad"
                  boxShadow="0px 5px 6px rgba(185, 185, 185, 0.25);"
                />
                <Input
                  textAlign="center"
                  p="0px 6px !important"
                  w="45px"
                  type="text"
                  id="sixth"
                  ref={sixthNum}
                  maxLength={1}
                  keyboardType="number-pad"
                  boxShadow="0px 5px 6px rgba(185, 185, 185, 0.25);"
                />
              </SimpleGrid>

              <PrimaryButton
                bgColor="#407DC1"
                mt="40px !important"
                borderRadius="8px"
                isLoading={verifyLoading ? true : false}
                onClick={() => {
                  submitVerify();
                }}
              >
                Confirm
              </PrimaryButton>
              <Text mt="15px" fontSize="15px">
                Didn{"'"}t recieve any code?{' '}
                <Link
                  color="#407DC1"
                  onClick={() => {
                    onDialogOpen();
                  }}
                >
                  Resend
                </Link>
              </Text>
            </VStack>
          </>
        )}
      </CNModal>
    </>
  );
};

React.memo(EmailVerifyModal);

export default EmailVerifyModal;
