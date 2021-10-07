import React from 'react';
import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

interface Props {
  size: string;
}

const CNSpacer = ({ size }: Props) => {
  if (size === '5xs') {
    return <Box w="100%" h="5px"></Box>;
  } else if (size === '4xs') {
    return <Box w="100%" h="10px"></Box>;
  } else if (size === '3xs') {
    return <Box w="100%" h="20px"></Box>;
  } else if (size === '2xs') {
    return <Box w="100%" h="30px"></Box>;
  } else if (size === 'xs') {
    return <Box w="100%" h="40px"></Box>;
  } else if (size === 'sm') {
    return <Box w="100%" h="50px"></Box>;
  } else if (size === 'md') {
    return <Box w="100%" h="60px"></Box>;
  } else {
    return <Box w="100%" h="125px"></Box>;
  }
};

CNSpacer.propTypes = {
  size: PropTypes.string,
};

export default CNSpacer;
