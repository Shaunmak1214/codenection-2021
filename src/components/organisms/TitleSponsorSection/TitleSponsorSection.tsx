import React from 'react';

import { IconButton } from '@chakra-ui/react';
import { Center, Container, HStack } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper/core';

import {
  TitleSponsorImg,
  TitleSponsorStock,
  FusionexBanner,
} from '../../../assets';

// install Swiper modules
SwiperCore.use([Pagination]);
SwiperCore.use([Navigation]);
SwiperCore.use([Autoplay]);

const TitleSponsorSection = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <Center
      position="relative"
      id="title-sponsor"
      style={{
        backgroundImage: `url(${TitleSponsorImg})`,
      }}
      pb="200px"
      w="100%"
    >
      <Container maxW="container.lg">
        <HStack
          spacing="10"
          justifyContent="center"
          w="100%"
          maxW="100%"
          h="300px"
          mt="275px"
        >
          <Swiper
            spaceBetween={30}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
            }}
            className="mySwiper"
            style={{
              width: '100%',
              justifyContent: 'center',
              textAlign: 'center',
              alignItems: 'center',
            }}
          >
            <SwiperSlide>
              <a
                className="venobox"
                target="_blank"
                rel="noreferrer"
                href="https://www.fusionexgroup.com/"
              >
                <Image src={FusionexBanner} rounded="xl" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                className="venobox"
                target="_blank"
                rel="noreferrer"
                href="https://forms.gle/oMmNL5nP5J6fQkfm9"
              >
                <Image src={TitleSponsorStock} rounded="xl" />
              </a>
            </SwiperSlide>
            <IconButton
              ref={navigationPrevRef}
              aria-label="Prev Slide"
              icon={<ChevronLeftIcon />}
              style={{
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                left: '10px',
                zIndex: 1001,
                backgroundColor: '#ffffff',
                borderRadius: '50%',
                boxShadow: '0px 0px 10px #e9e9e9',
              }}
            />
            <IconButton
              ref={navigationNextRef}
              aria-label="Next Slide"
              icon={<ChevronRightIcon />}
              style={{
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                right: '10px',
                zIndex: 1001,
                backgroundColor: '#ffffff',
                borderRadius: '50%',
                boxShadow: '0px 0px 10px #e9e9e9',
              }}
            />
          </Swiper>
        </HStack>
      </Container>
    </Center>
  );
};

export default TitleSponsorSection;
