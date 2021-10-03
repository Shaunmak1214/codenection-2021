import React from 'react';
import { Center } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const BadgeImg = ({ ...props }) => {
    return (
        <>
            <Center w="100%">
                <Image height="auto" {...props} />
            </Center>
        </>
    );
};

const SponsorImg = ({ ...props }): any => {
    let children = props.children;
    return (
        <Center bgRepeat="none" bgPos="center" bgSize="cover" {...props}>
            {children}
        </Center>
    );
};

SponsorImg.propTypes = {
    SponsorImg: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export { BadgeImg, SponsorImg };
