import React from 'react';
import PropTypes from 'prop-types';

import CNHoverableAvatar from '../../molecules/HoverableAvatar';
import { Flex } from '@chakra-ui/layout';

interface IHoverableAvatarGroupProps {
  data: any;
}

const Index: React.FC<IHoverableAvatarGroupProps> = ({ data }) => {
  return (
    <>
      <Flex w="100%" flexDir="row" justifyContent="center">
        {data.map((item: any, idx: any) => (
          <CNHoverableAvatar key={idx} uni={item.uni} />
        ))}
      </Flex>
    </>
  );
};

Index.propTypes = {
  data: PropTypes.array,
};

export default Index;
