import React from 'react';
import { ProfileBlock } from '../../molecules';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { CNTextFormField } from '../../atoms';
import UserInfo from '../../../types/user.type';

interface Props {
  profileLoading?: boolean;
  loading?: boolean;
  userInfo: UserInfo;
  updateUser: (data: any) => void;
  edit?: boolean;
  setEdit?: any;
  updateLoading: boolean;
}
const EditJob = ({
  edit,
  setEdit,
  userInfo,
  profileLoading,
  updateLoading,
  updateUser,
}: Props) => {
  interface FormValues {
    job: string;
    resume: string;
    handleChange: any;
    values: any;
  }
  const schema = yup.object({
    interest_job_position: yup.string().nullable(true),
    resume: yup.string().nullable(true),
  });

  return (
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
        <Form>
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
            <Field
              name="resume"
              placeholder=""
              component={CNTextFormField}
              customlabel="Resume"
              userData={userInfo.resume}
              value={props.values.resume}
              onChange={props.handleChange}
            />
          </ProfileBlock>
        </Form>
      )}
    </Formik>
  );
};
React.memo(EditJob);
export default EditJob;
