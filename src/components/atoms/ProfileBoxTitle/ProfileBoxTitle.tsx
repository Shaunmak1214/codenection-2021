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
      marginLeft="-10px"
      py="10px"
      borderRadius="10px"
      px="80px"
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
