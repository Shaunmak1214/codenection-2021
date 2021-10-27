import React, { useState } from 'react';

import { useToast } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';

import { SecondaryText } from '../../atoms';
import { CNModal } from '../../molecules';

import store from '../../../store';
import { LOGIN } from '../../../reducers/authSlice';
import authTypes from '../../../types/auth.types';
import { useAxios } from '../../../hooks';

import 'filepond/dist/filepond.min.css';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onOpen?: () => void;
  formikSubmit?: () => void;
  formikProps?: any;
}

const ResumeUploaderModal = (props: Props) => {
  let { isOpen, onClose, formikSubmit, formikProps } = props;
  const toast = useToast();
  const authStore: authTypes = store.getState().auth;
  const dispatch = useDispatch();

  const [files, setFiles] = useState([]);

  registerPlugin(
    FilePondPluginImageExifOrientation,
    FilePondPluginImagePreview,
    FilePondPluginFileValidateType,
  );

  const { loading: resumeUploadLoading, fetch: resumeUpload } = useAxios(
    {
      url: '/resume/',
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authStore.accessToken}`,
        'Content-Type': 'multipart/form-data',
      },
    },
    // eslint-disable-next-line
    (err, data) => {
      if (err) {
        console.log(err);
        toast({
          title: 'Failed to upload resume',
          status: 'error',
          description: err.data.message,
          position: 'top-right',
          duration: 10000,
          isClosable: true,
        });
      } else {
        toast({
          title: 'Resume upload success',
          description: 'You have successfully uploaded your resume',
          status: 'success',
          position: 'top-right',
          duration: 10000,
          isClosable: true,
        });

        dispatch(
          LOGIN({
            user: data.data.user,
            accessToken: data.data.token,
            refreshToken: data.data.refreshToken,
          }),
        );

        onClose();
      }
    },
  );

  return (
    <CNModal
      onClose={onClose}
      modalIsOpen={isOpen}
      successText="Upload"
      centerSpacing={false}
      CTAIsCenter={true}
      isPrimaryLoading={resumeUploadLoading}
      onPrimaryClick={() => {
        if (files[0]) {
          let bodyFormData = new FormData();
          // @ts-ignore
          bodyFormData.append('file', files[0]!.file);
          bodyFormData.append('user_id', `${authStore.user!.id}`);
          resumeUpload(bodyFormData);
          formikProps.setFieldValue('resume', bodyFormData);
          formikSubmit!();
        } else {
          toast({
            title: 'No resume uplaoded',
            description: 'Please upload your resume',
            status: 'warning',
            position: 'top-right',
            duration: 100000,
            isClosable: true,
          });
        }
      }}
    >
      <Box py="25px">
        <SecondaryText fontSize="3xl" fontWeight="bold">
          Upload your resume
        </SecondaryText>
        <SecondaryText fontSize="sm" opacity=".7">
          FIle should be in pdf & less than 10 MB
        </SecondaryText>
      </Box>
      <FilePond
        acceptedFileTypes={['application/pdf']}
        //@ts-ignore
        onupdatefiles={setFiles}
        maxFileSize="5MB"
        maxFiles={1}
        files={files}
        allowReorder={true}
        allowMultiple={true}
        style={{
          width: '100%',
        }}
        labelIdle='<div class="folder-image"></div><div class="drop-area-label"><h2 class="drop-area-text">Drag & Drop your files</h2> <h2 class="or-label"> <span>OR</span></h2><a class="filepond--label-action">Browse</a></div>'
      />
    </CNModal>
  );
};

export default ResumeUploaderModal;
