import React, { useState } from 'react';
import { ProfileBlock } from '../../molecules';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { CNTextFormField } from '../../atoms';
import { User } from '../../../data/userData';
const EditOther = () => {
  interface FormValues {
    address: string;
    size: string;
  }
  const schema = yup.object({
    full_name: yup.string().required('fullname'),
    email: yup.string().required('email'),
  });

  const [formValues, setFormValues] = useState<FormValues>({
    address: User[0].address,
    size: User[0].size,
  });

  const handleOnChange = (e: any) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  return (
    <Formik
      validationSchema={schema}
      initialValues={{
        full_name: '',
        email: '',
      }}
      onSubmit={(data) => console.log(data)}
    >
      {() => (
        <Form>
          {User.map((user) => {
            return (
              <ProfileBlock key={user.id} title={'Other Details'}>
                <Field
                  name="address"
                  placeholder=""
                  value={formValues.address}
                  onChange={handleOnChange}
                  component={CNTextFormField}
                  customlabel="Delivery location/address"
                  userData={user.address}
                />
                <Field
                  name="size"
                  placeholder=""
                  component={CNTextFormField}
                  customlabel="Shirt size"
                  userData={user.size}
                  value={formValues.size}
                  onChange={handleOnChange}
                />
              </ProfileBlock>
            );
          })}
        </Form>
      )}
    </Formik>
  );
};

export default EditOther;
