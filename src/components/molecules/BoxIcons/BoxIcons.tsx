import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import PropTypes from 'prop-types';
interface Props {
  icon: string;
  onClick: any;
}
const BoxIcons = ({ icon, onClick, ...props }: Props) => {
  return (
    <Box
      boxShadow="0px 4px 10px rgba(159, 159, 159, 0.25)"
      borderRadius="10px"
      w="40px"
      h="40px"
      d="flex"
      justifyContent="center"
      alignItems="center"
      my="50px"
      cursor="pointer"
      _hover={{
        transform: 'scale(1.1)',
        transition: 'all .3s ease-in-out',
      }}
      onClick={onClick}
      {...props}
    >
      <Image src={icon} />
    </Box>
  );
};
BoxIcons.propTypes = {
  icon: PropTypes.string,
};
export default BoxIcons;
