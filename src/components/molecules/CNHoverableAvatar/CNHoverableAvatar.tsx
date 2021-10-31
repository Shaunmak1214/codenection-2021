import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CNAvatar, CNHoverModal } from '../../atoms';
import { Box } from '@chakra-ui/layout';

const Index = ({ ...props }) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouselLeave = () => {
    setIsHover(false);
  };

  return (
    <Box
      position="relative"
      onMouseEnter={() => {
        handleMouseEnter();
      }}
      onMouseLeave={() => {
        handleMouselLeave();
      }}
    >
      <CNHoverModal
        show={isHover}
        uni={props.uni}
        position="absolute"
        bottom="60px"
        left="-200px"
      />
      <CNAvatar uni={props.uni} memberName={props.memberName} mr="2"></CNAvatar>
    </Box>
  );
};

Index.propTypes = {
  uni: PropTypes.string,
  memberName: PropTypes.string,
};

export default Index;
