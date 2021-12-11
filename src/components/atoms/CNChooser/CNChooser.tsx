import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Center, HStack, Box } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/react';

interface Props {
  onSelect: (value: string) => void;
}

const CNChooser = ({ onSelect, ...props }: Props) => {
  // let children: React.ReactNode = props.children;
  const [selected, setSelected] = useState(1);
  let firstChoiceRef = useRef(null);
  let secChoiceRef = useRef(null);
  let selectBoxRef = useRef(null);

  const handleFirstClick = () => {
    // @ts-ignore
    selectBoxRef.current.style.transform = `translateX(0px)`;
    // @ts-ignore
    firstChoiceRef.current.style.color = `#ffffff`;

    setTimeout(() => {
      setSelected(1);
    }, 300);
  };

  const handleSecClick = () => {
    // @ts-ignore
    let secChoiceCenter = secChoiceRef.current.getBoundingClientRect().x;
    // @ts-ignore
    let selectBoxCenter = selectBoxRef.current.getBoundingClientRect().x;
    // @ts-ignore
    selectBoxRef.current.style.transform = `translateX(${
      secChoiceCenter - selectBoxCenter
    }px)`;

    setTimeout(() => {
      setSelected(2);
    }, 300);
  };

  useEffect(() => {
    if (selected === 1) {
      onSelect('open');
    } else if (selected === 2) {
      onSelect('closed');
    }
  }, [selected, onSelect]);

  return (
    <HStack
      justifyContent="center"
      bg="#F5F5F5"
      borderRadius="20px"
      px="4"
      py="6"
      cursor="pointer"
      w="400px"
      position="relative"
      justifySelf={['flex-start', 'flex-start', 'flex-end']}
      mt={['20px', '20px', '0px']}
      {...props}
    >
      <Center
        ref={firstChoiceRef}
        w="48%"
        zIndex="2"
        onClick={() => {
          handleFirstClick();
        }}
      >
        <Text color={selected === 1 ? '#ffffff' : '#000000'}>
          Open Category
        </Text>
      </Center>
      <Center
        ref={secChoiceRef}
        w="48%"
        zIndex="2"
        onClick={() => {
          handleSecClick();
        }}
      >
        <Text color={selected === 2 ? '#ffffff' : '#000000'}>
          Closed Category
        </Text>
      </Center>

      <Box
        ref={selectBoxRef}
        position="absolute"
        w="45%"
        h="70%"
        borderRadius="15px"
        bgColor="#455171"
        zIndex="1"
        left="11px"
        transition="all 300ms cubic-bezier(0.740, -0.175, 0.000, 1.080)"
        transitionTimingFunction="cubic-bezier(0.740, -0.175, 0.000, 1.080)"
      ></Box>
    </HStack>
  );
};

CNChooser.propTypes = {
  children: PropTypes.node,
};

React.memo(CNChooser);

export default CNChooser;
