import React from 'react';

import { Center, Container, SimpleGrid, VStack } from '@chakra-ui/layout';
import Lottie from 'react-lottie';

import { CNSpacer, SecondaryButton, SecondaryText } from '../../atoms';

import { Building } from '../../../constants';

const LeaderboardSection = () => {
  return (
    <Center py="100px" id="leaderboard">
      <Container maxW="container.lg">
        <SecondaryText
          fontFamily="Raleway"
          fontWeight="bold"
          fontSize={['2xl', '3xl', '4xl']}
          mb={['30px', '40px', '50px']}
          align="center"
        >
          LEADERBOARD
        </SecondaryText>

        <SimpleGrid
          columns={[1, 1, 2]}
          py={'0px'}
          px={'40px'}
          w="100%"
          border="2px solid #95C7FF;"
          borderRadius="20px"
          alignItems="center"
          flexDir="column-reverse"
        >
          <VStack w="100%" alignItems="center">
            <SecondaryText fontSize="xl" fontWeight="bold">
              The leaderboard is live now!
            </SecondaryText>
            <CNSpacer size="4xs" />
            <SecondaryButton
              onClick={() => {
                window.location.href = '/leaderboard';
              }}
            >
              Go to leaderboard
            </SecondaryButton>

            {/* <HStack mt="20px !important" alignItems="center">
              <FacebookBlue
                onClick={() => {
                  window.open(
                    'https://www.facebook.com/CodeNection/',
                    '_blank',
                  );
                }}
                style={{ height: '25px' }}
              />
              <InstagramBlue
                onClick={() => {
                  window.open(
                    'https://www.instagram.com/code_nection/',
                    '_blank',
                  );
                }}
                style={{ height: '25px' }}
              />
              <DiscordBlue
                onClick={() => {
                  window.open('https://discord.gg/VpCeFaeKcq', '_blank');
                }}
                style={{ height: '29px' }}
              />
            </HStack> */}
          </VStack>

          <Center w="100%" h="100%">
            <Lottie
              options={Building}
              style={{
                marginTop: 5,
                marginBottom: 5,
                width: '100%',
                height: '100%',
              }}
            />
          </Center>
        </SimpleGrid>
      </Container>
    </Center>
  );
};

export default LeaderboardSection;
