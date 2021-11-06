import React from 'react';

import PropTypes from 'prop-types';
import { PrimaryText } from '../../atoms';
import { Box } from '@chakra-ui/layout';

const RulesBlock = ({ ...props }) => {
  const { ruleTitle, ruleDesc } = props;
  return (
    <Box bg="#0079FF" minH="100px" borderRadius="5px" p="30px">
      <PrimaryText fontSize="xl" fontWeight="bold" color="#FFFFFF" mb={1}>
        {ruleTitle}
      </PrimaryText>
      <PrimaryText fontSize="md" color="#FFFFFF">
        {ruleDesc}
      </PrimaryText>
    </Box>
  );
};

RulesBlock.propTypes = {
  ruleTitle: PropTypes.string,
  ruleDesc: PropTypes.string,
};

export default RulesBlock;
