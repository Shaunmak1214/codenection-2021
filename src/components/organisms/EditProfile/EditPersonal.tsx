import React, { useState } from 'react';
import { ProfileBlock } from '../../molecules';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { CNTextFormField } from '../../atoms';
import { User } from '../../../data/userData';
const EditPersonal = () => {
  interface FormValues {
    full_name: string;
    email: string;
    dob: string;
    gender: string;
    citizenship: string;
  }
  const schema = yup.object({
    full_name: yup.string().required('fullname'),
    email: yup.string().required('email'),
  });

  const [formValues, setFormValues] = useState<FormValues>({
    full_name: User[0].name,
    email: User[0].email,
    dob: User[0].dob,
    gender: User[0].gender,
    citizenship: User[0].citizenship,
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
              <ProfileBlock key={user.id} title={'Personal Details'}>
                <Field
                  name="full_name"
                  placeholder=""
                  value={formValues.full_name}
                  onChange={handleOnChange}
                  component={CNTextFormField}
                  customlabel="Full Name"
                  userData={user.name}
                />
                <Field
                  name="email"
                  placeholder=""
                  component={CNTextFormField}
                  customlabel="Student Email"
                  userData={user.email}
                  value={formValues.email}
                  onChange={handleOnChange}
                />
                <Field
                  name="password"
                  placeholder=""
                  component={CNTextFormField}
                  customlabel="Password"
                  userData={user.password}
                  onChange={handleOnChange}
                />
                <Field
                  name="dob"
                  placeholder=""
                  component={CNTextFormField}
                  customlabel="Date of birth"
                  userData={user.dob}
                  value={formValues.dob}
                  onChange={handleOnChange}
                />
                <Field
                  name="gender"
                  placeholder=""
                  component={CNTextFormField}
                  customlabel="Gender"
                  userData={user.gender}
                  value={formValues.gender}
                  onChange={handleOnChange}
                />
                <Field
                  name="citizenship"
                  placeholder=""
                  component={CNTextFormField}
                  customlabel="Citizenship"
                  userData={user.citizenship}
                  value={formValues.citizenship}
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

export default EditPersonal;
