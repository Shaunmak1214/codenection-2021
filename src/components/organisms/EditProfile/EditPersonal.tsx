import React from 'react';
import { ProfileBlock } from '../../molecules';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import {
  CNTextFormField,
  CNDatePicker,
  CNSelectDropdownField,
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
    full_name: yup.string().required('fullname'),
    email: yup.string().required('email'),
    dob: yup.string().required('dob'),
    sex: yup.string().required('gender'),
    citizenship: yup.string().required('citzentship'),
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
          <Form>
            <ProfileBlock
              updateUser={updateUser}
              title={'Personal Details'}
              profileLoading={profileLoading}
              updateLoading={updateLoading}
              edit={edit}
              setEdit={setEdit}
            >
              <Field
                name="full_name"
                placeholder=""
                value={props.values.full_name}
                onChange={props.handleChange}
                component={CNTextFormField}
                customlabel="Full Name"
                userData={userInfo.full_name}
              />
              <Field
                name="email"
                placeholder=""
                component={CNTextFormField}
                customlabel="Student Email"
                userData={userInfo.email}
                value={props.values.email}
                onChange={props.handleChange}
              />

              <Field
                name="dob"
                formInputName="dob"
                placeholder="Date of birth"
                selectedDate={Date.parse(props.values.dob)}
                component={CNDatePicker}
                customlabel="Date of birth"
                userData={userInfo.dob}
              />
              <Field
                name="sex"
                placeholder={props.values.sex}
                options={[
                  {
                    label: 'Male',
                    value: 'male',
                  },
                  {
                    label: 'Female',
                    value: 'female',
                  },
                  {
                    label: 'Others',
                    value: 'others',
                  },
                  {
                    label: 'Rather not say',
                    value: 'not-say',
                  },
                ]}
                component={CNSelectDropdownField}
                customlabel="Gender"
                userData={userInfo.sex}
                onChange={props.handleChange}
              />
              <Field
                name="citizenship"
                placeholder={props.values.citizenship}
                options={[
                  {
                    label: 'Malaysian',
                    value: 'malaysian',
                  },
                  {
                    label: 'International',
                    value: 'international',
                  },
                ]}
                component={CNSelectDropdownField}
                customlabel="Citizenship"
                userData={userInfo.citizenship}
                onChange={props.handleChange}
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
