import React, { useState } from 'react';
import Lottie from 'react-lottie';

import { HStack, VStack } from '@chakra-ui/layout';

import { CNSpacer, PrimaryText, SecondaryButton } from '../../atoms';

import { CNModal } from '../../molecules';

import { DiscordInv } from '../../../constants';
import { Discord } from '../../../assets';

const AdvertisementModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <CNModal
      disableButton
      blur
      modalIsOpen={isOpen}
      disableCloseButton={false}
      onClose={onClose}
      // @ts-ignore
      style={{
        background: '#5865F2 !important',
      }}
    >
      <VStack h="100%" w="100%" justifyContent="flex-start">
        <HStack>
          <Discord style={{ width: '35px', height: '35px' }} />
          <PrimaryText fontSize="3xl" fontWeight="bold">
            Discord Invitation!
          </PrimaryText>
        </HStack>

        <CNSpacer size="4xs" />

        <Lottie
          options={DiscordInv}
          style={{ marginTop: 5, marginBottom: 5, width: '55%' }}
        />

        <CNSpacer size="2xs" />

        <SecondaryButton
          w="75%"
          color="white"
          borderColor="white"
          _hover={{
            color: '#0016e5',
            borderColor: '#0016e5',
          }}
          borderRadius="12px"
          onClick={() => {
            window.open('https://discord.gg/VpCeFaeKcq', '_blank');
          }}
        >
          Join the discord server
        </SecondaryButton>
      </VStack>
    </CNModal>
  );
};

export default AdvertisementModal;
