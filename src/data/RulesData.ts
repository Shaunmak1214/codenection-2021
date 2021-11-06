interface RulesDetails {
  idx: number;
  title: string;
  desc: string;
}

const RulesData: RulesDetails[] = [
  {
    idx: 0,
    title: 'Team Formation Rules',
    desc: 'Participants are allowed to participate Open Category Contest as long as they are currently pursuing education in any Malaysian university/college, regardless of nationality.',
  },
  {
    idx: 1,
    title: 'General Rules',
    desc: 'Only the team leader will be required to register for the competition on HackerRank. It is mandatory that the team leader joins the competition using the same username that was submitted during registration.',
  },
  {
    idx: 2,
    title: 'Team Formation Rules',
    desc: 'Participants must form a team that consists of exactly three (3) members. Teams that have more or less members than the required amount will not be allowed to participate in this competition.',
  },
  {
    idx: 3,
    title: 'Registration Details',
    desc: 'Teams that have successfully registered for the event will be sent a confirmation email within 2 weeks.',
  },
  {
    idx: 4,
    title: 'Team Formation Rules',
    desc: 'A given participant may only be a part of one (1) team throughout the whole duration of both the Closed and Open Category competitions.',
  },
  {
    idx: 5,
    title: 'Team Formation Rules',
    desc: 'Any teams that register for the competition after the deadline will not be allowed to participate in this competition.',
  },
];

export { RulesData };
