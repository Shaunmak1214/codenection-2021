import React, { useState } from 'react';
import {
  Center,
  Container,
  VStack,
  HStack,
  Box,
  SimpleGrid,
} from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { BoxIcons } from '../../molecules';
import { EditProfileIcon } from '../../../assets';
import { ProfileBoxTitle } from '../../atoms';
import PropTypes from 'prop-types';
interface Props {
  title: string;
  children: any;
}
const ProfileBlock = ({ title, ...props }: Props) => {
  const [edit, setEdit] = useState(false);
  const children = props.children;

  return (
    <Center>
      <Container mt="35px" maxW="800px" w="750px">
        <VStack
          bg="#FFFFFFF"
          boxShadow="0px 16px 40px rgba(134, 134, 134, 0.25) "
          borderRadius="10px"
          py="15px"
        >
          <HStack
            w="100%"
            justifyContent="space-between"
            my="15px"
            alignItems="center"
          >
            <ProfileBoxTitle title={title} />
            <Box>
              <BoxIcons
                icon={EditProfileIcon}
                onClick={() => setEdit(!edit)}
                mr="25px"
                my="0"
                w="42px"
                h="42px"
              />
            </Box>
          </HStack>
          <Container>
            {React.Children.map(children, (child) => {
              return (
                <>
                  <SimpleGrid columns={2} spacing={0} margin="30px auto">
                    <Text color="#002A97" fontSize="lg" fontWeight="bold">
                      {child.props.customlabel}
                    </Text>

                    {edit ? (
                      <>
                        <Box>{child}</Box>
                      </>
                    ) : (
                      <>
                        <Box>
                          {' '}
                          <Text>{child.props.userData}</Text>
                        </Box>
                      </>
                    )}
                  </SimpleGrid>
                </>
              );
            })}
          </Container>
        </VStack>
      </Container>
    </Center>
  );
};

ProfileBlock.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ProfileBlock;
