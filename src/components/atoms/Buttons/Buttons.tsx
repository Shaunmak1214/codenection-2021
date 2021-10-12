import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Button, Text } from '@chakra-ui/react';

const PrimaryButton = ({ ...props }) => {
  const children: React.ReactNode = props.children;

  return (
    <Button
      borderRadius="0"
      border="2px solid #FFFFFF"
      bg="#002A97"
      color="#FFFFFF"
      px="10"
      py="20px"
      _hover={{
        bg: '#FFFFFF',
        color: '#002A97',
        border: '2px solid #002A97',
      }}
      {...props}
    >
      <Text>{children}</Text>
    </Button>
  );
};

const SecondaryButton = ({ ...props }) => {
  const children: React.ReactNode = props.children;

  return (
    <Button
      color="#000000"
      border="2px solid #000000"
      bg="transparent"
      borderRadius="3px"
      px="10"
      py="20px"
      _hover={{
        bg: '#000000',
        color: '#FFFFFF',
      }}
      {...props}
    >
      <Text>{children}</Text>
    </Button>
  );
};

const JoinTeamButton = ({ ...props }) => {
  const children: React.ReactNode = props.children;

  return (
    <Button
      borderRadius="18px"
      border="none"
      bgColor="#50C0D9"
      _hover={{ bg: '#147186' }}
      color="#FFFFFF"
      {...props}
    >
      <Text>{children}</Text>
    </Button>
  );
};

const GradientButton = ({ ...props }) => {
  const children: React.ReactNode = props.children;

  return (
    <Button
      borderRadius="12px"
      py="25px"
      border="none"
      bg="linear-gradient(90deg, #407DC1 0%, #92ECE9 100%);"
      _hover={{ bg: 'linear-gradient(90deg, #11437A 0%, #388B88 100%);' }}
      _active={{ bg: 'linear-gradient(90deg, #01060C 0%, #000000 100%);' }}
      color="#FFFFFF"
      transition="all 0.3s ease"
      {...props}
    >
      <Text>{children}</Text>
    </Button>
  );
};

const HeaderButton = React.forwardRef((props: any, ref: any) => (
  <Button
    borderRadius="5px"
    px="10"
    py="20px"
    bg="#FFFFFF"
    color="#002A97"
    {...props}
    ref={ref}
  >
    <Text>{props.children}</Text>
  </Button>
));

const FaqButton = ({ ...props }) => {
  const children: React.ReactNode = props.children;
  let txtRef = useRef(null);
  const { selected } = props;
  console.log({ selected });
  return (
    <Button
      borderRadius="3xl"
      px={12}
      variant="outlined"
      //color={selected ? '#ffffff' : '#002A97'}
      border="1px solid #002A97"
      //bg="#ffffff"
      bg={selected ? '#002A97' : 'none'}
      onMouseOver={() => {
        if (selected) return;
        // @ts-ignore
        txtRef.current.style.color = '#ffffff';
      }}
      onMouseLeave={() => {
        if (selected) return;
        // @ts-ignore
        txtRef.current.style.color = '#002A97';
      }}
      //_hover={{ bg: '#002A97', color: '#ffffff' }}
      {...props}
    >
      <Text
        ref={txtRef}
        color={selected ? 'white' : '#002A97'}
        fontFamily="Raleway"
      >
        {children}
      </Text>
    </Button>
  );
};

const MutedButton = ({ ...props }) => {
  const children: React.ReactNode = props.children;
  return (
    <Button
      bg="#C4C4C4"
      _hover={{ bg: '#000000', color: '#FFFFFF' }}
      borderRadius="5px"
      px="10"
      py="20px"
      {...props}
    >
      <Text>{children}</Text>
    </Button>
  );
};

HeaderButton.displayName = 'HeaderButton';

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
};

SecondaryButton.propTypes = {
  children: PropTypes.node.isRequired,
};

HeaderButton.propTypes = {
  children: PropTypes.node.isRequired,
  ref: PropTypes.any,
};

MutedButton.propTypes = {
  children: PropTypes.node.isRequired,
};

JoinTeamButton.propTypes = {
  children: PropTypes.node.isRequired,
};

GradientButton.propTypes = {
  children: PropTypes.node.isRequired,
};

FaqButton.propTypes = {
  children: PropTypes.node.isRequired,
  selected: PropTypes.string,
};

export {
  PrimaryButton,
  SecondaryButton,
  HeaderButton,
  JoinTeamButton,
  MutedButton,
  GradientButton,
  FaqButton,
};
