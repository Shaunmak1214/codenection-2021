import React from 'react';
import { HStack, Container, Center, SimpleGrid, Flex } from '@chakra-ui/layout';
import { Image, Link, Text, Box, VStack } from '@chakra-ui/react';
import { HeaderButton } from '../../atoms';

import { useRef, useEffect } from 'react';

import store from '../../../store';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../../reducers/authSlice';
import { useWindowSize } from '../../../hooks';

import { CodeNectionLogo, CodeNectionText, DownIcon } from '../../../assets';

const Header = () => {
  const authState = store.getState().auth;
  const dispatch = useDispatch();

  const headerSticky = useRef<any | null>(null);
  const moreHover = useRef<any | null>(null);
  const buttonRef = React.createRef<HTMLButtonElement>();

  // eslint-disable-next-line
  const [windowWidth, windowHeight] = useWindowSize();

  const handleScroll = (e: any) => {
    const window: any = e.currentTarget;

    if (window.scrollY > 10) {
      stickyToggle(true);
    } else {
      stickyToggle(false);
    }
  };

  const moreToggle = (status: string) => {
    if (moreHover.current && status === 'in') {
      moreHover.current.style.visibility = 'visible';
      moreHover.current.style.opacity = '1';
    } else if (moreHover.current && status === 'out') {
      moreHover.current.style.visibility = 'hidden';
      moreHover.current.style.opacity = '0';
    }
  };

  const logout = () => {
    dispatch(LOGOUT());
    window.location.href = '/';
  };

  const stickyToggle = (status: boolean) => {
    if (status) {
      headerSticky.current!.style!.background = '#FFFFFF';
      headerSticky.current!.style!.color = '#000000';
      headerSticky.current!.style!.boxShadow =
        '0px 8px 20px rgba(196, 196, 196, 0.25)';
      if (buttonRef.current) {
        buttonRef.current!.style!.color = '#FFFFFF';
        buttonRef.current!.style!.background = '#002A97';
      }
    } else {
      headerSticky.current!.style!.background = '#002A97';
      headerSticky.current!.style!.color = '#FFFFFF';
      headerSticky.current!.style!.boxShadow = 'none';
      if (buttonRef.current) {
        buttonRef.current!.style!.color = '#002A97';
        buttonRef.current!.style!.background = '#FFFFFF';
      }
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
        py="5px"
        zIndex="150"
        position="fixed"
        top="0"
        transition="150ms cubic-bezier(0.215,0.61,0.355,1);"
        color="#FFFFFF"
        maxWidth={windowWidth}
      >
        <Container maxW="1350px">
          <SimpleGrid
            columns={[2, 2, 2, 3]}
            justifyContent="center"
            alignItems="center"
            w="100%"
          >
            <HStack w="100%" justifyContent="space-between" alignItems="center">
              <Image
                src={CodeNectionText}
                w="170px"
                h="auto"
                mr="25px"
                cursor="pointer"
                onClick={() => (window.location.href = '/')}
              />
              <Flex w="100%" d={['none', 'none', 'flex']}>
                <Link href="/#about" mr="25px">
                  <Text>About</Text>
                </Link>
                <Link href="/#agenda" mr="25px">
                  <Text>Agenda</Text>
                </Link>
                <Link href="/#leaderboard">
                  <Text>Leaderboard</Text>
                </Link>
              </Flex>
            </HStack>
            <Image
              src={CodeNectionLogo}
              d={['none', 'none', 'none', 'flex']}
              justifySelf="center"
              w="64px"
              h="auto"
              cursor="pointer"
              onClick={() => (window.location.href = '/')}
            />
            <HStack w="100%" justifyContent={'flex-end'} alignItems="center">
              <Flex
                w="100%"
                d={['none', 'none', 'none', 'flex']}
                justifyContent="flex-end"
              >
                <Link href="/#rules" mr="25px">
                  <Text>Rules & FAQ</Text>
                </Link>
                <Link href="/#sponsors" mr="25px">
                  <Text>Sponsors & Partners</Text>
                </Link>
              </Flex>
              {authState.isAuthenticated ? (
                <>
                  <Box
                    py="5"
                    position="relative"
                    onMouseOver={() => {
                      moreToggle('in');
                    }}
                    onMouseLeave={() => {
                      moreToggle('out');
                    }}
                  >
                    <Text fontSize="sm" d="flex" alignItems="center">
                      MORE
                      <Image
                        src={DownIcon}
                        height="12px"
                        width="12px"
                        ml="5px"
                      />
                    </Text>
                    <VStack
                      className="more-hover"
                      ref={moreHover}
                      visibility="hidden"
                      opacity="0"
                      position="absolute"
                      top="70px"
                      right="0px"
                      w="150px"
                      bg="rgba(255, 255, 255, 0.98)"
                      boxShadow="0px 16px 40px rgba(165, 165, 165, 0.25)"
                      py="4"
                      px="2"
                      borderRadius="4px"
                      transition="visibility 0.2s ease-in-out, opacity 0.2s ease-in-out"
                      zIndex="50"
                      cursor="pointer"
                    >
                      <Link href="/dashboard" py="3">
                        <Text color="black" fontSize="sm">
                          Dashboard
                        </Text>
                      </Link>
                      <Link href="/edit-profile" py="3">
                        <Text color="black" fontSize="sm">
                          Profile
                        </Text>
                      </Link>
                      <Link onClick={logout} py="3">
                        <Text color="black" fontSize="sm">
                          Log Out
                        </Text>
                      </Link>
                    </VStack>
                  </Box>
                </>
              ) : (
                <HeaderButton
                  onClick={() => (window.location.href = '/login')}
                  ref={buttonRef}
                >
                  Login/Register
                </HeaderButton>
              )}
            </HStack>
          </SimpleGrid>
        </Container>
      </Center>
    </>
  );
};

React.memo(Header);
export default Header;
