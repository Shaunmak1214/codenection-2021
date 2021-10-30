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
      alignItems="flex-start"
      flexDir="column"
      mb="20px"
    >
      <Box mb="25px" ml={marginLeft}>
        <SecondaryText fontSize="2xl" fontWeight="bold">
          {title}
        </SecondaryText>
        <SecondaryText>{des}</SecondaryText>
      </Box>
      <VStack
        h={['100%', '100%', '410px']}
        w="100%"
        bg={bgColor}
        borderRadius="20px"
        justifyContent="center"
        alignItems="center"
        py="5"
      >
        <Image src={leadImage} h={['175px', '175px', '310px']} w="auto" />
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
