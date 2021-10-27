import React from 'react';
import { useCountDown } from '../../../hooks';
import { Center, Container, VStack, Flex, SimpleGrid } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/react';
import { SecondaryButton } from '../../atoms';
import { CountDownBlock } from '../../molecules';

const CountDownSection = () => {
  const { daysRef, hoursRef, minutesRef, secondsRef } = useCountDown(
    'October 30, 2021 00:00:00',
  );
  return (
    <>
      <Center
        id="contdown-timer"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        left="0"
        right="0"
        marginTop="-100px"
        w="100%"
      >
        <Container
          maxW="container.lg"
          bg="rgba(255, 255, 255, 0.75)"
          boxShadow="0px 16px 40px rgba(121, 121, 121, 0.25)"
          backdropFilter="blur(3px)"
          borderRadius="8px"
          justifyContent="center"
          alignItems="center"
          w={['90%', '90%', '85%']}
        >
          <VStack w="100%" justifySelf="center" alignSelf="center">
            <Flex
              flexDir={['column', 'column', 'row']}
              justifyContent="space-between"
              w={['90%', '90%', '85%']}
              alignItems="center"
              mt="25px"
              mb="20px"
            >
              <Text
                textAlign="center"
                fontSize={['xl', '2xl', '4xl']}
                fontWeight="bold"
                mb={['15px', '15px', '0']}
              >
                Join us as a{' '}
                <span style={{ color: '#002A97' }}>CodeNector!</span>
              </Text>
              <SecondaryButton>Register Now</SecondaryButton>
            </Flex>
            <SimpleGrid
              columns={[1, 1, 4]}
              spacing={2}
              py="45px"
              px={['15px', '15px', '0']}
              justifyItems="center"
              alignItems="center"
            >
              <CountDownBlock>
                <Text
                  ref={daysRef}
                  fontSize={['xl', '2xl', '4xl']}
                  fontWeight="bold"
                  color="#002A97"
                >
                  0
                </Text>
                <Text color="#002A97" fontSize={['sm', 'md', 'lg']}>
                  DAYS
                </Text>
              </CountDownBlock>
              <CountDownBlock>
                <Text
                  ref={hoursRef}
                  fontSize={['xl', '2xl', '4xl']}
                  fontWeight="bold"
                  color="#002A97"
                >
                  0
                </Text>
                <Text color="#002A97" fontSize={['sm', 'md', 'lg']}>
                  HOURS
                </Text>
              </CountDownBlock>
              <CountDownBlock>
                <Text
                  ref={minutesRef}
                  fontSize={['xl', '2xl', '4xl']}
                  fontWeight="bold"
                  color="#002A97"
                >
                  0
                </Text>
                <Text color="#002A97" fontSize={['sm', 'md', 'lg']}>
                  MINUTES
                </Text>
              </CountDownBlock>
              <CountDownBlock lastBlock="last">
                <Text
                  ref={secondsRef}
                  fontSize={['xl', '2xl', '4xl']}
                  fontWeight="bold"
                  color="#002A97"
                >
                  0
                </Text>
                <Text color="#002A97" fontSize={['sm', 'md', 'lg']}>
                  SECONDS
                </Text>
              </CountDownBlock>
            </SimpleGrid>
          </VStack>
        </Container>
      </Center>
    </>
  );
};

export default CountDownSection;
