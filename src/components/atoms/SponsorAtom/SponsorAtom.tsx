import React from 'react';
import { Center } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const BadgeImg = ({ ...props }) => {
  return (
    <>
      <Center w="100%">
        <Image height="auto" {...props} />
      </Center>
    </>
  );
};

const SponsorImg = ({ ...props }): any => {
  let children = props.children;
  return (
    <Center
      cursor="pointer"
      bgRepeat="none"
      bgPos="center"
      bgSize="cover"
      {...props}
    >
      {children}
    </Center>
  );
};

const WriteUpImg = React.forwardRef<HTMLDivElement, any>((props, ref) => (
  <Center
    ref={ref}
    cursor="pointer"
    bgRepeat="none"
    bgPos="center"
    bgSize="cover"
    {...props}
  >
    {props.children}
  </Center>
));

WriteUpImg.displayName = 'WriteUpImg';
WriteUpImg.propTypes = {
  children: PropTypes.node.isRequired,
  ref: PropTypes.any,
};

SponsorImg.propTypes = {
  SponsorImg: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export { BadgeImg, SponsorImg, WriteUpImg };
