import React, { useEffect, useState, useRef } from 'react';
import * as yup from 'yup';

import { useToast, Spinner } from '@chakra-ui/react';
import { Center, Container, Link, SimpleGrid, VStack } from '@chakra-ui/layout';

import { registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';

import {
  PrimaryButton,
  JoinTeamButton,
  CNSpacer,
  SecondaryText,
} from '../../atoms';
import {
  CreateTeamModal,
  EmailVerifyModal,
  AdvertisementModal,
  ResumeUploaderModal,
  DomainVerifyModal,
} from '../../organisms';
import {
  DashboardCard,
  JoinTeamTextField,
  PublicTeamList,
} from '../../molecules';
import { Formik, Form, Field } from 'formik';

import { useDispatch } from 'react-redux';
import { UPDATE } from '../../../reducers/authSlice';
import { UPDATEAD, ADD } from '../../../reducers/advertSlice';

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
import { ArrowRightIcon } from '@chakra-ui/icons';

interface TeamInfo {
  team_name: string;
}

const DashboardSection = () => {
  const toast = useToast();
  const authStore: authTypes = store.getState().auth;
  const dispatch = useDispatch();

  const [teamModalIsOpen, setTeamModalIsOpen] = useState(false);
  const [discordModalIsOpen, setDiscordModalIsOpen] = useState(false);

  const [teamInfo, setTeamInfo] = useState<TeamInfo>({
    team_name: '',
  });

  const publicTeamList = useRef<HTMLDivElement>(null);

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

  const {
    isOpen: domainVerifierOpen,
    handleModalOpen: handleDomainVerifierOpen,
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
      }
    },
  );

  // eslint-disable-next-line no-unused-vars
  const { loading: teamLoading, fetch: fetchTeamInfo } = useAxios(
    {
      url: `/team/${authStore!.user!.team_id}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${authStore.accessToken}`,
      },
    },
    (err, data) => {
      if (err) {
        return;
      } else {
        const returnedData = data.data;
        setTeamInfo({
          ...returnedData,
        });
      }
    },
  );

  useEffect(() => {
    fetchTeamInfo();

    // @ts-ignore
    if (authStore.user!.permission_level < 1) {
      handleEmailVerifierOpen();
    }

    if (authStore.user!.permission_level === 1) {
      handleDomainVerifierOpen();
    }

    if (authStore.user!.permission_level >= 2) {
      if (window.location.hash === '#create') {
        setTeamModalIsOpen(true);
      }

      if (window.location.hash === '#upload') {
        handleResumeOpen();
      }

      if (window.location.hash === '#publicTeamList') {
        setTimeout(() => {
          if (publicTeamList.current) {
            window.scrollTo({
              top: publicTeamList.current.offsetTop - 100,
              behavior: 'smooth',
            });
          }
        }, 800);
      }
    }

    // @ts-ignore
    try {
      // @ts-ignore
      const ad = store.getState().advert.find((ad) => ad.id === 1);
      if (ad) {
        // @ts-ignore
        const lastPopUpDateTime = new Date(
          // @ts-ignore
          store
            .getState()
            // @ts-ignore
            .advert.find((ad) => ad.id === 1)!.latestPopupDateTime,
        );
        const dateNow = new Date();

        // @ts-ignore
        const diffTime = Math.abs(dateNow - lastPopUpDateTime);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays > 2) {
          setDiscordModalIsOpen(true);
          dispatch(
            UPDATEAD({
              advert: {
                id: 1,
                latestPopupDateTime: new Date(),
              },
            }),
          );
        }
      } else {
        let initialLastPop = new Date();
        initialLastPop.setDate(initialLastPop.getDate() - 2);
        dispatch(
          ADD({
            advert: {
              id: 1,
              latestPopupDateTime: initialLastPop,
            },
          }),
        );

        setDiscordModalIsOpen(true);
      }
    } catch (error) {
      console.log(error);
      setDiscordModalIsOpen(true);
    }

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
        createSuccess={() => {
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }}
      />

      <DomainVerifyModal isOpen={domainVerifierOpen} />

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
          <SimpleGrid columns={[1, 1, 3]} spacing={8}>
            <Center
              px="25px"
              py="25px"
              bgColor="#F1FFFF"
              boxShadow="0px 8px 20px rgba(0, 131, 124, 0.25)"
              borderRadius="10px"
            >
              <VStack
                spacing="20px"
                h="100%"
                w="100%"
                justifyContent="flex-start"
              >
                <SecondaryText fontSize="xl" fontWeight="bold">
                  YOUR TEAM
                </SecondaryText>
                {teamLoading ? (
                  <Spinner />
                ) : teamInfo.team_name ? (
                  <>
                    <SecondaryText fontSize="md">
                      {teamInfo.team_name}
                    </SecondaryText>
                    <PrimaryButton
                      bgColor="#0099B8;"
                      borderRadius="10px"
                      w="100%"
                      onClick={() => {
                        window.location.href = '/edit-profile#team';
                      }}
                    >
                      View Team Profile
                    </PrimaryButton>
                  </>
                ) : (
                  <>
                    <SecondaryText fontSize="md">No Teams Yet</SecondaryText>
                    <PrimaryButton
                      bgColor="#0099B8;"
                      borderRadius="10px"
                      w="100%"
                      onClick={() => {
                        setTeamModalIsOpen(true);
                      }}
                    >
                      Create Team
                    </PrimaryButton>
                  </>
                )}
              </VStack>
            </Center>

            <Center
              px="25px"
              py="25px"
              bgColor="#EEF6FF"
              boxShadow="0px 8px 20px rgba(0, 131, 124, 0.25)"
              borderRadius="10px"
            >
              <VStack spacing="20px" w="100%">
                <SecondaryText fontSize="xl" fontWeight="bold">
                  YOUR PROFILE
                </SecondaryText>
                <SecondaryText fontSize="md">
                  {authStore!.user!.full_name}
                </SecondaryText>
                <PrimaryButton
                  bgColor="#0078FF;"
                  borderRadius="10px"
                  w="100%"
                  onClick={() => {
                    window.location.href = '/edit-profile';
                  }}
                >
                  View Profile
                </PrimaryButton>
              </VStack>
            </Center>
            <Center
              px="25px"
              py="25px"
              bgColor="#EEF6FF"
              boxShadow="0px 8px 20px rgba(0, 131, 124, 0.25)"
              borderRadius="10px"
            >
              <VStack spacing="20px" w="80%">
                <Link
                  href="https://discord.gg/VpCeFaeKcq"
                  target="_blank"
                  w="100%"
                  justifyContent="space-between"
                  alignItems="center"
                  d="flex"
                  flexDir="row"
                >
                  <SecondaryText fontSize="md">Join our discord</SecondaryText>
                  <ArrowRightIcon h="8px" w="8px" />
                </Link>
                <Link
                  href="/dashboard#publicTeamList"
                  w="100%"
                  justifyContent="space-between"
                  alignItems="center"
                  d="flex"
                  flexDir="row"
                >
                  <SecondaryText fontSize="md">
                    View all public teams
                  </SecondaryText>
                  <ArrowRightIcon h="8px" w="8px" />
                </Link>
                <Link
                  href="/rules"
                  w="100%"
                  justifyContent="space-between"
                  alignItems="center"
                  d="flex"
                  flexDir="row"
                >
                  <SecondaryText fontSize="md">Read the rules</SecondaryText>
                  <ArrowRightIcon h="8px" w="8px" />
                </Link>
              </VStack>
            </Center>
          </SimpleGrid>
          <CNSpacer size="md" />
          <SimpleGrid
            columns={[1, 1, 2]}
            spacing={10}
            justifyItems="center"
            alignItems="center"
            w="100%"
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
            >
              <PrimaryButton
                w="80%"
                borderRadius="18px"
                _hover={{ bg: '#000000' }}
                border="none"
                onClick={() => (window.location.href = '/edit-profile')}
              >
                Edit Profile
              </PrimaryButton>
            </DashboardCard>
          </SimpleGrid>
          <CNSpacer size="md" />
          <PublicTeamList ref={publicTeamList} />
        </Container>
      </Center>
    </>
  );
};

export default DashboardSection;
