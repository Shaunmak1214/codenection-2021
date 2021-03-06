import React from 'react';
import { Text, Link } from '@chakra-ui/react';
import { Box, Center, Container, Grid, HStack } from '@chakra-ui/layout';
import { PrimaryText } from '../../atoms';
import { RightArrow } from '../../../assets';
import { RulesData } from '../../../data/RulesData';

import { RulesBlock } from '../../molecules';

const RuleSection = () => {
  return (
    <Center bg="#002A97" py="100px" id="rules">
      <Container maxW="container.xl" textAlign="left">
        <PrimaryText
          fontFamily="Raleway"
          fontWeight="bold"
          fontSize={['2xl', '3xl', '4xl']}
          mb={['30px', '40px', '50px']}
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
          mx={'25px'}
        >
          {RulesData.map((data) => {
            return (
              <RulesBlock
                key={data.idx}
                ruleTitle={data.title}
                ruleDesc={data.desc}
              />
            );
          })}
        </Grid>
        <HStack
          spacing="10px"
          mt="40px"
          mx="50px"
          justifyContent="flex-end"
          textAlign="right"
        >
          <Link color="#FFFFFF" href="#">
            <Box
              d="flex"
              justifyContent="center"
              alignItems="center"
              onClick={() => {
                window.location.href = '/rules';
              }}
            >
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
