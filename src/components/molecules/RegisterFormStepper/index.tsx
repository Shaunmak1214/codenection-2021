import React from 'react';
import { Box, Center, Container, HStack } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';
import { PrimaryText, CircleStep } from '../../atoms';
import PropTypes from 'prop-types';
import { RightIcon } from '../../../assets';
interface Props {
  leadIcon: string;
  header: string;
  children: any;
  next?: boolean;
  steps: number;
}

const Index = ({ leadIcon, header, steps, ...props }: Props) => {
  const children: React.ReactNode = props.children;

  return (
    <>
      <Center position="relative">
        <Container maxW="container.xl">
          <HStack
            border="1px solid #FFFFFF"
            py="30px"
            borderRadius="10px"
            mb="20px"
            w="500px"
            columns={4}
            justifyContent="space-between"
            alignItems="center"
            px="25px"
          >
            <HStack
              ml="25px"
              justifyContent="space-between"
              alignItems="center"
            >
              <CircleStep>{steps}</CircleStep>
              <Image src={leadIcon} w="55px" h="55px" />
              <Box pl="25px">
                <PrimaryText>{header}</PrimaryText>
                <PrimaryText>{children}</PrimaryText>
              </Box>
            </HStack>

            <Image src={RightIcon} pr="12px" />
          </HStack>
        </Container>
      </Center>
    </>
  );
};

Index.propTypes = {
  children: PropTypes.node.isRequired,
  leadIcon: PropTypes.string,
  header: PropTypes.string,
  steps: PropTypes.number,
};

export default Index;
