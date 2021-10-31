interface Data {
  Registration: FaqObject[];
  Technical: FaqObject[];
  Competition: FaqObject[];
  Prizes: FaqObject[];
  Preparation: FaqObject[];
  Summary: FaqObject[];
}

interface FaqObject {
  idx: number;
  question: string;
  ans: string;
}

interface FaqCategory {
  idx: number;
  category: string;
}

const FaqCategories: FaqCategory[] = [
  {
    idx: 1,
    category: 'Registration',
  },
  {
    idx: 2,
    category: 'Technical',
  },
  {
    idx: 3,
    category: 'Competition',
  },
  {
    idx: 4,
    category: 'Prizes',
  },
  {
    idx: 5,
    category: 'Preparation',
  },
  {
    idx: 6,
    category: 'Summary',
  },
];

const FaqData: Data = {
  Registration: [
    {
      idx: 0,
      question: 'Who is allowed to participate?',
      ans: 'For the Closed Category, only Multimedia University (MMU) students from Cyberjaya and Melaka campus will be allowed to register for it while the Open Category will be opened to all students who are currently studying in a Malaysian university/college!!',
    },
    {
      idx: 1,
      question: 'Is there any registration fee for this event?',
      ans: 'No, this event is entirely FREE and we do not collect any kind of fee from our participants!',
    },
    {
      idx: 2,
      question: 'When and where can I register?',
      ans: 'Registration for both the Open and Closed category will be opened on 31st October 2021. You may register for this event by clicking the “Register Now” button on the main page of the CodeNection website. Registration will close on 7th December 2021 (Closed Category) and 9th December 2021 (Open Category)',
    },
    {
      idx: 3,
      question: 'Can I join this competition without a team?',
      ans: 'No, the contest strictly only allows a team of 3 people to register for this event. If you don’t have enough team members, you may look for people who are interested in teaming up with you by joining our official Discord server.',
    },
    {
      idx: 4,
      question:
        'For the Open Category, is it a must for all the team members to be from the same institution?',
      ans: 'No, we do not set any restrictions for this. Therefore, a team can either have all 3 members from the same institution, or have a combination of members from different institutions.',
    },
  ],
  Technical: [
    {
      idx: 0,
      question: 'What programming languages are allowed in this competition?',
      ans: 'The programming languages that are allowed to be used are Python, C/C++, Java and JavaScript. Participants are prohibited from using any programming language other than the ones that are stated here.',
    },
    {
      idx: 1,
      question:
        'Where will the solutions to the problems be submitted, and by whom?',
      ans: 'All of the solutions must be submitted through the competition page on HackerRank, and only the team leader is required to do so.',
    },
  ],
  Competition: [
    {
      idx: 0,
      question: 'How many rounds are there in each category?',
      ans: 'The Closed Category will only have 1 round. The Open Category will instead consist of 2 rounds in total, which are the Preliminary Round and Final Round.',
    },
    {
      idx: 1,
      question: 'What exactly is the “Private Leaderboard”?',
      ans: 'This is the leaderboard that will be shown on the CodeNection 2021 website. As we can’t prevent non-registered individuals from joining the competition on HackerRank, we will need to filter them out of the leaderboard and only show participants who have officially registered through our website. Therefore, the Private Leaderboard on our website will be used as the main reference for team rankings.',
    },
    {
      idx: 2,
      question: 'Who will be eligible to participate in the final round?',
      ans: 'Only the top 1/3 of the teams from the Preliminary Round of the Open Category (taken from the Private Leaderboard) will be allowed to proceed to the final round. (T&C applied)',
    },
    {
      idx: 3,
      question: 'What will be the format of this competition?',
      ans: 'Participants will receive a PDF file containing the problem set as soon as the competition timer begins. The problem set will contain 5 questions for both the Closed Category and the Open Category Preliminary Round, while the Open Category Final Round will have 10 questions instead.',
    },
    {
      idx: 4,
      question: 'When will the competition be held?',
      ans: '<ol style="margin-left: 15px"><li>Closed Category <br> Date: 10 December 2021 <br> Duration: 3 hours</li><li>Open Category - Preliminary Round <br> Date: 12 December 2021 <br> Duration: 2 hours</li><li>Open Category - Final Round <br> Date: 19 December 2021 <br> Duration: 5 hours</li></ol>',
    },
    {
      idx: 5,
      question: 'What are the platforms that will be used?',
      ans: 'As our event will be held virtually, Airmeet will be used for the opening ceremony, participant’s briefing session and workshop event while HackerRank will be the platform used for the competition itself. ',
    },
  ],
  Prizes: [
    {
      idx: 0,
      question: 'Cash Prizes',
      ans: 'Closed Category <ul style="margin-left: 25px"><li>1st place: MYR 500</li><li>2nd place: MYR 300</li><li>3rd place: MYR 100</li></ul> <br> Open Category <ul style="margin-left: 25px"><li>1st place: MYR 3000</li><li>2nd place: MYR 2000</li><li>3rd place: MYR 1000</li><li>Best female team: MYR 500</li><li>Best Uni-Diversity Team: MYR 500 (each member must be from a different institution to be eligible for this award)</li></ul>',
    },
    {
      idx: 1,
      question: 'Hackathon Kits',
      ans: 'CodeNection Event Shirt, CodeNection Event Drawstring Bag, *T&C applied (Only final round participants)',
    },
    {
      idx: 2,
      question: 'Certificates',
      ans: 'E-Certificates will be given to every participant regardless of their achievement during the competition. The Top 10 teams will be given a hardcopy certificate through mailing after the competition.',
    },
  ],
  Preparation: [
    {
      idx: 0,
      question:
        'Will there be a workshop that participants can attend in preparation for the competition?',
      ans: 'Yes! In fact, we are going to conduct TWO workshops that will be covering the various concepts of computing algorithms in order to prepare our participants for the competition. Below is the Google Form link for the workshop registration, more information regarding the workshop can be found within the form itself. https://forms.gle/G1UWPshB8YTTmdcF7',
    },
    {
      idx: 1,
      question:
        'Are there any references that I can refer to so that I can be well-prepared for this competition?',
      ans: 'If you have registered for any of the hackathons, you will receive a “Hacker Info Packet” via email, that includes necessary information of the event and several reference materials relating to competitive programming and computing algorithms for you to explore. ',
    },
  ],
  Summary: [
    {
      idx: 0,
      question: 'Who is allowed to participate?',
      ans: 'Closed Category - Only Multimedia University (MMU) students. Open Category - Any students who are studying in Malaysian university/college! (including MMU students)',
    },
    {
      idx: 1,
      question: 'When and Where can I register?',
      ans: 'Registration for both categories will be opened on 31 October 2021 on our official website',
    },
    {
      idx: 2,
      question: 'Is There Any Registration Fee?',
      ans: 'No, this event is entirely FREE!',
    },
    {
      idx: 3,
      question: 'What programming languages are allowed?',
      ans: 'Only Python, C/C++, Java and JavaScript',
    },
    {
      idx: 4,
      question: 'How many rounds are there?',
      ans: 'Closed Category - Only 1 round, Open Category - 2 rounds (Preliminary & Finals)',
    },
  ],
};

export { FaqData, FaqCategories };
