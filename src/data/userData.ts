interface UserObject {
  name: string;
  email: string;
  password: string;
  dob: string;
  gender: string;
  citizenship: string;
  id: number;
  university: string;
  major: string;
  education: string;
  coding: string;
  gpa: string;
  graduate: string;
  job: string;
  resume: string;
  address: string;
  size: string;
}

const User: UserObject[] = [
  {
    id: 1,
    name: 'Tan Zi Sheng',
    email: '1201100837@student.mmu.edu.my',
    password: 'lol',
    dob: '11',
    gender: 'Male',
    citizenship: 'Malaysia',
    university: 'Multimedia University',
    major: 'Computer Science',
    education: 'Bachelor"s degreefffffffffffffffffffffffffffffffffffffff',
    coding: 'Beginner',
    gpa: '4.0',
    graduate: '12/12/2023',
    job: 'Data Scientist',
    resume: '',
    address: 'Jalan ABC Selangor',
    size: 'S',
  },
];

export { User };
