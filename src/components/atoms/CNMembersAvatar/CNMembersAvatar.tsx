import { Avatar } from '@chakra-ui/avatar';
import PropTypes from 'prop-types';
import React from 'react';

const Index = ({ ...props }) => {
  return (
    <Avatar
      position="relative"
      name="Oshigaki Kisame"
      src={props.uni}
      bgColor="#EEF7FF"
      color="#464646"
      fontFamily="Raleway"
      fontWeight="bold"
      alt="Oshigaki Kisame"
      {...props}
    >
      <Avatar
        bgColor="rgba(165, 211, 253, 0.75);"
        color="#464646"
        fontFamily="Raleway"
        fontWeight="bold"
        size="xs"
        position="absolute"
        right="-5px"
        bottom="0px"
        name={props.memberName}
      />
    </Avatar>
  );
};

Index.propTypes = {
  uni: PropTypes.string,
  memberName: PropTypes.string,
};

React.memo(Index);

export default Index;
