import React from 'react';
import { Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const PrimaryText = ({ ...props }) => {
    const children: React.ReactNode = props.children;

    return (
        <Text color="#FFFFFF" {...props}>
            {children}
        </Text>
    );
};

const SecondaryText = ({ ...props }) => {
    const children: React.ReactNode = props.children;

    return (
        <Text color="#000000" {...props}>
            {children}
        </Text>
    );
};

PrimaryText.propTypes = {
    children: PropTypes.node.isRequired,
};

SecondaryText.propTypes = {
    children: PropTypes.node.isRequired,
};

export { PrimaryText, SecondaryText };
