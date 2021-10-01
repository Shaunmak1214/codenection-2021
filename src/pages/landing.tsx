import React from 'react';
import { Container, HStack, Box } from '@chakra-ui/layout';
import { PrimaryButton } from '../components/atoms/Buttons';
import { Image, Heading } from '@chakra-ui/react';
import { CNLanding } from '../assets';
import { CountDownSection } from '../components/organisms';
import { CNSpacer } from '../components/atoms';
import { PrimaryText } from '../components/atoms';

const Landing: React.FC = () => {
    const LandingImgRenderer = () => {
        if (window.screen.width < 768) {
            return <Image position="absolute" src={CNLanding} />;
        } else {
            return (
                <Image
                    h="100vh"
                    position="absolute"
                    right="0"
                    src={CNLanding}
                />
            );
        }
    };
    return (
        <>
            <HStack w="100%" h="100vh" position="relative" bg="#002A97">
                <Container maxW="container.xl">
                    <Heading color="#ffffff">CodeNection 2021</Heading>

                    <PrimaryText fontSize="25px">
                        Competitive Programming Contest
                    </PrimaryText>

                    <CNSpacer size="sm" />
                    <PrimaryText>
                        {' '}
                        Free to all universities and colleges students
                    </PrimaryText>
                    <PrimaryText>across Malaysia</PrimaryText>

                    <CNSpacer size="sm" />
                    <PrimaryButton zIndex="20">Register Now</PrimaryButton>
                </Container>
                <LandingImgRenderer />
            </HStack>
            <CountDownSection />
            <Box w="100%" h="1000px"></Box>
        </>
    );
};

export default Landing;
