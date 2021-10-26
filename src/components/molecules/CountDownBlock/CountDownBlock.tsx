import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/layout';

interface Props {
  lastBlock?: string;
  children: any;
}

const CountDownBlock = ({ lastBlock, ...props }: Props) => {
  const children: React.ReactNode = props.children;

  return (
    <Box
      borderRight={
        lastBlock === 'last' ? 'none' : ['none', 'none', '1.5px solid #002A97']
      }
      // borderBottom={
      //   lastBlock === 'last'
      //     ? 'none'
      //     : ['1.5px solid #002A97', '1.5px solid #002A97', 'none']
      // }
      width="250px"
      d="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Box>
  );
};

CountDownBlock.propTypes = {
  lastBlock: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default CountDownBlock;
