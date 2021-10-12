import React from 'react';
import { useState } from 'react';
import {
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
} from '@chakra-ui/react';
import { Box, HStack } from '@chakra-ui/layout';

import { ArrowForwardIcon, HelpIcon } from '../../../assets';
import { FaqButton } from '../../atoms/Buttons/Buttons';
import { FaqData } from '../../../data/FaqData';

const FaqBlock = () => {
  const [value, setValue] = useState<string>('All');

  const handleCategory = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const button: any = e.currentTarget;
    setValue(button.value);
  };

  const FaqCategory = ({ selected }: any) => {
    // @ts-ignore
    const datas = FaqData[selected];
    {
      if (datas) {
        return (
          <Accordion allowToggle>
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
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb="4">{data.ans}</AccordionPanel>
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
      <HStack w="100%" spacing="25" justifyContent="center" mb="35">
        {/* if
        ghfhg */}
        <FaqButton selected="" value="All" onClick={handleCategory}>
          All
        </FaqButton>
        <FaqButton selected="" value="General" onClick={handleCategory}>
          General
        </FaqButton>
        <FaqButton selected="" value="Registration" onClick={handleCategory}>
          Registration
        </FaqButton>
        <FaqButton selected="" value="Login" onClick={handleCategory}>
          Login
        </FaqButton>
        <FaqButton selected="" value="Team" onClick={handleCategory}>
          Team
        </FaqButton>
        <Image src={ArrowForwardIcon} cursor="pointer" />
      </HStack>
      <FaqCategory selected={value} />
    </>
  );
};

export default FaqBlock;
