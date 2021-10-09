import React from 'react';
import { Center, Container, SimpleGrid } from '@chakra-ui/layout';
import { DashboardCard, JoinTeamTextField } from '../../molecules';
import {
  ResumeImg,
  ProfileImg,
  JoinTeamImg,
  CreateTeamImg,
} from '../../../assets';
import { PrimaryButton, JoinTeamButton } from '../../atoms';
import { Formik, Form } from 'formik';

const DashboardSection = () => {
  return (
    <Center h="100%" py="150px">
      <Container maxW="container.lg">
        <SimpleGrid
          columns={2}
          spacing={10}
          justifyItems="center"
          alignItems="center"
        >
          {' '}
          <DashboardCard
            title="Join a Team"
            des="Enter a team code that gets from your leader to join the team"
            leadImage={JoinTeamImg}
            bgColor="#D9F1F6"
          >
            <Formik
              // validationSchema={schema}
              initialValues={{
                teamCode: '',
              }}
              onSubmit={(data) => {
                console.log(data);
              }}
            >
              {() => (
                // eslint-disable-next-line

                <Form style={{ width: '80%', marginTop: '-10px' }}>
                  <JoinTeamTextField />
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
            {' '}
            <JoinTeamButton w="80%">Create Team</JoinTeamButton>
          </DashboardCard>
          <DashboardCard
            title="Upload your Resume"
            des="Our sponsors will review your resume to offer job opportunites"
            leadImage={ResumeImg}
            bgColor="#D8E8FA"
          >
            {' '}
            <PrimaryButton
              w="80%"
              borderRadius="18px"
              _hover={{ bg: '#000000' }}
              border="none"
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
            {' '}
            <PrimaryButton
              w="80%"
              borderRadius="18px"
              _hover={{ bg: '#000000' }}
              border="none"
            >
              Complete Profile
            </PrimaryButton>
          </DashboardCard>
        </SimpleGrid>
      </Container>
    </Center>
  );
};

export default DashboardSection;
