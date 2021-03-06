/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import {
  HStack,
  Center,
  Image,
  Text,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  Button,
  useToast,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
// import { LOGIN } from '../../../reducers/authSlice';

import { CNTextFormField, PrimaryButton } from '../../atoms';
import { ProfileBlock } from '../../molecules';
import { ResumeUploaderModal } from '../../organisms';

import UserInfo from '../../../types/user.type';
import store from '../../../store';
import authTypes from '../../../types/auth.types';
import { useCNModal } from '../../../hooks';
import { TickIcon, DeleteIcon } from '../../../assets';
import axios from 'axios';

interface Props {
  profileLoading?: boolean;
  loading?: boolean;
  userInfo: UserInfo;
  updateUser: (data: any) => void;
  edit?: boolean;
  setEdit?: any;
  updateLoading: boolean;
  setUserInfo: any;
}

const EditJob = ({
  edit,
  setEdit,
  userInfo,
  profileLoading,
  updateLoading,
  updateUser,
  setUserInfo,
}: Props) => {
  interface FormValues {
    setFieldValue: any;
    submitForm: (() => void) | undefined;
    job: string;
    resume: string;
    handleChange: any;
    values: any;
    props: any;
  }

  const toast = useToast();
  const authStore: authTypes = store.getState().auth;
  const dispatch = useDispatch();

  const cancelRef = React.useRef();

  const {
    isOpen: resumeOpen,
    handleModalOpen: handleResumeOpen,
    handleModalClose: handleResumeClose,
  } = useCNModal({
    initialState: false,
  });

  const {
    isOpen: isAlertOpen,
    onOpen: onAlertOpen,
    onClose: onAlertClose,
  } = useDisclosure();

  const [resumeDeleteLoading, setResumeDeleteLoading] = useState(false);

  const handleOnDelete = (formikProps: any) => {
    setResumeDeleteLoading(true);
    axios
      .delete(`/resume/${authStore.user!.id}`, {
        headers: {
          Authorization: `Bearer ${authStore.accessToken}`,
        },
      })
      .then((res) => {
        if (res.status === 200 || res.status === 201 || res.status === 203) {
          toast({
            title: 'Resume deleted',
            description: 'You have successfully deleted your resume',
            status: 'success',
            position: 'top-right',
            duration: 10000,
            isClosable: true,
          });
          // dispatch(
          //   LOGIN({
          //     // @ts-ignore
          //     user: res.data.data.user,
          //     // @ts-ignore
          //     accessToken: res.data.data.token,
          //     // @ts-ignore
          //     refreshToken: res.data.data.refreshToken,
          //   }),
          // );
        }
        formikProps.setFieldValue('resume', undefined);
        setUserInfo({
          ...userInfo,
          resume: undefined,
        });
        onAlertClose();

        setResumeDeleteLoading(false);
        formikProps.submitForm!();
      })
      .catch((err) => {
        toast({
          title: 'Failed to delete resume',
          status: 'error',
          description: 'testing',
          position: 'top-right',
          duration: 10000,
          isClosable: true,
        });

        setResumeDeleteLoading(false);
      });
  };

  const schema = yup.object({
    interest_job_position: yup.string().nullable(true),
    resume: yup.string().nullable(true),
  });

  return (
    <>
      {/* resume uploader modal */}
      <Formik
        validationSchema={schema}
        initialValues={{
          interest_job_position: userInfo.interest_job_position,
          resume: userInfo.resume,
        }}
        onSubmit={(data) => {
          updateUser(data);
        }}
        enableReinitialize
      >
        {(props: FormValues) => (
          <Form
            style={{
              width: '100%',
            }}
          >
            <ProfileBlock
              updateUser={updateUser}
              profileLoading={profileLoading}
              updateLoading={updateLoading}
              edit={edit}
              setEdit={setEdit}
              formikProps={props}
              title={'Job preferences'}
            >
              <Field
                name="interest_job_position"
                placeholder=""
                value={props.values.interest_job_position}
                onChange={props.handleChange}
                component={CNTextFormField}
                customlabel="Interest job position"
                userData={userInfo.interest_job_position}
              />

              <ResumeUploaderModal
                isOpen={resumeOpen}
                onClose={handleResumeClose}
                formikSubmit={props.submitForm}
                formikProps={props}
              />
              <HStack
                name="resume"
                placeholder=""
                component={CNTextFormField}
                customlabel="Resume"
                userData={userInfo.resume}
                value={props.values.resume}
                onChange={props.handleChange}
                w="100%"
                alignItems="center"
              >
                {props.values.resume !== undefined ? (
                  <>
                    <Center
                      w="100%"
                      boxShadow="0px 4px 10px rgba(132, 132, 132, 0.25);"
                      borderRadius="10px"
                      backgroundColor="white"
                      px="12px"
                      py="7px"
                      mr="10px"
                    >
                      <Image
                        src={TickIcon}
                        alt="icon"
                        h="18px"
                        w="18px"
                        mr="10px"
                      />
                      <Text fontSize="md">Uploaded</Text>
                    </Center>
                    <HStack
                      w="50px"
                      border="1px solid #e9e9e9"
                      borderRadius="10px"
                      h="100%"
                      justifyContent="center"
                      alignItems="center"
                      py="8px"
                      cursor="pointer"
                      boxShadow="0px 4px 10px rgba(207, 207, 207, 0.25);"
                      _hover={{
                        backgroundColor: '#F5F5F5',
                      }}
                      onClick={onAlertOpen}
                    >
                      <Image src={DeleteIcon} alt="icon" h="18px" w="18px" />
                    </HStack>
                    <AlertDialog
                      motionPreset="slideInBottom"
                      // @ts-ignore
                      leastDestructiveRef={cancelRef}
                      onClose={onAlertOpen}
                      isOpen={isAlertOpen}
                      isCentered
                    >
                      <AlertDialogOverlay />

                      <AlertDialogContent>
                        <AlertDialogHeader>Delete Resume?</AlertDialogHeader>
                        <AlertDialogBody>
                          Are you sure you want to delete your resume?
                        </AlertDialogBody>
                        <AlertDialogFooter>
                          {/* @ts-ignore */}
                          <Button ref={cancelRef} onClick={onAlertClose}>
                            No
                          </Button>
                          <Button
                            colorScheme="red"
                            ml={3}
                            isLoading={resumeDeleteLoading}
                            onClick={() => {
                              handleOnDelete(props);
                            }}
                          >
                            Yes
                          </Button>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </>
                ) : (
                  <PrimaryButton
                    w="80%"
                    borderRadius="18px"
                    _hover={{ bg: '#000000' }}
                    border="none"
                    onClick={() => {
                      handleResumeOpen();
                    }}
                  >
                    Upload Resume
                  </PrimaryButton>
                )}
              </HStack>
            </ProfileBlock>
          </Form>
        )}
      </Formik>
    </>
  );
};
React.memo(EditJob);
export default EditJob;
