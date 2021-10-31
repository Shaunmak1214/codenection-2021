import React from 'react';
import { Box } from '@chakra-ui/react';
import { PrimaryText } from '..';
import PropTypes from 'prop-types';
interface Props {
  title: string;
}
const ProfileBoxTitle = ({ title }: Props) => {
  return (
    <Box
      bg="#002A97"
      py="10px"
      borderRadius="10px"
      ml={['-20px', '-20px', '-10px']}
      px={['30px', '30px', '80px']}
      mb={['25px', '25px', '0']}
      w={['200px', '200px', 'auto']}
    >
      <PrimaryText fontSize="lg" text-transform="uppercase" fontWeight="bold">
        {title}
      </PrimaryText>
    </Box>
  );
};

ProfileBoxTitle.propTypes = {
  title: PropTypes.string,
};

export default ProfileBoxTitle;
