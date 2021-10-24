import React, { useState, useEffect } from 'react';
import {
  EditPersonal,
  EditJob,
  EditOther,
  EditEducation,
} from '../components/organisms';
import {
  Center,
  Container,
  HStack,
  VStack,
  useToast,
  Text,
  Box,
} from '@chakra-ui/react';
import { useAxios } from '../hooks';
import store from '../store';
import { TeamBlocks } from '../components/molecules';

import authTypes from '../types/auth.types';
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
  resume?: string;
  address?: string;
  size?: string;
}
const Index = () => {
  const toast = useToast();
  const authStore: authTypes = store.getState().auth;

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
    resume: '',
    address: '',
    size: '',
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
        console.log(userData);
        setUserInfo({
          ...userData,
          size: 'S',
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
        setEditPersonal(false);
        setEditEducation(false);
        setEditJob(false);
        setEditOthers(false);
      }
    },
  );

  const [editPersonal, setEditPersonal] = useState(false);
  const [editEducation, setEditEducation] = useState(false);
  const [editJob, setEditJob] = useState(false);
  const [editOthers, setEditOthers] = useState(false);
  const firstLetter = authStore!.user!.full_name[0];

  useEffect(() => {
    fetchUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Center py="150px">
      <Container maxW="container.xl">
        <HStack alignItems="none">
          <Container mr="40px" mt="38px">
            <Box mb="100px">
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
                <Text fontSize="80px" color="#FFFFFF" textTransform="uppercase">
                  {firstLetter}
                </Text>
              </Box>

              <Text fontSize="xl" mt="20px" fontWeight="bold">
                {authStore!.user!.full_name}
              </Text>
            </Box>
            <Box mb="80px" mt="50px">
              <Text fontSize="2xl" fontWeight="bold" mb="15px">
                EMAIL STATUS
              </Text>
              <Box
                boxShadow="0px 8px 20px rgba(132, 132, 132, 0.25)"
                borderRadius="10px"
                w="340px"
                h="240px"
              ></Box>
            </Box>
            <Box>
              <Text fontSize="2xl" fontWeight="bold">
                YOUR TEAM
              </Text>
              <TeamBlocks category="closed" />
              <TeamBlocks />
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
        </HStack>
      </Container>
    </Center>
  );
};

export default Index;
