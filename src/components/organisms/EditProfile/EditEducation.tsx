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
const EditEducation = ({
  edit,
  setEdit,
  userInfo,
  profileLoading,
  updateLoading,
  updateUser,
}: Props) => {
  interface FormValues {
    university: string;
    field_major: string;
    education_level: string;
    coding_prof: string;
    gpa: string;
    expected_graduation: string;
    values: any;
    handleChange: any;
  }

  const schema = yup.object({
    full_name: yup.string().required('fullname'),
    email: yup.string().required('email'),
  });

  return (
    <Formik
      validationSchema={schema}
      initialValues={{
        university: userInfo.university,
        field_major: userInfo.field_major,
        education_level: userInfo.education_level,
        coding_prof: userInfo.coding_prof,
        gpa: userInfo.gpa,
        expected_graduation: userInfo.expected_graduation,
      }}
      onSubmit={(data) => {
        console.log(data);
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
            title={'Education Details'}
          >
            <Field
              name="university"
              placeholder=""
              value={props.values.university}
              onChange={props.handleChange}
              component={CNTextFormField}
              customlabel="Name of institution/university"
              userData={userInfo.university}
            />
            <Field
              name="field_major"
              placeholder=""
              component={CNTextFormField}
              customlabel="Field major"
              userData={userInfo.field_major}
              value={props.values.field_major}
              onChange={props.handleChange}
            />
            <Field
              name="education_level"
              placeholder=""
              component={CNTextFormField}
              customlabel="Level of education"
              userData={userInfo.education_level}
              onChange={props.handleChange}
              value={props.values.education_level}
            />
            <Field
              name="coding_prof"
              placeholder=""
              component={CNTextFormField}
              customlabel="Coding proficiency"
              userData={userInfo.coding_prof}
              value={props.values.coding}
              onChange={props.handleChange}
            />
            <Field
              name="gpa"
              placeholder=""
              component={CNTextFormField}
              customlabel="GPA"
              userData={userInfo.gpa}
              value={props.values.gpa}
              onChange={props.handleChange}
            />
            <Field
              name="expected_graduation"
              placeholder=""
              component={CNTextFormField}
              customlabel="Expected graduation date"
              userData={userInfo.expected_graduation}
              value={props.values.expected_graduation}
              onChange={props.handleChange}
            />
          </ProfileBlock>
        </Form>
      )}
    </Formik>
  );
};

React.memo(EditEducation);
export default EditEducation;
