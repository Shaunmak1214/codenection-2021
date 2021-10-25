import React from 'react';
import { ProfileBlock } from '../../molecules';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import {
  CNTextFormField,
  CNSelectDropdownField,
  CNDatePicker,
} from '../../atoms';
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
    university: yup.string().required('university'),
    field_major: yup.string().required('field_major'),
    education_level: yup.string().required('education_level'),
    coding_prof: yup.string().required('coding proficiency'),
    gpa: yup.string().nullable(true),
    expected_graduation: yup.string().nullable(true),
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
            formikProps={props}
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
              placeholder={props.values.field_major}
              component={CNTextFormField}
              customlabel="Field major"
              userData={userInfo.field_major}
              onChange={props.handleChange}
              value={props.values.field_major}
            />
            <Field
              name="education_level"
              placeholder={props.values.education_level}
              options={[
                {
                  label: 'A" level',
                  value: 'A-level',
                },
                {
                  label: 'Pre-U',
                  value: 'Pre-u',
                },
                {
                  label: 'Diploma/Advanced Diploma',
                  value: 'Diploma',
                },
                {
                  label: 'Bachelor"s degree',
                  value: 'Degree',
                },
                {
                  label: 'Master/PHD',
                  value: 'Master',
                },
              ]}
              component={CNSelectDropdownField}
              customlabel="Level of education"
              userData={userInfo.education_level}
              onChange={props.handleChange}
              value={props.values.education_level}
            />
            <Field
              name="coding_prof"
              placeholder={props.values.coding_prof}
              options={[
                {
                  label: 'Novice',
                  value: 'Novice',
                },
                {
                  label: 'Beginner',
                  value: 'Beginner',
                },
                {
                  label: 'Intermediate',
                  value: 'Intermediate',
                },
                {
                  label: 'Skillful',
                  value: 'Skillful',
                },
                {
                  label: 'Expert',
                  value: 'Expert',
                },
              ]}
              component={CNSelectDropdownField}
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
              formInputName="expected_graduation"
              placeholder="Expected date of graduation"
              selectedDate={Date.parse(props.values.expected_graduation)}
              component={CNDatePicker}
              customlabel="Expected graduation date"
              userData={userInfo.expected_graduation}
            />
          </ProfileBlock>
        </Form>
      )}
    </Formik>
  );
};

React.memo(EditEducation);
export default EditEducation;
