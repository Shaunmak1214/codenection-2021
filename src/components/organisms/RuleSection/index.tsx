import React from 'react';
import { Link } from '@chakra-ui/react';
import { Box, Center, Container, Grid } from '@chakra-ui/layout';
import { PrimaryText } from '../../atoms';

import { RulesBlock } from '../../molecules';

const RuleSection = () => {
  return (
    <Center bg="#002A97" py="100px">
      <Container maxW="container.xl" textAlign="left">
        <PrimaryText
          fontFamily="Raleway"
          fontWeight="bold"
          fontSize="3xl"
          mb="40px"
          align="center"
        >
          RULES
        </PrimaryText>
        <Grid
          templateColumns={{
            sm: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(2, 1fr)',
            xl: 'repeat(3, 1fr)',
            base: 'repeat(1, 1fr)',
          }}
          gap={6}
          fontSize="lg"
          mx="50px"
        >
          <RulesBlock
            ruleTitle="Number of team member"
            ruleDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <RulesBlock
            ruleTitle="Number of team member"
            ruleDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <RulesBlock
            ruleTitle="Number of team member"
            ruleDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <RulesBlock
            ruleTitle="Number of team member"
            ruleDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <RulesBlock
            ruleTitle="Number of team member"
            ruleDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <RulesBlock
            ruleTitle="Number of team member"
            ruleDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </Grid>
        <Box mt="40px" mx="50px" textAlign="right">
          <Link color="#FFFFFF" href="#">
            Read more
          </Link>
          {/* <Image w="100%" src={rightArrow} alt="right arrow" /> */}
        </Box>
      </Container>
    </Center>
  );
};

export default RuleSection;
