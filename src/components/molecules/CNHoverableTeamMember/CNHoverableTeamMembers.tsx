import React, { useState } from 'react';

import { Box } from '@chakra-ui/layout';
import {
  Image,
  Avatar,
  VStack,
  HStack,
  Text,
  Badge,
  Divider,
} from '@chakra-ui/react';

import { CNHoverModal } from '../../atoms';

import { CitizenshipIcon, EducationIcon } from '../../../assets';

interface user {
  full_name: string;
  position: string;
  imageUrl: string;
  university: string;
  citizenship: string;
  education_level: string;
}
interface IProps {
  uniLogo: string;
  user: user | null | undefined;
}

const Index = ({ uniLogo, user }: IProps) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouselLeave = () => {
    setIsHover(false);
  };

  return (
    <Box
      position="relative"
      onMouseEnter={() => {
        handleMouseEnter();
      }}
      onMouseLeave={() => {
        handleMouselLeave();
      }}
      cursor={'pointer'}
    >
      <CNHoverModal
        show={isHover}
        position="absolute"
        bottom="45px"
        left="-20px"
      >
        <VStack w="100%" alignItems={'flex-start'}>
          {user ? (
            <>
              <HStack w="100%" justifyContent={'space-between'}>
                <HStack>
                  <Avatar size="xs" name={user.full_name} src=""></Avatar>
                  <Text fontWeight={'600'} wordBreak={'break-word'}>
                    {user.full_name}
                  </Text>
                </HStack>
                <Badge size="xs" alignSelf={'flex-start'}>
                  {user.position}
                </Badge>
              </HStack>
              <Divider mt="10px !important" mb="10px !important" />
              <HStack
                w="100%"
                justifyContent={'flex-start'}
                alignItems={'center'}
              >
                <Image
                  src={CitizenshipIcon}
                  alt="Nationality"
                  w="18px"
                  h="18px"
                />
                <Text fontSize={'13px'}>{user.citizenship}</Text>
              </HStack>
              <HStack
                w="100%"
                justifyContent={'flex-start'}
                alignItems={'center'}
              >
                <Image
                  src={EducationIcon}
                  alt="Nationality"
                  w="18px"
                  h="18px"
                />
                <Text fontSize={'13px'} wordBreak={'break-word'}>
                  {user.education_level} @ {user.university}
                </Text>
              </HStack>
            </>
          ) : (
            <Text>No info</Text>
          )}
        </VStack>
      </CNHoverModal>
      <Image src={uniLogo} alt="team logo #1" minW="100px" w="100px" h="auto" />
    </Box>
  );
};

export default Index;
