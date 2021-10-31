import React from 'react';
import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';
interface Props {
  children: any;
  w: any;
  h: any;
}
const WhiteBox = ({ ...props }: Props) => {
  const children = props.children;
  return (
    <Box
      boxShadow="0px 8px 20px rgba(132, 132, 132, 0.25)"
      borderRadius="10px"
      {...props}
    >
      {children}
    </Box>
  );
};

WhiteBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WhiteBox;
