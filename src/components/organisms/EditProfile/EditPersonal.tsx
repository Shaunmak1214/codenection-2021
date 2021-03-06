import React from 'react';
import { Text } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

import {
  CNTextFormField,
  CNDatePicker,
  CNSelectDropdownField,
} from '../../atoms';
import { ProfileBlock } from '../../molecules';
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

const EditPersonal = ({
  edit,
  setEdit,
  userInfo,
  profileLoading,
  updateLoading,
  updateUser,
}: Props) => {
  interface FormValues {
    values: any;
    full_name: string;
    email: string;
    dob: string;
    sex: string;
    citizenship: string;
    handleChange: any;
  }

  const schema = yup.object({
    full_name: yup.string().required('Full Name is a required field'),
    dob: yup.string().required('Date of birth is a required field'),
    sex: yup.string().required('Gender is a required field'),
    citizenship: yup.string().required('Citizenship is a required field'),
  });

  return (
    <>
      <Formik
        validationSchema={schema}
        initialValues={{
          full_name: userInfo.full_name,
          email: userInfo.email,
          dob: userInfo.dob,
          sex: userInfo.sex,
          citizenship: userInfo.citizenship,
        }}
        onSubmit={(data) => {
          updateUser(data);
        }}
        enableReinitialize
      >
        {(props: FormValues) => (
          <Form
            style={{
              width: '100%',
            }}
          >
            <ProfileBlock
              title={'Personal Details'}
              profileLoading={profileLoading}
              updateLoading={updateLoading}
              edit={edit}
              setEdit={setEdit}
              formikProps={props}
            >
              <Field
                name="full_name"
                placeholder=""
                value={props.values.full_name}
                onChange={props.handleChange}
                component={CNTextFormField}
                customlabel="Full Name"
                userData={userInfo.full_name}
                required
              />

              <Text
                fontSize="lg"
                customlabel="Student Email"
                userData={userInfo.email}
              >
                {userInfo.email}
              </Text>

              <Field
                name="dob"
                formInputName="dob"
                placeholder="Date of birth"
                selectedDate={Date.parse(props.values.dob)}
                component={CNDatePicker}
                customlabel="Date of birth"
                userData={userInfo.dob}
                required
              />
              <Field
                name="sex"
                placeholder={props.values.sex}
                options={[
                  {
                    label: 'Male',
                    value: 'Male',
                  },
                  {
                    label: 'Female',
                    value: 'Female',
                  },
                  {
                    label: 'Others',
                    value: 'Others',
                  },
                  {
                    label: 'Rather not say',
                    value: 'Not-Say',
                  },
                ]}
                component={CNSelectDropdownField}
                customlabel="Gender"
                userData={userInfo.sex}
                onChange={props.handleChange}
                required
              />
              <Field
                name="citizenship"
                placeholder={props.values.citizenship}
                options={[
                  {
                    label: 'Malaysian',
                    value: 'Malaysian',
                  },
                  {
                    label: 'International',
                    value: 'International',
                  },
                ]}
                component={CNSelectDropdownField}
                customlabel="Citizenship"
                userData={userInfo.citizenship}
                onChange={props.handleChange}
                required
              />
            </ProfileBlock>
          </Form>
        )}
      </Formik>
    </>
  );
};
React.memo(EditPersonal);
export default EditPersonal;
