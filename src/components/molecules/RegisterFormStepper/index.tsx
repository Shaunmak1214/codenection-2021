import React from 'react';
import { Box, Center, Container, HStack } from '@chakra-ui/layout';
import { Image, Text } from '@chakra-ui/react';
import { CircleStep, StepperBox } from '../../atoms';
import PropTypes from 'prop-types';
import { RightIcon, LockIcon, KeyIcon } from '../../../assets';

interface Props {
  LeadIcon?: any;
  header: string;
  children: any;
  next?: boolean;
  steps: number;
  currentStep: number;
}

const Index = ({ currentStep, header, steps, ...props }: Props) => {
  const children: React.ReactNode = props.children;
  let status: string = 'normal';

  if (currentStep === steps) {
    status = 'normal';
  } else if (currentStep < steps) {
    status = 'locked';
  } else {
    status = 'success';
  }

  return (
    <>
      <Center position="relative">
        <Container maxW="container.xl">
          <StepperBox
            variant={
              status === 'normal'
                ? 'normal'
                : status === 'locked'
                ? 'locked'
                : 'success'
            }
          >
            <HStack
              ml="25px"
              justifyContent="space-between"
              alignItems="center"
            >
              <CircleStep status={status}>{steps}</CircleStep>
              {/* <Image src={leadIcon} w="50px" h="50px" /> */}
              <KeyIcon className={`icon_green`} />
              <Box pl="25px">
                <Text>{header}</Text>
                <Text>{children}</Text>
              </Box>
            </HStack>

            <Image
              src={
                status === 'normal'
                  ? RightIcon
                  : status === 'locked'
                  ? LockIcon
                  : undefined
              }
              pr="12px"
            />
          </StepperBox>
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
