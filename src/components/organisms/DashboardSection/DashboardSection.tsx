import React, { useEffect, useState } from 'react';
import * as yup from 'yup';

import { useToast } from '@chakra-ui/react';
import { Center, Container, SimpleGrid } from '@chakra-ui/layout';

import { registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';

import { PrimaryButton, JoinTeamButton, CNSpacer } from '../../atoms';
import {
  CreateTeamModal,
  EmailVerifyModal,
  AdvertisementModal,
  ResumeUploaderModal,
} from '../../organisms';
import {
  DashboardCard,
  JoinTeamTextField,
  PublicTeamList,
} from '../../molecules';
import { Formik, Form, Field } from 'formik';

import { useDispatch } from 'react-redux';
import { UPDATE } from '../../../reducers/authSlice';
import { UPDATEAD } from '../../../reducers/advertSlice';

import store from '../../../store';
import authTypes from '../../../types/auth.types';
import { useCNModal, useAxios } from '../../../hooks';
import {
  ResumeImg,
  ProfileImg,
  JoinTeamImg,
  CreateTeamImg,
} from '../../../assets';

import 'filepond/dist/filepond.min.css';

const DashboardSection = () => {
  const toast = useToast();
  const authStore: authTypes = store.getState().auth;
  const dispatch = useDispatch();

  const [teamModalIsOpen, setTeamModalIsOpen] = useState(false);
  const [discordModalIsOpen, setDiscordModalIsOpen] = useState(false);

  registerPlugin(
    FilePondPluginImageExifOrientation,
    FilePondPluginImagePreview,
    FilePondPluginFileValidateType,
  );

  const {
    isOpen: resumeOpen,
    handleModalOpen: handleResumeOpen,
    handleModalClose: handleResumeClose,
  } = useCNModal({
    initialState: false,
  });

  const {
    isOpen: emailVerifierOpen,
    handleModalClose: handleEmailVerifierClose,
    handleModalOpen: handleEmailVerifierOpen,
  } = useCNModal({
    initialState: false,
  });

  const joinTeamSchema = yup.object({
    teamCode: yup
      .string()
      .min(6, 'Team code must be at least 6 characters')
      .max(6, 'Team code must be at least 6 characters')
      .required('Team code is required'),
  });

  // eslint-disable-next-line
  const { loading: joinTeamLoading, fetch: joinTeam } = useAxios(
    {
      url: '/team/join',
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authStore.accessToken}`,
      },
    },
    // eslint-disable-next-line
    (err, data) => {
      if (err) {
        toast({
          title: 'Failed to join team',
          // @ts-ignore
          description: err.data.message,
          status: 'error',
          position: 'top-right',
          duration: 10000,
          isClosable: true,
        });
      } else {
        toast({
          title: 'Join Team Success',
          // @ts-ignore
          description: 'You have successfully joined the team',
          status: 'success',
          position: 'top-right',
          duration: 10000,
          isClosable: true,
        });

        dispatch(
          UPDATE({
            ...authStore.user,
            // @ts-ignore
            team_id: data.data.team_id,
          }),
        );
        // window.location.reload();
      }
    },
  );

  useEffect(() => {
    // @ts-ignore
    if (authStore.user!.permission_level < 1) {
      handleEmailVerifierOpen();
    }

    dispatch(
      UPDATEAD({
        advert: {
          id: 1,
          // @ts-ignore
          // count: store.getState().advert.find((ad) => ad.id === 1)!.count + 1,
          latestPopupDateTime: new Date(),
        },
      }),
    );

    setDiscordModalIsOpen(true);
    // @ts-ignore
    // store.getState().advert.find((ad) => ad.id === 1)!.count < 3
    //   ? true
    //   : false,

    // eslint-disable-next-line
  }, [setDiscordModalIsOpen]);

  return (
    <>
      {discordModalIsOpen && <AdvertisementModal />}

      <CreateTeamModal
        isOpen={teamModalIsOpen}
        onClose={() => {
          setTeamModalIsOpen(false);
        }}
      />

      {/* resume uploader modal */}
      <ResumeUploaderModal isOpen={resumeOpen} onClose={handleResumeClose} />

      {/* Email Verification Modal */}
      <EmailVerifyModal
        isOpen={emailVerifierOpen}
        onClose={handleEmailVerifierClose}
        sendable={true}
      />

      <Center h="100%" py="150px">
        <Container maxW="container.lg">
          <SimpleGrid
            columns={2}
            spacing={10}
            justifyItems="center"
            alignItems="center"
          >
            <DashboardCard
              title="Join a Team"
              des="Enter a team code that gets from your leader to join the team"
              leadImage={JoinTeamImg}
              bgColor="#D9F1F6"
            >
              <Formik
                validationSchema={joinTeamSchema}
                initialValues={{
                  teamCode: '',
                }}
                onSubmit={(data) => {
                  joinTeam({
                    code: data.teamCode,
                    user_id: authStore!.user!.id,
                  });
                }}
              >
                {(props) => (
                  <Form style={{ width: '90%' }}>
                    <Field
                      name="teamCode"
                      label=""
                      placeholder="Team Code"
                      border="none"
                      backgroundColor="white"
                      w="100%"
                      borderRadius="20px"
                      py="28px"
                      isLoading={joinTeamLoading}
                      onSubmit={() => {
                        // eslint-disable-next-line
                        props.submitForm();
                      }}
                      component={JoinTeamTextField}
                    />
                  </Form>
                )}
              </Formik>
            </DashboardCard>
            <DashboardCard
              title="Create a Team"
              des="Create your own team to participate this contest."
              leadImage={CreateTeamImg}
              bgColor="#D9F1F6"
              marginLeft="-85px"
            >
              <JoinTeamButton
                w="80%"
                onClick={() => {
                  setTeamModalIsOpen(true);
                }}
              >
                Create Team
              </JoinTeamButton>
            </DashboardCard>
            <DashboardCard
              title="Upload your Resume"
              des="Our sponsors will review your resume to offer job opportunites"
              leadImage={ResumeImg}
              bgColor="#D8E8FA"
            >
              <PrimaryButton
                w="80%"
                borderRadius="18px"
                _hover={{ bg: '#000000' }}
                border="none"
                onClick={handleResumeOpen}
              >
                Upload Resume
              </PrimaryButton>
            </DashboardCard>
            <DashboardCard
              title="Complete you Profile"
              des="There are a few details you might still haven't fill up"
              leadImage={ProfileImg}
              bgColor="#D8E8FA"
              marginLeft="-85px"
            >
              <PrimaryButton
                w="80%"
                borderRadius="18px"
                _hover={{ bg: '#000000' }}
                border="none"
                onClick={() => (window.location.href = '/edit-profile')}
              >
                Complete Profile
              </PrimaryButton>
            </DashboardCard>
          </SimpleGrid>
          <CNSpacer size="md" />
          <PublicTeamList />
        </Container>
      </Center>
    </>
  );
};

export default DashboardSection;
