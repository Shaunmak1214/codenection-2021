import React from 'react';
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
import { EditProfileIcon, SaveIcon, ReturnIcon } from '../../../assets';
import { PrimaryButton, ProfileBoxTitle } from '../../atoms';
import { Spinner } from '@chakra-ui/react';
import PropTypes from 'prop-types';

interface Props {
  title: string;
  profileLoading?: boolean;
  children: any;
  updateUser?: (data: any) => void;
  edit?: boolean;
  setEdit?: any;
  updateLoading?: boolean;
}
const ProfileBlock = ({
  edit,
  updateUser,
  title,
  profileLoading,
  updateLoading,
  setEdit,
  // eslint-disable-next-line no-unused-vars

  ...props
}: Props) => {
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
              {edit ? (
                <>
                  <HStack mr="35px">
                    <BoxIcons
                      icon={ReturnIcon}
                      onClick={() => setEdit(!edit)}
                      mr="25px"
                      my="0"
                      w="42px"
                      h="42px"
                    />{' '}
                    <BoxIcons
                      icon={SaveIcon}
                      onClick={() => setEdit(!edit)}
                      bg="#96E5F1"
                      mr="25px"
                      my="0"
                      w="42px"
                      h="42px"
                    />{' '}
                    <PrimaryButton
                      bg="#3CCD94"
                      color="#FFFFFF"
                      borderRadius="10px"
                      type="submit"
                      _hover={{ bg: '#36B381' }}
                      onClick={updateUser}
                    >
                      {updateLoading ? <Spinner /> : 'Save'}
                    </PrimaryButton>
                  </HStack>
                </>
              ) : (
                <BoxIcons
                  icon={EditProfileIcon}
                  onClick={() => setEdit(!edit)}
                  mr="25px"
                  my="0"
                  w="42px"
                  h="42px"
                />
              )}
            </Box>
          </HStack>
          {profileLoading ? (
            <Box py="120px">
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            </Box>
          ) : (
            <>
              {' '}
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
                              <Text fontSize="lg">
                                {child.props.userData === null
                                  ? '-'
                                  : child.props.userData}
                              </Text>
                            </Box>
                          </>
                        )}
                      </SimpleGrid>
                    </>
                  );
                })}
              </Container>
            </>
          )}
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
