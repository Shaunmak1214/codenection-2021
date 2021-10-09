import React from 'react';

import PropTypes from 'prop-types';
import { PrimaryText } from '../../atoms';
import { Box } from '@chakra-ui/layout';

// interface Props {
//   ruleTitle: string;
//   ruleDesc: string;
// }

const RuleBlock = ({ ...props }) => {
  const { ruleTitle, ruleDesc } = props;
  return (
    <Box bg="#0079FF" minH="100px" borderRadius="5px" p="30px">
      <PrimaryText fontWeight="bold" color="#FFFFFF" mb={1}>
        {ruleTitle}
      </PrimaryText>
      <PrimaryText color="#FFFFFF">{ruleDesc}</PrimaryText>
    </Box>
  );
};

RuleBlock.propTypes = {
  ruleTitle: PropTypes.string,
  ruleDesc: PropTypes.string,
};

export default RuleBlock;
