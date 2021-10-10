import React from 'react';
import { Center, Container, SimpleGrid } from '@chakra-ui/layout';
import { DashboardCard, JoinTeamTextField, CNModal } from '../../molecules';
import {
  ResumeImg,
  ProfileImg,
  JoinTeamImg,
  CreateTeamImg,
} from '../../../assets';
import { PrimaryButton, JoinTeamButton } from '../../atoms';
import { Formik, Form } from 'formik';
import { useCNModal } from '../../../hooks';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond/dist/filepond.min.css';
const DashboardSection = () => {
  registerPlugin(
    FilePondPluginImageExifOrientation,
    FilePondPluginImagePreview,
  );

  const [files, setFiles] = React.useState([]);

  const {
    isOpen: resumeOpen,
    handleModalOpen: handleResumeOpen,
    handleModalClose: handleResumeClose,
  } = useCNModal({
    initialState: false,
  });

  return (
    <>
      <CNModal onClose={handleResumeClose} modalIsOpen={resumeOpen}>
        <FilePond
          style={{ width: '300px', height: '300px' }}
          //@ts-ignore
          onupdatefiles={setFiles}
          files={files}
          allowReorder={true}
          allowMultiple={true}
          labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
        />
      </CNModal>
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
    </>
  );
};

export default DashboardSection;
