import React, { useState, useEffect } from 'react';
import { Center, Container } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import { motion, useMotionValue, useTransform } from 'framer-motion';
interface Props {
  status: string;
  children: any;
}
const CircleStep = ({ status, ...props }: Props) => {
  const [success, setSuccess] = useState(false);
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);

  useEffect(() => {
    setSuccess(status === 'success');
  }, [status]);

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
      h="50px"
      w="50px"
      position="absolute"
      left="-10px"
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
        w="40px"
        h="40px"
        d="flex"
        justifyContent="center"
        alignItems="center"
        {...props}
      >
        {status === 'success' ? (
          // <Image src={SuccessTick} position="absolute" />
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: 'absolute' }}
          >
            <motion.path
              d="M17.7364 2.65424C17.385 2.30275 16.8151 2.30275 16.4636 2.65424L5.68106 13.4369L1.53642 9.29227C1.18496 8.94078 0.615146 8.94081 0.263619 9.29227C-0.0878731 9.64373 -0.0878731 10.2135 0.263619 10.565L5.04466 15.346C5.39601 15.6975 5.96624 15.6972 6.31746 15.346L17.7364 3.92704C18.0879 3.57558 18.0879 3.00574 17.7364 2.65424Z"
              fill="#002A97"
              animate={{ pathLength: success ? 0.9 : 0 }}
              style={{ pathLength: pathLength, opacity: opacity }}
              transition={{ duration: 1.5 }}
            />
          </svg>
        ) : (
          <Text color="#002A97" zIndex="20" fontWeight="bold" fontSize="xl">
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
