import React, { useState, useEffect, useRef } from 'react';
import {
  Center,
  Container,
  VStack,
  useToast,
  Text,
  Box,
  Image,
  Spinner,
  Flex,
} from '@chakra-ui/react';

import store from '../store';
import authTypes from '../types/auth.types';

import {
  PrimaryButton,
  SecondaryText,
  WhiteBox,
  CNSpacer,
} from '../components/atoms';
import { TeamBlocks } from '../components/molecules';
import {
  EditPersonal,
  EditJob,
  EditOther,
  EditEducation,
  EditTeamModal,
} from '../components/organisms';
import { useDispatch } from 'react-redux';

import { useAxios, useCNModal, useCopyToClipboard } from '../hooks';
import { UPDATE } from '../reducers/authSlice';
import { EmailVerified } from '../assets';

interface UserProps {
  full_name?: string;
  email?: string;
  dob?: string;
  sex?: string;
  citizenship?: string;
  university?: string;
  field_major?: string;
  education_level?: string;
  coding_prof?: string;
  gpa?: string;
  expected_graduation?: string;
  interest_job_position?: string;
  resume?: undefined;
  address?: string;
  shirt_size?: string;
}

interface TeamProps {
  team_name: string;
  hackerrank_username: string;
  contact_info: string;
  visible: string;
  is_external: boolean;
  is_internal: boolean;
  team_lead: any;
  code?: string;
}

const Index = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const authStore: authTypes = store.getState().auth;

  const [editPersonal, setEditPersonal] = useState(false);
  const [editEducation, setEditEducation] = useState(false);
  const [editJob, setEditJob] = useState(false);
  const [editOthers, setEditOthers] = useState(false);
  const firstLetter = authStore!.user!.full_name[0];

  const teamRef = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line
  const [value, copy] = useCopyToClipboard({
    onCopySuccess: () => {
      toast({
        title: 'Copied to clipboard',
        description: 'Your team code has been copied to your clipboard',
        position: 'top-right',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    },
  });

  // eslint-disable-next-line no-unused-vars
  const [userInfo, setUserInfo] = useState<UserProps>({
    full_name: '',
    email: '',
    dob: '',
    sex: '',
    citizenship: '',
    university: '',
    field_major: '',
    education_level: '',
    coding_prof: '',
    gpa: '',
    expected_graduation: '',
    interest_job_position: '',
    resume: undefined,
    address: '',
    shirt_size: '',
  });

  const [teamInfo, setTeamInfo] = useState<TeamProps>({
    team_name: '',
    hackerrank_username: '',
    team_lead: {},
    contact_info: '',
    visible: '',
    is_external: false,
    is_internal: false,
  });

  const {
    isOpen: isEditTeamOpen,
    handleModalClose: handleEditTeamClose,
    handleModalOpen: handleEditTeamOpen,
  } = useCNModal({
    initialState: false,
  });

  const { loading: profileLoading, fetch: fetchUserInfo } = useAxios(
    {
      url: `/user/${authStore!.user!.id}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${authStore.accessToken}`,
      },
    },
    (err, data) => {
      if (err) {
        return;
      } else {
        const userData = data.data;

        setUserInfo({
          ...userData,
        });
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

  //eslint-disable-next-line no-unused-vars
  const { loading: updateLoading, fetch: updateUser } = useAxios(
    {
      url: `/user/${authStore!.user!.id}`,
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${authStore.accessToken}`,
      },
    },
    (err, data) => {
      if (err) {
        toast({
          title: 'Failed to update profile',
          description: err.data.message,
          status: 'error',
          position: 'top-right',
          duration: 10000,
          isClosable: true,
        });
      } else if (data) {
        const updatedData: UserProps = JSON.parse(data.config.data);
        toast({
          title: 'Profile Updated',
          description: 'You have successfully updated your profile',
          status: 'success',
          position: 'top-right',
          duration: 10000,
          isClosable: true,
        });
        setUserInfo({
          ...userInfo,
          ...updatedData,
        });
        dispatch(
          UPDATE({
            ...authStore.user,
            ...updatedData,
          }),
        );
        setEditPersonal(false);
        setEditEducation(false);
        setEditJob(false);
        setEditOthers(false);
      }
    },
  );

  const TeamCodeBlocksRenderer = () => {
    return (
      <Flex
        flexDir={['column', 'column', 'column', 'row']}
        mt="20px"
        borderRadius="15px"
        bg={'#FFFFFF'}
        boxShadow={'0px 8px 20px rgba(151, 151, 151, 0.25)'}
        py="15px"
        px="25px"
        mb="35px"
        justifyContent="space-between"
        alignItems="center"
      >
        <SecondaryText fontWeight="bold" pr={['5px', '5px', '5px', '0']}>
          {teamInfo.code}
        </SecondaryText>

        <PrimaryButton
          borderRadius="10px"
          onClick={() => {
            // @ts-ignore
            copy(teamInfo.code);
          }}
          w={['100%', '100%', '100%', 'auto']}
          mt={['10px', '10px', '10px', '0px']}
        >
          Copy code
        </PrimaryButton>
      </Flex>
    );
  };

  const TeamBlocksRenderer = () => {
    if (authStore!.user!.team_id) {
      if (teamInfo.is_external && teamInfo.is_internal) {
        return (
          <>
            <TeamBlocks teamInfo={teamInfo} category="closed" />
            <TeamBlocks teamInfo={teamInfo} />
          </>
        );
      } else if (teamInfo.is_external) {
        return (
          <>
            <TeamBlocks teamInfo={teamInfo} />
          </>
        );
      } else {
        return (
          <>
            <TeamBlocks teamInfo={teamInfo} category="closed" />{' '}
          </>
        );
      }
    } else {
      return (
        <>
          <WhiteBox w={['265px', '265px', '340px']} h="200px">
            <VStack
              py="20px"
              mt="30px"
              justifyContent="center"
              alignItems="center"
            >
              <Text fontSize="xl" py="20px">
                You don&apos;t have a team yet
              </Text>
              <PrimaryButton
                borderRadius="10px"
                px="20px"
                onClick={() => (window.location.href = '/dashboard')}
              >
                Join/Create Team
              </PrimaryButton>
            </VStack>
          </WhiteBox>
        </>
      );
    }
  };

  useEffect(() => {
    fetchUserInfo();
    fetchTeamInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (window.location.hash === '#team') {
      if (teamInfo && userInfo) {
        setTimeout(() => {
          if (teamRef.current) {
            window.scrollTo({
              top: teamRef.current.offsetTop - 100,
              behavior: 'smooth',
            });
          }
        }, 800);
      }
    }
  }, [teamInfo, userInfo]);

  return (
    <>
      {authStore.user?.permission_level === 5 && !teamLoading ? (
        <EditTeamModal
          isOpen={isEditTeamOpen}
          onClose={handleEditTeamClose}
          initialValues={{
            teamName: teamInfo.team_name,
            is_internal: teamInfo.is_internal,
            is_external: teamInfo.is_external,
            hackerrankUsername: teamInfo.hackerrank_username,
            contactInfo: teamInfo.contact_info,
            visible: teamInfo.visible,
          }}
          onUpdatedTeam={(updatedTeam) => {
            setTeamInfo({
              ...teamInfo,
              ...updatedTeam,
            });
          }}
        />
      ) : (
        <></>
      )}
      <Center py="150px">
        <Container maxW="container.xl">
          <Flex flexDir={['column', 'column', 'row']}>
            <Container
              mr="40px"
              mt="38px"
              d="flex"
              flexDir="column"
              alignItems={['center', 'center', 'center', 'flex-start']}
              w="100%"
            >
              <Box
                mb="100px"
                maxW="300px"
                d={['flex', 'flex', 'block']}
                justifyContent="center"
                alignItems="center"
                flexDir="column"
              >
                <Box
                  bg="#0099B8"
                  w="150px"
                  h="140px"
                  textAlign="center"
                  d="flex"
                  borderRadius="8px"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Text
                    fontSize="80px"
                    color="#FFFFFF"
                    textTransform="uppercase"
                  >
                    {firstLetter}
                  </Text>
                </Box>

                <Text fontSize="xl" mt="20px" fontWeight="bold">
                  {authStore!.user!.full_name}
                </Text>
              </Box>
              <VStack
                alignItems={['center', 'center', 'center', 'flex-start']}
                mb="80px"
                mt="50px"
              >
                <Text
                  alignSelf="flex-start"
                  fontSize="2xl"
                  fontWeight="bold"
                  mb="15px"
                >
                  EMAIL STATUS
                </Text>

                <WhiteBox w={['260px', '260px', '260px']} h="240px">
                  <VStack py="25px" justifyContent="center" alignItems="center">
                    <Image
                      w={['120px', '120px', '140px']}
                      h={['110px', '110px', '130px']}
                      src={EmailVerified}
                    />
                    <Text fontSize="xl" py="10px">
                      Email Verified
                    </Text>
                  </VStack>
                </WhiteBox>
              </VStack>
              <Box id="team" ref={teamRef} w="100%">
                <Text fontSize="2xl" fontWeight="bold">
                  YOUR TEAM
                </Text>
                <CNSpacer size="3xs" />
                {teamLoading ? (
                  <Box
                    h="210px"
                    justifyContent="center"
                    alignItems="center"
                    d="flex"
                  >
                    <Spinner size="xl" />
                  </Box>
                ) : (
                  <>
                    {authStore!.user!.permission_level === 5 && (
                      <PrimaryButton
                        w="100%"
                        borderRadius="10px"
                        onClick={() => {
                          handleEditTeamOpen();
                        }}
                      >
                        Edit Team
                      </PrimaryButton>
                    )}

                    {teamInfo.code && <TeamCodeBlocksRenderer />}
                    <TeamBlocksRenderer />
                  </>
                )}
              </Box>
            </Container>
            <VStack>
              <EditPersonal
                userInfo={userInfo}
                profileLoading={profileLoading}
                updateUser={updateUser}
                edit={editPersonal}
                setEdit={setEditPersonal}
                updateLoading={updateLoading}
              />
              <EditEducation
                userInfo={userInfo}
                updateLoading={updateLoading}
                profileLoading={profileLoading}
                updateUser={updateUser}
                edit={editEducation}
                setEdit={setEditEducation}
              />
              <EditJob
                userInfo={userInfo}
                updateLoading={updateLoading}
                profileLoading={profileLoading}
                updateUser={updateUser}
                edit={editJob}
                setEdit={setEditJob}
                setUserInfo={setUserInfo}
              />
              <EditOther
                userInfo={userInfo}
                updateLoading={updateLoading}
                profileLoading={profileLoading}
                updateUser={updateUser}
                edit={editOthers}
                setEdit={setEditOthers}
              />
            </VStack>
          </Flex>
        </Container>
      </Center>
    </>
  );
};

export default Index;
