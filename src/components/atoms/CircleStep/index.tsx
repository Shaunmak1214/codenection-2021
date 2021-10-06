import React from 'react';
import { Center, Container } from '@chakra-ui/layout';
import { Text, Image } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { SuccessTick } from '../../../assets';
interface Props {
  status: string;
  children: any;
}
const CircleStep = ({ status, ...props }: Props) => {
  const children: React.ReactNode = props.children;
  return (
    <Center
      border={
        status === 'normal'
          ? '1px solid #FFFFFF'
          : status === 'locked'
          ? '1px solid #407DC1'
          : '1px solid #4EFF9F '
      }
      borderRadius="50%"
      h="60px"
      w="60px"
      position="absolute"
      left="-15px"
    >
      <Container
        bg={
          status === 'normal'
            ? ' #FFFFFF'
            : status === 'locked'
            ? ' #407DC1'
            : ' #4EFF9F '
        }
        borderRadius="50%"
        w="50px"
        h="50px"
        d="flex"
        justifyContent="center"
        alignItems="center"
        {...props}
      >
        {status === 'success' ? (
          <Image src={SuccessTick} h="50px" w="50px" />
        ) : (
          <Text color="#002A97" zIndex="20" fontWeight="bold" fontSize="3xl">
            {children}
          </Text>
        )}
      </Container>
    </Center>
  );
};

CircleStep.propTypes = {
  status: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default CircleStep;
