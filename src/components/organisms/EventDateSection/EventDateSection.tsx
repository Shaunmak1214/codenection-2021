import React from 'react';
import { Container, Center, SimpleGrid, VStack } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';

import { CNSpacer, PrimaryButton, SecondaryText } from '../../atoms';

import { Contest, EventDateImg, Workshop } from '../../../assets';

const EventDateSection = () => {
  return (
    <Center py={['20px', '20px', '50px']} id="event-date">
      <Container
        d="flex"
        flexDirection="column"
        maxW="container.lg"
        w="100%"
        justifyContent="flex-start"
        alignItems="center"
      >
        <SecondaryText
          fontFamily="Raleway"
          fontWeight="bold"
          fontSize={['2xl', '3xl', '4xl']}
          mb={['30px', '40px', '50px']}
          align="center"
        >
          Event Dates
        </SecondaryText>
        <Image src={EventDateImg} />

        <CNSpacer size="md" />

        <SecondaryText
          fontFamily="Raleway"
          fontWeight="bold"
          fontSize={['2xl', '3xl', '4xl']}
          mb={['30px', '40px', '50px']}
          align="center"
        >
          Want to join us?
        </SecondaryText>

        <SimpleGrid w="100%" spacing={5} columns={[1, 2, 2]}>
          <VStack
            w="95%"
            alignItems="center"
            p="5"
            border="1px solid #0099B8;"
            borderRadius="15px;"
            boxShadow="0px 8px 20px rgba(0, 153, 184, 0.25);"
          >
            <SecondaryText fontWeight="bold" fontSize="lg" mb="25px !important">
              Workshop 1 & 2
            </SecondaryText>
            <Image h="215px" w="215px" src={Workshop} />
            <PrimaryButton
              bgColor="#0099B8"
              mt="25px !important"
              borderRadius="10px"
              onClick={() => {
                window.location.href = 'https://forms.gle/oMmNL5nP5J6fQkfm9';
              }}
            >
              Register for workshop
            </PrimaryButton>
          </VStack>
          <VStack
            w="95%"
            alignItems="center"
            p="5"
            border="1px solid #002A97;"
            borderRadius="15px;"
            boxShadow="0px 8px 20px rgba(0, 42, 151, 0.25);"
          >
            <SecondaryText fontWeight="bold" fontSize="lg" mb="25px !important">
              Competitive Programming Contest 1 & 2
            </SecondaryText>
            <Image h="215px" w="215px" src={Contest} />
            <PrimaryButton
              mt="25px !important"
              borderRadius="10px"
              onClick={() => {
                window.location.href = '/register';
              }}
            >
              Register for Contest
            </PrimaryButton>
          </VStack>
        </SimpleGrid>
      </Container>
    </Center>
  );
};

export default EventDateSection;
