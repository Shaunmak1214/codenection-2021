import React from 'react';
import PropTypes from 'prop-types';
import { Button, Text } from '@chakra-ui/react';

const PrimaryButton = ({ ...props }) => {
    let children: React.ReactNode = props.children;
    return (
        <Button
            borderRadius="0"
            border="2px solid #FFFFFF"
            bg="transparent"
            color="#FFFFFF"
            px="10"
            py="20px"
            _hover={{
                bg: '#FFFFFF',
                color: '#002A97',
                border: '2px solid #002A97',
            }}
            {...props}
        >
            <Text>{children}</Text>
        </Button>
    );
};

const SecondaryButton = ({ ...props }) => {
    const children: React.ReactNode = props.children;

    return (
        <Button
            color="#000000"
            border="2px solid #000000"
            bg="transparent"
            borderRadius="5px"
            px="10"
            py="20px"
            _hover={{
                bg: '#000000',
                color: '#FFFFFF',
            }}
            {...props}
        >
            <Text>{children}</Text>
        </Button>
    );
};

PrimaryButton.propTypes = {
    children: PropTypes.node.isRequired,
};

SecondaryButton.propTypes = {
    children: PropTypes.node.isRequired,
};

export { PrimaryButton, SecondaryButton };
