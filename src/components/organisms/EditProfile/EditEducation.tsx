import React, { useState } from 'react';
import { ProfileBlock } from '../../molecules';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { CNTextFormField } from '../../atoms';
import { User } from '../../../data/userData';
const EditEducation = () => {
  interface FormValues {
    university: string;
    major: string;
    education: string;
    coding: string;
    gpa: string;
    graduate: string;
  }
  const schema = yup.object({
    full_name: yup.string().required('fullname'),
    email: yup.string().required('email'),
  });

  const [formValues, setFormValues] = useState<FormValues>({
    university: User[0].university,
    major: User[0].major,
    education: User[0].education,
    coding: User[0].coding,
    gpa: User[0].gpa,
    graduate: User[0].graduate,
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
              <ProfileBlock key={user.id} title={'Education Details'}>
                <Field
                  name="university"
                  placeholder=""
                  value={formValues.university}
                  onChange={handleOnChange}
                  component={CNTextFormField}
                  customlabel="Name of institution/university"
                  userData={user.university}
                />
                <Field
                  name="major"
                  placeholder=""
                  component={CNTextFormField}
                  customlabel="Field major"
                  userData={user.major}
                  value={formValues.major}
                  onChange={handleOnChange}
                />
                <Field
                  name="education"
                  placeholder=""
                  component={CNTextFormField}
                  customlabel="Level of education"
                  userData={user.education}
                  onChange={handleOnChange}
                  value={formValues.education}
                />
                <Field
                  name="coding"
                  placeholder=""
                  component={CNTextFormField}
                  customlabel="Coding proficiency"
                  userData={user.coding}
                  value={formValues.coding}
                  onChange={handleOnChange}
                />
                <Field
                  name="gpa"
                  placeholder=""
                  component={CNTextFormField}
                  customlabel="GPA"
                  userData={user.gpa}
                  value={formValues.gpa}
                  onChange={handleOnChange}
                />
                <Field
                  name="graduate"
                  placeholder=""
                  component={CNTextFormField}
                  customlabel="Expected graduation date"
                  userData={user.graduate}
                  value={formValues.graduate}
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

export default EditEducation;
