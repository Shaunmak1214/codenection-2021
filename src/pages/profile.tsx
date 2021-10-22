import React, { useState, useEffect } from 'react';
import {
  EditPersonal,
  EditJob,
  EditOther,
  EditEducation,
} from '../components/organisms';
import { Center, Container, HStack, VStack, useToast } from '@chakra-ui/react';
import { useAxios } from '../hooks';
import store from '../store';

import authTypes from '../types/auth.types';
interface UserProps {
  full_name?: string;
  email?: string;
  dob?: string;
  gender?: string;
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
    gender: '',
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
        setUserInfo({
          full_name: data.data.full_name,
          email: data.data.email,
          dob: data.data.dob,
          gender: data.data.sex,
          citizenship: data.data.citizenship,
          university: data.data.university,
          field_major: data.data.field_major,
          education_level: data.data.education_level,
          coding_prof: data.data.coding_prof,
          gpa: data.data.gpa,
          expected_graduation: data.data.expected_graduation,
          interest_job_position: data.data.interest_job_position,
          resume: data.data.resume,
          address: data.data.address,
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

  useEffect(() => {
    fetchUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Center py="150px">
      <Container maxW="container.xl">
        <HStack>
          <Container>
            <h1>testin</h1>
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
