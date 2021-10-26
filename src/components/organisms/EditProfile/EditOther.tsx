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
const EditOther = ({
  edit,
  setEdit,
  userInfo,
  profileLoading,
  updateLoading,
  updateUser,
}: Props) => {
  interface FormValues {
    address: string;
    shirt_size: string;
    handleChange: any;
    values: any;
  }
  const schema = yup.object({
    address: yup.string().nullable(true),
    shirt_size: yup.string().nullable(true),
  });

  return (
    <Formik
      validationSchema={schema}
      initialValues={{
        address: userInfo.address,
        shirt_size: userInfo.shirt_size,
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
            title={'Other Details'}
          >
            <Field
              name="address"
              placeholder=""
              value={props.values.address}
              onChange={props.handleChange}
              component={CNTextFormField}
              customlabel="Delivery location/address"
              userData={userInfo.address}
            />
            <Field
              name="shirt_size"
              placeholder=""
              component={CNTextFormField}
              customlabel="Shirt size"
              userData={userInfo.shirt_size}
              value={props.values.shirt_size}
              onChange={props.handleChange}
            />
          </ProfileBlock>
        </Form>
      )}
    </Formik>
  );
};
React.memo(EditOther);
export default EditOther;
