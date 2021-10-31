import React from 'react';
import {
  Center,
  Container,
  Heading,
  VStack,
  Text,
  Link,
} from '@chakra-ui/layout';
import { CNSpacer, SecondaryText } from '../../atoms';

const RulesFullSection = () => {
  return (
    <>
      <CNSpacer size="md" />
      <CNSpacer size="sm" />
      <Center w="100%">
        <Container maxW="container.xl" w="100%" h="100%">
          <VStack w="100%">
            <VStack className="rules-wrapper" w="100%" alignItems="flex-start">
              <Heading fontSize="20px">Rules</Heading>
              <ul
                style={{
                  marginLeft: '40px',
                  lineHeight: '32px',
                }}
              >
                <li>
                  <a href="#closed">CodeNection 2021 Rules (Closed Category)</a>
                </li>
                <li>
                  <a href="#open">CodeNection 2021 Rules (Open Category)</a>
                </li>
              </ul>
            </VStack>
            <CNSpacer size="md" />
            <Heading fontSize="30px" id="closed">
              CodeNection 2021 Rules (Closed Category)
            </Heading>
            <CNSpacer size="3xs" />
            <VStack className="rules-wrapper" w="100%" alignItems="flex-start">
              <Text
                style={{
                  lineHeight: '32px',
                }}
              >
                By registering for this competition, you hereby indicate that
                you have completely read, understood and agree to be bound by
                all of the terms below at all times. If in any case you disagree
                with one or more of the terms that are stated below, please
                refrain from registering yourself as a participant of this
                event.
              </Text>
              <CNSpacer size="sm" />
              <SecondaryText fontSize="xl" fontWeight="600">
                Competition Structure & General Rules
              </SecondaryText>

              <ol
                style={{
                  marginLeft: '20px',
                  lineHeight: '32px',
                }}
                className="rules-lists"
              >
                <li>
                  <Text>
                    This competition is completely free to participate and will
                    only have one (1) round. It will be conducted online on 10
                    December 2021 using HackerRank as the main platform of the
                    competition. The competition duration is three (3) hours.
                  </Text>
                </li>
                <li>
                  <Text>
                    The exact event flow will be stated in the “Hacker Info
                    Packet” that participants will receive prior to the event.
                  </Text>
                </li>
                <li>
                  <Text>
                    Teams are strictly prohibited from communicating with each
                    other, or providing assistance to others in any shape or
                    form, during the duration of the competition.
                  </Text>
                </li>
                <li>
                  <Text>
                    Only the team leader will be required to register for the
                    competition on HackerRank. It is mandatory that the team
                    leader joins the competition using the same username that
                    was submitted during registration.
                  </Text>
                </li>
                <li>
                  <Text>
                    When the competition begins, all participants will be given
                    access to a PDF file that contains the problem set, but only
                    the team leader is required to submit the final answer for
                    his/her team on the HackerRank platform before the end of
                    the round.
                  </Text>
                </li>
                <li>
                  <Text>
                    The finalized results of the competition will be announced
                    on CodeNection’s official website, and social media accounts
                    a day after the end of the competition.
                  </Text>
                </li>
                <li>
                  <Text>
                    Prizes will be awarded in the form of cash using Malaysian
                    Ringgit (MYR) as the currency, unless stated otherwise by
                    the event organizer.
                  </Text>
                </li>
                <li>
                  <Text>
                    In the event that participants come across a possible
                    ambiguity or error related to the problems set, they may
                    seek clarification by reaching out to the organizer of this
                    contest. The problems prepared are thoroughly checked and
                    proofread, therefore the participants may be asked to read
                    the problem statement again if no form of error is found by
                    the organizer.
                  </Text>
                </li>
                <li>
                  <Text>
                    Upon submission of your code, you hereby grant us all the
                    rights to edit, copy, reproduce or publicize your code,
                    either partly or fully in any form or shape, without us
                    needing to provide you any additional compensation.
                  </Text>
                </li>
                <li>
                  <Text>
                    Any decisions made by the judges of this competition are
                    final and non-debatable.
                  </Text>
                </li>
              </ol>
              <CNSpacer size="sm" />
              <SecondaryText fontSize="xl" fontWeight="600">
                Registration Details
              </SecondaryText>
              <ol
                style={{
                  marginLeft: '20px',
                  lineHeight: '32px',
                }}
              >
                <li>
                  <Text>
                    CodeNection 2021 will be opened for registration on 31
                    October, 2021 (dates are subject to change at the discretion
                    of the organizers)
                  </Text>
                </li>
                <li>
                  <Text>
                    Teams that have successfully registered for the event will
                    be sent a confirmation email within 2 weeks.
                  </Text>
                </li>
              </ol>
              <CNSpacer size="sm" />
              <SecondaryText fontSize="xl" fontWeight="600">
                Team Formation Rules
              </SecondaryText>
              <ol
                style={{
                  marginLeft: '20px',
                  lineHeight: '32px',
                }}
              >
                <li>
                  <Text>
                    Participants must form a team that consists of exactly three
                    (3) members. Teams that have more or less members than the
                    required amount will not be allowed to participate in this
                    competition.
                  </Text>
                </li>
                <li>
                  <Text>
                    Participants must be a current student of Multimedia
                    University Cyberjaya/Melaka.
                  </Text>
                </li>
                <li>
                  <Text>
                    A given participant may only be a part of one (1) team
                    throughout the duration of the whole competition.
                  </Text>
                </li>
                <li>
                  <Text>
                    Any teams that register for the competition after the
                    deadline will not be allowed to participate in this
                    competition.
                  </Text>
                </li>
                <li>
                  <Text>
                    All three (3) members can either be from the same faculty,
                    or a mixture of students from multiple faculties.
                  </Text>
                </li>
                <li>
                  <Text>
                    Teams must ensure that their members’ details are accurate
                    and error-free before the registration deadline. Any teams
                    that are found to have fallacious details will be
                    disqualified from the competition immediately.
                  </Text>
                </li>
                <li>
                  <Text>
                    Team formation details cannot be changed once the
                    registration is officially closed.
                  </Text>
                </li>
                <li>
                  <Text>
                    Team names used must not include any form of profane,
                    racist, lewd or derogatory words.
                  </Text>
                </li>
                <li>
                  <Text>
                    Participants must not currently be a member of CodeNection’s
                    committee or be a volunteer of this event.
                  </Text>
                </li>
              </ol>
              <CNSpacer size="sm" />
              <SecondaryText fontSize="xl" fontWeight="600">
                Computing Environment
              </SecondaryText>
              <ol
                style={{
                  marginLeft: '20px',
                  lineHeight: '32px',
                }}
              >
                <li>
                  <Text>
                    The following is a list of programming languages that
                    participants are allowed to use in this competition:
                  </Text>
                  <ul
                    style={{
                      marginLeft: '40px',
                      lineHeight: '32px',
                    }}
                  >
                    <li>Python</li>
                    <li>C/C++</li>
                    <li>Java</li>
                    <li>JavaScript</li>
                  </ul>
                </li>
                <li>
                  <Text>
                    All solutions to the problems are to be submitted through
                    HackerRank.
                  </Text>
                </li>
                <li>
                  <Text>
                    The problems will vary in difficulty, and are not arranged
                    in any particular order.
                  </Text>
                </li>
              </ol>
              <CNSpacer size="sm" />
              <SecondaryText fontSize="xl" fontWeight="600">
                Disqualification
              </SecondaryText>
              <Text
                style={{
                  lineHeight: '32px',
                }}
              >
                You, your team member, or the entirety of your team, may be met
                with immediate disqualification from the competition if we
                believe that there was an attempt made by you to compromise the
                legitimacy of the competition, including:
              </Text>
              <CNSpacer size="3xs" />
              <ol
                style={{
                  marginLeft: '20px',
                  lineHeight: '32px',
                }}
              >
                <li>
                  <Text>
                    Plagiarism in any shape or form in the content of your
                    submitted code;
                  </Text>
                </li>
                <li>
                  <Text>
                    Sharing or usage of information regarding any problems
                    prepared in the competition (including but not limited to,
                    its content and solution) with any party/team before the end
                    of the competition;
                  </Text>
                </li>
                <li>
                  <Text>
                    Team leader’s HackerRank username is not consistent with the
                    one submitted during registration when participating the
                    competition;
                  </Text>
                </li>
                <li>
                  <Text>
                    Participating in more than one team, or participating in a
                    different team than the one that you initially registered
                    with;
                  </Text>
                </li>
                <li>
                  <Text>
                    Submitting false or misleading information regarding
                    yourself during registration;
                  </Text>
                </li>
                <li>
                  <Text>
                    Failure to comply with any of the Terms & Conditions of the
                    competition;
                  </Text>
                </li>
                <li>
                  <Text>
                    Misbehaving with other participants or contest
                    administrators at any stage of the competition;
                  </Text>
                </li>
                <li>
                  <Text>
                    Enlisting remote support from individuals outside of your
                    team during the course of the competition (including
                    collaborating with other teams);
                  </Text>
                </li>
                <li>
                  <Text>
                    Getting involved in any malicious activity during any stage
                    of the competition;
                  </Text>
                </li>
                <li>
                  <Text>
                    Any form of harassment to other participants, including
                    threatening, offensive, and/or hateful comments directed
                    towards an individual or a certain group.
                  </Text>
                </li>
                <li>
                  <Text>
                    Content submitted is found to be in any way lewd, racist,
                    obscene, pornographic, sexist, or otherwise deemed
                    inappropriate/unfit to be included in the competition.
                  </Text>
                </li>
              </ol>
              <CNSpacer size="3xs" />
              <Text
                style={{
                  lineHeight: '32px',
                }}
              >
                Disqualified participants/teams will automatically forfeit any
                prizes that they are eligible to receive, left to the sole
                discretion of the organizers of this event. The disqualified
                participants may also be banned from participating in any future
                event relating to CodeNection or any other event organized by IT
                Society MMU Cyberjaya, depending on the severity of their Terms
                & Conditions violations.
              </Text>
              <CNSpacer size="sm" />
              <SecondaryText fontSize="xl" fontWeight="600">
                Privacy Terms
              </SecondaryText>
              <ol
                style={{
                  marginLeft: '20px',
                  lineHeight: '32px',
                }}
              >
                <li>
                  <Text>
                    To maintain the legitimacy of this competition, and to also
                    verify your eligibility to participate, we collect basic
                    personal information about you such as your name, phone
                    number, institution, course of study, year of study and
                    t-shirt size. All of this information will be provided by
                    you during registration. We also require you to provide us
                    with your student email and/or student ID in order for us to
                    verify that you are a student of the institution you have
                    associated yourself with when you registered for this event.
                  </Text>
                </li>
                <li>
                  <Text>
                    Certain information such as your name, username, team name,
                    and institution that you have specified during registration
                    may be displayed publicly on CodeNection’s official website
                    and/or social media accounts for promotion purposes.
                  </Text>
                </li>
                <li>
                  <Text
                    style={{
                      lineHeight: '32px',
                    }}
                  >
                    Your data and personal information may also be accessible by
                    our sponsors for educational programmes, internships, or job
                    offerings.
                  </Text>
                </li>
              </ol>
              <CNSpacer size="3xs" />
              <Text>
                If you wish to not have any/all of your information disclosed
                publicly, please email us at{' '}
                <Link color="blue" href="mailto:its.codenection@gmail.com">
                  its.codenection@gmail.com.
                </Link>
              </Text>
            </VStack>

            <CNSpacer size="xl" />
            <Heading fontSize="30px" id="open">
              CodeNection 2021 Rules (Open Category)
            </Heading>
            <CNSpacer size="3xs" />
            <VStack className="rules-wrapper" w="100%" alignItems="flex-start">
              <Text
                style={{
                  lineHeight: '32px',
                }}
              >
                By registering for this competition, you hereby indicate that
                you have completely read, understood and agree to be bound by
                all of the terms below at all times. If in any case you disagree
                with one or more of the terms that are stated below, please
                refrain from registering yourself as a participant of this
                event.
              </Text>
              <CNSpacer size="sm" />
              <SecondaryText fontSize="xl" fontWeight="600">
                Competition Structure & General Rules
              </SecondaryText>

              <ol
                style={{
                  marginLeft: '20px',
                  lineHeight: '32px',
                }}
                className="rules-lists"
              >
                <li>
                  <Text>
                    This competition is completely free to participate and will
                    include two (2) rounds, a preliminary round and a final
                    round. The duration for the preliminary round will be two
                    (2) hours, while the final round will last for five (5)
                    hours. Both rounds will be conducted online using HackerRank
                    as the main platform of the competition.
                  </Text>
                </li>
                <li>
                  <Text>
                    The preliminary round will be held on 12 December 2021,
                    while the final round is on 19 December 2021. The exact
                    event flow for each round will be stated in the “Hacker Info
                    Packet” that participants will receive prior to the event.
                  </Text>
                </li>
                <li>
                  <Text>
                    The final round will consist of the top 1/3 teams from the
                    preliminary round. These teams will be notified through
                    email once the results of the preliminary round is
                    finalized.
                  </Text>
                </li>
                <li>
                  <Text>
                    Teams that are invited to the final round must confirm their
                    attendance to the event before the due date that is set by
                    the organizer. Any teams that fail to do so, or withdraw
                    from the event, will have their slots taken by teams below
                    their leaderboard ranking from the previous round.
                  </Text>
                </li>
                <li>
                  <Text>
                    Teams are strictly prohibited from communicating with each
                    other, or providing assistance to others in any shape or
                    form, during the duration of the competition.
                  </Text>
                </li>
                <li>
                  <Text>
                    Only the team leader will be required to register for the
                    competition on HackerRank. It is mandatory that the team
                    leader joins the competition using the same username that
                    was submitted during registration.
                  </Text>
                </li>
                <li>
                  <Text>
                    When the competition begins, all participants will be given
                    access to a PDF file that contains the problem set, but only
                    the team leader is required to submit the final answer for
                    his/her team on the HackerRank platform before the end of
                    the round.
                  </Text>
                </li>
                <li>
                  <Text>
                    The finalized results of each round will be announced on
                    CodeNection’s official website, and social media accounts a
                    few days after the end of each round.
                  </Text>
                </li>
                <li>
                  <Text>
                    Prizes will be awarded in the form of cash using Malaysian
                    Ringgit (MYR) as the currency, unless stated otherwise by
                    the event organizer.
                  </Text>
                </li>
                <li>
                  <Text>
                    In the event that participants come across a possible
                    ambiguity or error related to the problems set, they may
                    seek clarification by reaching out to the organizer of this
                    contest. The problems prepared are thoroughly checked and
                    proofread, therefore the participants may be asked to read
                    the problem statement again if no form of error is found by
                    the organizer.
                  </Text>
                </li>
                <li>
                  <Text>
                    Upon submission of your code, you hereby grant us all the
                    rights to edit, copy, reproduce or publicize your code,
                    either partly or fully in any form or shape, without us
                    needing to provide you any additional compensation.
                  </Text>
                </li>
                <li>
                  <Text>
                    Any decisions made by the judges of this competition are
                    final and non-debatable.
                  </Text>
                </li>
              </ol>
              <CNSpacer size="sm" />
              <SecondaryText fontSize="xl" fontWeight="600">
                Registration Details
              </SecondaryText>
              <ol
                style={{
                  marginLeft: '20px',
                  lineHeight: '32px',
                }}
              >
                <li>
                  <Text>
                    CodeNection 2021 will be opened for registration on 31
                    October, 2021 (dates are subject to change at the discretion
                    of the organizers).
                  </Text>
                </li>
                <li>
                  <Text>
                    Teams that have successfully registered for the event will
                    be sent a confirmation email within 2 weeks.
                  </Text>
                </li>
              </ol>
              <CNSpacer size="sm" />
              <SecondaryText fontSize="xl" fontWeight="600">
                Team Formation Rules
              </SecondaryText>
              <ol
                style={{
                  marginLeft: '20px',
                  lineHeight: '32px',
                }}
              >
                <li>
                  <Text>
                    Participants must form a team that consists of exactly three
                    (3) members. Teams that have more or less members than the
                    required amount will not be allowed to participate in this
                    competition.
                  </Text>
                </li>
                <li>
                  <Text>
                    A given participant may only be a part of one (1) team
                    throughout the duration of the whole competition.
                  </Text>
                </li>
                <li>
                  <Text>
                    Any teams that register for the competition after the
                    deadline will not be allowed to participate in this
                    competition.
                  </Text>
                </li>
                <li>
                  <Text>
                    Participants are allowed to participate as long as they are
                    currently pursuing education in any Malaysian
                    university/college, regardless of nationality.
                  </Text>
                </li>
                <li>
                  <Text>
                    All three (3) members can either be from the same
                    institution, or a mixture of students from multiple
                    institutions.
                  </Text>
                </li>
                <li>
                  <Text>
                    Teams must ensure that their members’ details are accurate
                    and error-free before the registration deadline. Any teams
                    that are found to have fallacious details will be
                    disqualified from the competition immediately.
                  </Text>
                </li>
                <li>
                  <Text>
                    Team formation details cannot be changed once the
                    registration is officially closed.
                  </Text>
                </li>
                <li>
                  <Text>
                    Team names used must not include any form of profane,
                    racist, lewd or derogatory words.
                  </Text>
                </li>
                <li>
                  <Text>
                    Participants must not currently be a member of CodeNection’s
                    committee or be a volunteer of this event.
                  </Text>
                </li>
              </ol>
              <CNSpacer size="sm" />
              <SecondaryText fontSize="xl" fontWeight="600">
                Computing Environment
              </SecondaryText>
              <ol
                style={{
                  marginLeft: '20px',
                  lineHeight: '32px',
                }}
              >
                <li>
                  <Text>
                    The following is a list of programming languages that
                    participants are allowed to use in this competition:
                  </Text>
                  <ul
                    style={{
                      marginLeft: '40px',
                      lineHeight: '32px',
                    }}
                  >
                    <li>Python</li>
                    <li>C/C++</li>
                    <li>Java</li>
                    <li>JavaScript</li>
                  </ul>
                </li>
                <li>
                  <Text>
                    All solutions to the problems are to be submitted through
                    HackerRank.
                  </Text>
                </li>
                <li>
                  <Text>
                    The problems will vary in difficulty, and are not arranged
                    in any particular order.
                  </Text>
                </li>
              </ol>
              <CNSpacer size="sm" />
              <SecondaryText fontSize="xl" fontWeight="600">
                Leaderboard Ranking & Final Round Eligibility
              </SecondaryText>
              <ol
                style={{
                  marginLeft: '20px',
                  lineHeight: '32px',
                }}
              >
                <li>
                  <Text>
                    The “Open Category Leaderboard” on CodeNection 2021’s
                    website will be used as the main reference for team rankings
                    of the open category contest. The Open Category Leaderboard
                    will differ from the one shown on HackerRank as individuals
                    who did not register officially on our website can still
                    join the competition on HackerRank, which means that we will
                    need to filter those individuals out from the finalized
                    ranking list.
                  </Text>
                </li>
                <li>
                  <Text>
                    Teams are only allowed to proceed to the Final Round if they
                    are part of the top 1/3 of teams from the Preliminary Round
                    of the Open Category (based on the Open Category
                    Leaderboard). Ceiling value will be taken instead as the
                    result if it is not a whole number.
                  </Text>
                  <CNSpacer size="3xs" />
                  <Text>Example:</Text>
                  <Text>
                    There are 80 teams in the Preliminary Round, 80/3 = 26.67.
                    Hence, the top 27 teams from the Private Leaderboard will be
                    allowed to proceed to the Final Round.
                  </Text>
                </li>
              </ol>
              <CNSpacer size="sm" />
              <SecondaryText fontSize="xl" fontWeight="600">
                Prizes & Awards Criteria
              </SecondaryText>
              <Text
                style={{
                  lineHeight: '32px',
                }}
              >
                <span
                  style={{
                    fontWeight: 'bold',
                  }}
                >
                  Only teams that make it to the final round will be eligible
                  for the prizes and awards of this competition.{' '}
                </span>{' '}
                Additionally, some awards will require the teams to meet certain
                conditions for them to be eligible for them. Below are the
                criteria:
              </Text>
              <ol
                style={{
                  marginLeft: '20px',
                  lineHeight: '32px',
                }}
              >
                <li>
                  <Text>Best Female Team</Text>
                  <ul
                    style={{
                      marginLeft: '40px',
                      lineHeight: '32px',
                    }}
                  >
                    <li>
                      The highest-ranking team which consists of exactly three
                      (3) female members will get this award.
                    </li>
                  </ul>
                </li>

                <li>
                  <Text>Best Uni-Diversity Team</Text>
                  <ul
                    style={{
                      marginLeft: '40px',
                      lineHeight: '32px',
                    }}
                  >
                    <li>
                      The highest-ranking team which consists of members who are
                      each currently studying in a different institution will
                      get this award.
                    </li>
                  </ul>
                </li>
                <li>
                  <Text>Hackathon Kits</Text>
                  <ul
                    style={{
                      marginLeft: '40px',
                      lineHeight: '32px',
                    }}
                  >
                    <li>
                      Includes: CodeNection Event Shirt, CodeNection Event
                      Drawstring Bag.
                    </li>
                    <li>
                      Eligible for participants that have made it to the Final
                      Round.
                    </li>
                  </ul>
                </li>
                <li>
                  <Text>Certificates</Text>
                  <ul
                    style={{
                      marginLeft: '40px',
                      lineHeight: '32px',
                    }}
                  >
                    <li>
                      E-Certificates will be given to every participant
                      regardless of their achievement during the competition.
                    </li>
                    <li>
                      The top 10 teams from the Final Round will be given a
                      hardcopy certificate through mailing after the
                      competition.
                    </li>
                  </ul>
                </li>
              </ol>
              <CNSpacer size="sm" />
              <SecondaryText fontSize="xl" fontWeight="600">
                Disqualification
              </SecondaryText>
              <Text
                style={{
                  lineHeight: '32px',
                }}
              >
                You, your team member, or the entirety of your team, may be met
                with immediate disqualification from the competition if we
                believe that there was an attempt made by you to compromise the
                legitimacy of the competition, including:
              </Text>
              <CNSpacer size="3xs" />
              <ol
                style={{
                  marginLeft: '20px',
                  lineHeight: '32px',
                }}
              >
                <li>
                  <Text>
                    Plagiarism in any shape or form in the content of your
                    submitted code;
                  </Text>
                </li>
                <li>
                  <Text>
                    Sharing or usage of information regarding any problems
                    prepared in the competition (including but not limited to,
                    its content and solution) with any party/team before the end
                    of a particular round;
                  </Text>
                </li>
                <li>
                  <Text>
                    Team leader’s HackerRank username is not consistent with the
                    one submitted during registration when participating the
                    competition;
                  </Text>
                </li>
                <li>
                  <Text>
                    Participating in more than one team, or participating in a
                    different team than the one that you initially registered
                    with;
                  </Text>
                </li>
                <li>
                  <Text>
                    Submitting false or misleading information regarding
                    yourself during registration;
                  </Text>
                </li>
                <li>
                  <Text>
                    Failure to comply with any of the Terms & Conditions of the
                    competition;
                  </Text>
                </li>
                <li>
                  <Text>
                    Misbehaving with other participants or contest
                    administrators at any stage of the competition;
                  </Text>
                </li>
                <li>
                  <Text>
                    Enlisting remote support from individuals outside of your
                    team during the course of the competition (including
                    collaborating with other teams);
                  </Text>
                </li>
                <li>
                  <Text>
                    Getting involved in any malicious activity during any stage
                    of the competition;
                  </Text>
                </li>
                <li>
                  <Text>
                    Any form of harassment to other participants, including
                    threatening, offensive, and/or hateful comments directed
                    towards an individual or a certain group.
                  </Text>
                </li>
                <li>
                  <Text>
                    Content submitted is found to be in any way lewd, racist,
                    obscene, pornographic, sexist, or otherwise deemed
                    inappropriate/unfit to be included in the competition.
                  </Text>
                </li>
              </ol>
              <CNSpacer size="3xs" />
              <Text
                style={{
                  lineHeight: '32px',
                }}
              >
                Disqualified participants/teams will automatically forfeit any
                prizes that they are eligible to receive, left to the sole
                discretion of the organizers of this event. The disqualified
                participants may also be banned from participating in any future
                event relating to CodeNection or any other event organized by IT
                Society MMU Cyberjaya, depending on the severity of their Terms
                & Conditions violations.
              </Text>
              <CNSpacer size="sm" />
              <SecondaryText fontSize="xl" fontWeight="600">
                Privacy Terms
              </SecondaryText>
              <ol
                style={{
                  marginLeft: '20px',
                  lineHeight: '32px',
                }}
              >
                <li>
                  <Text>
                    To maintain the legitimacy of this competition, and to also
                    verify your eligibility to participate, we collect basic
                    personal information about you such as your name, phone
                    number, institution, course of study, year of study and
                    t-shirt size. All of this information will be provided by
                    you during registration. We also require you to provide us
                    with your student email and/or student ID in order for us to
                    verify that you are a student of the institution you have
                    associated yourself with when you registered for this event.
                  </Text>
                </li>
                <li>
                  <Text>
                    Certain information such as your name, username, team name,
                    and institution that you have specified during registration
                    may be displayed publicly on CodeNection’s official website
                    and/or social media accounts for promotion purposes.
                  </Text>
                </li>
                <li>
                  <Text
                    style={{
                      lineHeight: '32px',
                    }}
                  >
                    Your data and personal information may also be accessible by
                    our sponsors for educational programmes, internships, or job
                    offerings.
                  </Text>
                </li>
              </ol>
              <CNSpacer size="3xs" />
              <Text>
                If you wish to not have any/all of your information disclosed
                publicly, please email us at{' '}
                <Link color="blue" href="mailto:its.codenection@gmail.com">
                  its.codenection@gmail.com.
                </Link>
              </Text>
            </VStack>
          </VStack>
        </Container>
      </Center>
      <CNSpacer size="md" />
      <CNSpacer size="sm" />
    </>
  );
};

export default RulesFullSection;
