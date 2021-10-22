import React, { useState } from 'react';
import { ProfileBlock } from '../../molecules';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { CNTextFormField } from '../../atoms';
import { User } from '../../../data/userData';
const EditJob = () => {
  interface FormValues {
    job: string;
    resume: string;
  }
  const schema = yup.object({
    full_name: yup.string().required('fullname'),
    email: yup.string().required('email'),
  });

  const [formValues, setFormValues] = useState<FormValues>({
    job: User[0].job,
    resume: User[0].resume,
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
              <ProfileBlock key={user.id} title={'Job preferences'}>
                <Field
                  name="job"
                  placeholder=""
                  value={formValues.job}
                  onChange={handleOnChange}
                  component={CNTextFormField}
                  customlabel="Interest job position"
                  userData={user.job}
                />
                <Field
                  name="resume"
                  placeholder=""
                  component={CNTextFormField}
                  customlabel="Resume"
                  userData={user.resume}
                  value={formValues.resume}
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

export default EditJob;
