import React from 'react';
import { useState, useEffect } from 'react';
import {
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
} from '@chakra-ui/react';
import { Box, HStack, Flex } from '@chakra-ui/layout';
import { MinusIcon, AddIcon } from '@chakra-ui/icons';
import AOS from 'aos';

import ReactHtmlParser from 'react-html-parser';

import { FaqButton } from '../../atoms/Buttons/Buttons';

import { FaqData, FaqCategories } from '../../../data/FaqData';

import { ArrowForwardIcon, HelpIcon } from '../../../assets';
import 'aos/dist/aos.css';

const FaqBlock = () => {
  const [value, setValue] = useState<string>('Registration');
  const handleCategory = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const button: any = e.currentTarget;
    setValue(button.value);
  };

  const scrollableRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  const FaqCategory = ({ selected }: any) => {
    // @ts-ignore
    const datas = FaqData[selected];
    {
      if (datas) {
        return (
          <Accordion
            mx="65px"
            data-aos={'fade-up'}
            allowToggle
            allowMultiple
            data-aos-duration="1000"
            w="100%"
            margin="0 auto"
          >
            {datas.map((data: any) => {
              return (
                <AccordionItem
                  key={data.idx}
                  border="1px solid rgb(160,160,255);"
                  borderRadius="5px"
                  mb={3}
                  _active={{ outlineStyle: 'none' }}
                  _focus={{ boxShadow: 'none' }}
                >
                  {({ isExpanded }) => (
                    <>
                      <AccordionButton>
                        <HelpIcon />
                        <Box flex="1" textAlign="left" ml="10px" mt="5px">
                          <Text
                            fontFamily="Raleway"
                            fontSize="15"
                            fontWeight="semibold"
                            color="#002A97"
                          >
                            {data.question}
                          </Text>
                        </Box>
                        {isExpanded ? (
                          <MinusIcon w={2} h={2} />
                        ) : (
                          <AddIcon w={2} h={2} />
                        )}
                      </AccordionButton>
                      <AccordionPanel pb="4" color="#5A5A5A">
                        {ReactHtmlParser(data.ans)}
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              );
            })}
          </Accordion>
        );
      } else {
        return <></>;
      }
    }
  };

  return (
    <>
      <HStack w="100%" justifyContent="center" mb="35">
        <Flex
          ref={scrollableRef}
          flexDir="row"
          overflowX="scroll"
          spacing={2}
          alignItems="center"
          className="faq-scrollable"
          transition="all 0.5s ease-in-out"
        >
          {FaqCategories.map((category) => {
            return (
              <>
                <FaqButton
                  key={category.idx}
                  selected={value === category.category ? true : false}
                  value={category.category}
                  onClick={handleCategory}
                  mr="15px"
                  px="65px"
                >
                  {category.category}
                </FaqButton>
              </>
            );
          })}
        </Flex>
        <Image
          src={ArrowForwardIcon}
          onClick={() => {
            // @ts-ignore
            scrollableRef.current.scrollBy(100, 0);
          }}
          cursor="pointer"
        />
      </HStack>
      <FaqCategory selected={value} />
    </>
  );
};

export default FaqBlock;
