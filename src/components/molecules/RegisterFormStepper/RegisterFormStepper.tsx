import React from 'react';
import { Box, Center, Container, HStack } from '@chakra-ui/layout';
import { Image, Text } from '@chakra-ui/react';
import { CircleStep, StepperBox } from '../../atoms';
import PropTypes from 'prop-types';
import {
  RightIcon,
  LockIcon,
  KeyIcon,
  ProfileIcon,
  TeamIcon,
} from '../../../assets';

interface Props {
  type: string;
  header: string;
  children: any;
  next?: boolean;
  steps: number;
  currentStep: number;
}

const Index = ({ currentStep, type, header, steps, ...props }: Props) => {
  const children: React.ReactNode = props.children;
  let status: string = 'normal';

  if (currentStep === steps) {
    status = 'normal';
  } else if (currentStep < steps) {
    status = 'locked';
  } else {
    status = 'success';
  }

  interface renderIconProps {
    className: string;
  }

  const RenderIcon = ({ className }: renderIconProps) => {
    switch (type) {
      case 'profile':
        return <ProfileIcon className={className} />;
      case 'team':
        return <TeamIcon className={className} />;
      case 'key':
        return <KeyIcon className={className} />;
      default:
        return <KeyIcon className={className} />;
    }
  };

  RenderIcon.propTypes = {
    className: PropTypes.string,
  };

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

              <RenderIcon
                className={
                  status === 'normal'
                    ? 'icon-white'
                    : status === 'locked'
                    ? 'icon-gray'
                    : 'icon-green'
                }
              />

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
  type: PropTypes.string.isRequired,
  header: PropTypes.string,
  steps: PropTypes.number,
};

export default Index;
