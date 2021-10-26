import { VStack, Box, Container } from '@chakra-ui/layout';
import React from 'react';
import { Image } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { SecondaryText } from '../../atoms';

interface Props {
  leadImage: string;
  title: string;
  des: string;
  bgColor: string;
  children: any;
  marginLeft?: string;
}

const DashboardCard = ({
  leadImage,
  title,
  des,
  bgColor,
  marginLeft,
  ...props
}: Props) => {
  const children = props.children;
  return (
    <Container
      d="flex"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      mb="20px"
    >
      <Box mb="25px" ml={marginLeft}>
        <SecondaryText fontSize="2xl" fontWeight="bold">
          {title}
        </SecondaryText>
        <SecondaryText>{des}</SecondaryText>
      </Box>{' '}
      <VStack
        w="450px"
        h="410px"
        bg={bgColor}
        borderRadius="20px"
        justifyContent="center"
        alignItems="center"
      >
        <Image src={leadImage} h="310px" />
        {children}
      </VStack>
    </Container>
  );
};

DashboardCard.propTypes = {
  leadImage: PropTypes.string,
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.string,
  title: PropTypes.string,
  des: PropTypes.string,
  marginLeft: PropTypes.string,
};

export default DashboardCard;
