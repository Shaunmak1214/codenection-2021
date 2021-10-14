import React from 'react';
import { Text, Link } from '@chakra-ui/react';
import { Box, Center, Container, Grid, HStack } from '@chakra-ui/layout';
import { PrimaryText } from '../../atoms';
import { RightArrow } from '../../../assets';

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
        <HStack
          spacing="10px"
          mt="40px"
          mx="50px"
          justifyContent="flex-end"
          textAlign="right"
        >
          <Link color="#FFFFFF" href="#">
            <Box d="flex" justifyContent="center" alignItems="center">
              <Text mr={6}>Read more</Text>
              <RightArrow />
            </Box>
          </Link>
        </HStack>
      </Container>
    </Center>
  );
};

export default RuleSection;
