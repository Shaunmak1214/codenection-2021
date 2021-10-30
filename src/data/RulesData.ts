interface RulesDetails {
  idx: number;
  title: string;
  desc: string;
}

const RulesData: RulesDetails[] = [
  {
    idx: 0,
    title: 'Registration Details',
    desc: 'CodeNection 2021 Hackathon will be opened for registration on 31 October, 2021 (dates are subject to change at the discretion of the organizers)',
  },
  {
    idx: 1,
    title: 'Registration Details',
    desc: 'Teams that have successfully registered for the event will be sent a confirmation email within 2 weeks.',
  },
  {
    idx: 2,
    title: 'Team Formation Rules',
    desc: 'Participants must form a team that consists of exactly three (3) members. Teams that have more or less members than the required amount will not be allowed to participate in this competition.',
  },
  {
    idx: 3,
    title: 'Team Formation Rules',
    desc: 'Any teams that register for the competition after the deadline will not be allowed to participate in this competition.',
  },
  {
    idx: 4,
    title: 'Team Formation Rules',
    desc: 'All three (3) members can either be from the same faculty, or a mixture of students from multiple faculties.',
  },
  {
    idx: 5,
    title: 'Team Formation Rules',
    desc: 'Participants must not currently be a member of CodeNection’s committee or be a volunteer of this event.',
  },
];

export { RulesData };
