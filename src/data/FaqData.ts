//import { string } from 'yup/lib/locale';

// interface FaqObj {
//   category: string;
//   details: data[];
// }

interface Data {
  All: FaqObject[];
  General: FaqObject[];
  Registration: FaqObject[];
  Login: FaqObject[];
  Team: FaqObject[];
}

interface FaqObject {
  idx: number;
  question: string;
  ans: string;
}

const FaqData: Data = {
  All: [
    {
      idx: 0,
      question: 'Lorem0',
      ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatenatus fugiat reiciendis iste eos, eveniet fuga unde voluptatibus perspiciatis esse cumque, ratione ad quibusdam pariatur',
    },
    {
      idx: 1,
      question: 'Lorem01',
      ans: "'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatenatus fugiat reiciendis iste eos, eveniet fuga unde voluptatibus perspiciatis esse cumque, ratione ad quibusdam pariatur",
    },
  ],
  General: [
    {
      idx: 0,
      question: 'Lorem1',
      ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatenatus fugiat reiciendis iste eos, eveniet fuga unde voluptatibus perspiciatis esse cumque, ratione ad quibusdam pariatur? Nostruveniam ipsam sed voluptatum.',
    },
    {
      idx: 1,
      question: 'Lorem11',
      ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatenatus fugiat reiciendis iste eos, eveniet fuga unde voluptatibus perspiciatis esse cumque, ratione ad quibusdam pariatur? Nostruveniam ipsam sed voluptatum.',
    },
    {
      idx: 2,
      question: 'Lorem12',
      ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatenatus fugiat reiciendis iste eos, eveniet fuga unde voluptatibus perspiciatis esse cumque, ratione ad quibusdam pariatur? Nostruveniam ipsam sed voluptatum.',
    },
  ],
  Registration: [
    {
      idx: 0,
      question: 'Lorem2',
      ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatenatus fugiat reiciendis iste eos, eveniet fuga unde voluptatibus perspiciatis esse cumque, ratione ad quibusdam pariatur? Nostruveniam ipsam sed voluptatum.',
    },
    {
      idx: 1,
      question: 'Lorem21',
      ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatenatus fugiat reiciendis iste eos, eveniet fuga unde voluptatibus perspiciatis esse cumque, ratione ad quibusdam pariatur? Nostruveniam ipsam sed voluptatum.',
    },
    {
      idx: 2,
      question: 'Lorem22',
      ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatenatus fugiat reiciendis iste eos, eveniet fuga unde voluptatibus perspiciatis esse cumque, ratione ad quibusdam pariatur? Nostruveniam ipsam sed voluptatum.',
    },
    {
      idx: 3,
      question: 'Lorem23',
      ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatenatus fugiat reiciendis iste eos, eveniet fuga unde voluptatibus perspiciatis esse cumque, ratione ad quibusdam pariatur? Nostruveniam ipsam sed voluptatum.',
    },
  ],
  Login: [
    {
      idx: 0,
      question: 'Lorem3',
      ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatenatus fugiat reiciendis iste eos, eveniet fuga unde voluptatibus perspiciatis esse cumque, ratione ad quibusdam pariatur? Nostruveniam ipsam sed voluptatum.',
    },
    {
      idx: 1,
      question: 'Lorem31',
      ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatenatus fugiat reiciendis iste eos, eveniet fuga unde voluptatibus perspiciatis esse cumque, ratione ad quibusdam pariatur? Nostruveniam ipsam sed voluptatum.',
    },
    {
      idx: 2,
      question: 'Lorem32',
      ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatenatus fugiat reiciendis iste eos, eveniet fuga unde voluptatibus perspiciatis esse cumque, ratione ad quibusdam pariatur? Nostruveniam ipsam sed voluptatum.',
    },
    {
      idx: 3,
      question: 'Lorem33',
      ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatenatus fugiat reiciendis iste eos, eveniet fuga unde voluptatibus perspiciatis esse cumque, ratione ad quibusdam pariatur? Nostruveniam ipsam sed voluptatum.',
    },
  ],
  Team: [
    {
      idx: 0,
      question: 'Lorem3',
      ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatenatus fugiat reiciendis iste eos, eveniet fuga unde voluptatibus perspiciatis esse cumque, ratione ad quibusdam pariatur? Nostruveniam ipsam sed voluptatum.',
    },
    {
      idx: 1,
      question: 'Lorem31',
      ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatenatus fugiat reiciendis iste eos, eveniet fuga unde voluptatibus perspiciatis esse cumque, ratione ad quibusdam pariatur? Nostruveniam ipsam sed voluptatum.',
    },
    {
      idx: 2,
      question: 'Lorem32',
      ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatenatus fugiat reiciendis iste eos, eveniet fuga unde voluptatibus perspiciatis esse cumque, ratione ad quibusdam pariatur? Nostruveniam ipsam sed voluptatum.',
    },
    {
      idx: 3,
      question: 'Lorem33',
      ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatenatus fugiat reiciendis iste eos, eveniet fuga unde voluptatibus perspiciatis esse cumque, ratione ad quibusdam pariatur? Nostruveniam ipsam sed voluptatum.',
    },
    {
      idx: 4,
      question: 'Lorem34',
      ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatenatus fugiat reiciendis iste eos, eveniet fuga unde voluptatibus perspiciatis esse cumque, ratione ad quibusdam pariatur? Nostruveniam ipsam sed voluptatum.',
    },
  ],
};

export { FaqData };
