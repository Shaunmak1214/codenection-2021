import React from 'react';
import PropTypes from 'prop-types';
import { HStack, Image, Text, Box } from '@chakra-ui/react';
import { LeaderIcon, MemberIcon } from '../../../assets';
interface Props {
  category: string;
  leader?: boolean;
  member: string;
}

const TeamMember = ({ leader = false, category, member }: Props) => {
  return (
    <HStack textAlign="center" w="80%" pb="10px" alignItems="none">
      <Box d="flex" justifyContent="flex-start" w="10%" alignItems="flex-start">
        {' '}
        <Box
          bg={category === 'closed' ? '#0099B8' : '#0078FF'}
          d="flex"
          w="25px"
          h="25px"
          borderRadius="8px"
          justifyContent="center"
          alignItems="center"
        >
          <Image src={leader ? LeaderIcon : MemberIcon} />
        </Box>
      </Box>

      <Box textAlign="center" w="195px">
        <Text fontWeight="bold">{member}</Text>
      </Box>
    </HStack>
  );
};

TeamMember.propTypes = {
  category: PropTypes.string,
  leader: PropTypes.bool,
  member: PropTypes.string,
};
React.memo(TeamMember);
export default TeamMember;
