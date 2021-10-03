import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Center, HStack, Box } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/react';

const CNChooser = ({ ...props }) => {
  // let children: React.ReactNode = props.children;
  let firstChoiceRef = useRef(null);

  useEffect(() => {
    if (firstChoiceRef.current) {
      // @ts-ignore
      let center = firstChoiceRef.current.getBoundingClientRect().x;
      console.log(center);
    }
  }, []);

  return (
    <HStack
      justifyContent="space-around"
      bg="#F5F5F5"
      borderRadius="20px"
      px="4"
      py="6"
      cursor="pointer"
      w="400px"
      position="relative"
      {...props}
    >
      <Center ref={firstChoiceRef} w="45%" zIndex="2">
        <Text>Private Leaderboard</Text>
      </Center>
      <Center w="45%" zIndex="2">
        <Text>Public Leaderboard</Text>
      </Center>

      <Box
        position="absolute"
        w="45%"
        h="70%"
        borderRadius="10px"
        bgColor="#455171"
        zIndex="1"
        right="15px"
      ></Box>
    </HStack>
  );
};

CNChooser.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CNChooser };
