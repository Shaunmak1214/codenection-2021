import React from 'react';
import {
  Container,
  HStack,
  Center,
  SimpleGrid,
  Flex,
  VStack,
} from '@chakra-ui/layout';
import { PrimaryButton } from '../components/atoms/Buttons';
import { Image, Text, Heading } from '@chakra-ui/react';
import { CNLanding } from '../assets';
import { useCountDown } from '../hooks';

const Landing: React.FC = () => {
  const { daysRef, hoursRef, minutesRef, secondsRef } = useCountDown(
    'October 15, 2021 00:00:00',
  );

  return (
    <>
      <HStack w="100%" h="100vh" position="relative">
        <Container maxW="container.xl">
          <Heading>CodeNection 2021</Heading>
          <Text>Competitive Programming Contest</Text>
          <Text>
            Free to all universities and colleges students accroess Malaysia
          </Text>
          <PrimaryButton zIndex="100">Register Now</PrimaryButton>
        </Container>
        <Image h="100vh" position="absolute" right="0" src={CNLanding} />
      </HStack>
      <Center
        id="contdown-timer"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        left="0"
        right="0"
        marginTop="-100px"
      >
        <Container
          maxW="container.lg"
          bg="rgba(255, 255, 255, 0.75)"
          boxShadow="0px 16px 40px rgba(121, 121, 121, 0.25)"
          backdropFilter="blur(3px)"
          borderRadius="8px"
        >
          <VStack>
            <Flex
              flexDir={['column', 'column', 'row']}
              justifyContent="space-between"
              w="80%"
              alignItems="center"
              mt="20px"
              mb="20px"
            >
              <Text fontSize="40px" fontWeight="bold">
                Join us as a{' '}
                <span style={{ color: '#002A97' }}>CodeNector!</span>
              </Text>
              <PrimaryButton
                color="#000000"
                border="2px solid #000000"
                boxShadow="0px 16px 40px rgba(121, 121, 121, 0.25)"
                bg="rgba(255, 255, 255, 0.75)"
                backdropFilter="blur(50px)"
                borderRadius="5px"
                opacity="7"
              >
                Register Now
              </PrimaryButton>
            </Flex>
            <SimpleGrid columns={[1, 1, 4]} spacing={2} py="50px">
              <Text ref={daysRef}>0</Text>
              <Text ref={hoursRef}>0</Text>
              <Text ref={minutesRef}>0 </Text>
              <Text ref={secondsRef}>0 </Text>
            </SimpleGrid>
          </VStack>
        </Container>
      </Center>
    </>
  );
};

export default Landing;
