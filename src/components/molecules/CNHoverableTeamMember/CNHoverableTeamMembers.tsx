import React, { useState } from 'react';
import { CNHoverModal } from '../../atoms';
import { Box } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';

interface IProps {
  uniLogo: string;
}

const Index = ({ uniLogo }: IProps) => {
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
        position="absolute"
        bottom="60px"
        left="-20px"
      />
      <Image src={uniLogo} alt="team logo #1" minW="100px" w="100px" h="auto" />
    </Box>
  );
};

export default Index;
