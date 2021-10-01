import React from 'react';
import { HStack, Container, Center, SimpleGrid } from '@chakra-ui/layout';
import { Image, Link, Text } from '@chakra-ui/react';
import { PrimaryButton } from '../../atoms';
import { CodeNectionLogo, CodeNectionText } from '../../../assets';
import { useRef, useEffect } from 'react';

const Header = () => {
    const headerSticky = useRef<any | null>(null);
    const buttonRef = useRef<any | null>(null);

    const handleScroll = (e: any) => {
        const window: any = e.currentTarget;

        if (window.scrollY > 10) {
            stickyToggle(true);
        } else {
            stickyToggle(false);
        }
    };

    const stickyToggle = (status: boolean) => {
        if (status) {
            headerSticky.current!.style!.background = '#FFFFFF';
            headerSticky.current!.style!.color = '#000000';
            buttonRef.current!.style!.color = '#FFFFFF';
            buttonRef.current!.style!.background = '#002A97';
        } else {
            headerSticky.current!.style!.background = '#002A97';
            headerSticky.current!.style!.color = '#FFFFFF';
            buttonRef.current!.style!.color = '#002A97';
            buttonRef.current!.style!.background = '#FFFFFF';
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', (e) => handleScroll(e));

        return () => {
            window.removeEventListener('scroll', (e) => handleScroll(e));
        };
    });

    return (
        <>
            <Center
                bg="#002A97"
                ref={headerSticky}
                w="100%"
                py="10px"
                zIndex="50"
                position="fixed"
                transition="150ms cubic-bezier(0.215,0.61,0.355,1);"
                color="#FFFFFF"
            >
                <Container maxW="1500px">
                    <SimpleGrid
                        columns={3}
                        justifyItems="center"
                        alignItems="center"
                    >
                        <HStack
                            w="100%"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Image src={CodeNectionText} w="170px" h="auto" />
                            <Link href="#">
                                <Text>About</Text>
                            </Link>
                            <Link href="#">
                                <Text>Agenda</Text>
                            </Link>
                            <Link href="#">
                                <Text>Leaderboard</Text>
                            </Link>
                        </HStack>
                        <Image src={CodeNectionLogo} w="64px" h="auto" />
                        <HStack
                            w="100%"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Link>
                                <Text>Rules & FAQ</Text>
                            </Link>
                            <Link>
                                <Text>Sponsors</Text>
                            </Link>
                            <PrimaryButton
                                bg="#FFFFFF"
                                color="#002A97"
                                _hover={{
                                    bg: '#0a0a0A',
                                    color: '#FFFFFF',
                                    border: '2px solid #0A0A0A',
                                }}
                                ref={buttonRef}
                            >
                                Login/Register
                            </PrimaryButton>
                        </HStack>
                    </SimpleGrid>
                </Container>
            </Center>
        </>
    );
};

React.memo(Header);
export default Header;
