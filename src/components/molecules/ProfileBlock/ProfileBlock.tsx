import React from 'react';
import {
  Center,
  Container,
  VStack,
  HStack,
  Box,
  SimpleGrid,
  Text,
  Button,
  Spinner,
  Image,
  Flex,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import dateFormat from 'dateformat';

import { BoxIcons } from '../../molecules';
import { ProfileBoxTitle } from '../../atoms';

import {
  EditProfileIcon,
  SaveIcon,
  ReturnIcon,
  TickIcon,
} from '../../../assets';

interface Props {
  title: string;
  profileLoading?: boolean;
  children: any;
  updateUser?: (data: any) => void;
  edit?: boolean;
  setEdit?: any;
  updateLoading?: boolean;
  formikProps: any;
}

const ProfileBlock = ({
  edit,
  title,
  profileLoading,
  updateLoading,
  setEdit,
  formikProps,
  ...props
}: Props) => {
  const children = props.children;
  return (
    <Center>
      <Container mt="35px" maxW="800px" w={['100%', '100%', '750px']}>
        <VStack
          bg="#FFFFFFF"
          boxShadow="0px 16px 40px rgba(134, 134, 134, 0.25) "
          borderRadius="10px"
          py="15px"
        >
          <Flex
            flexDir={['column', 'column', 'row']}
            w="100%"
            justifyContent="space-between"
            my="15px"
            alignItems={['none', 'none', 'center']}
          >
            <ProfileBoxTitle title={title} />
            <Box d={['flex', 'flex', 'block']} justifyContent="flex-end">
              {edit ? (
                <>
                  <HStack mr="35px !important">
                    <BoxIcons
                      icon={ReturnIcon}
                      onClick={() => {
                        setEdit(!edit);

                        formikProps.resetForm(formikProps.initialValues);
                      }}
                      mr="20px"
                      my="0"
                      w="42px"
                      h="42px"
                    />{' '}
                    <Button
                      _hover={{
                        transform: 'scale(1.1)',
                        transition: 'all .3s ease-in-out',
                      }}
                      boxShadow="0px 4px 10px rgba(159, 159, 159, 0.25)"
                      borderRadius="10px"
                      bg="#96E5F1"
                      type="submit"
                      bgImage={updateLoading ? 'none' : SaveIcon}
                      bgRepeat="no-repeat"
                      w="42px"
                      h="42px"
                      backgroundPosition="center"
                      backgroundSize="25px 25px"
                      isLoading={updateLoading}
                    ></Button>
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
          </Flex>
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
              <Container>
                {React.Children.map(children, (child) => {
                  return (
                    <>
                      <SimpleGrid
                        columns={[1, 1, 2]}
                        spacing={0}
                        margin="30px auto"
                        alignItems="center"
                      >
                        <Text color="#002A97" fontSize="lg" fontWeight="bold">
                          {child.props.customlabel}
                          {child.props.required && edit && (
                            <span style={{ color: '#FF6D6D' }}> *</span>
                          )}
                        </Text>

                        {edit ? (
                          <>
                            <Box>{child}</Box>
                          </>
                        ) : (
                          <>
                            <Box>
                              <Text fontSize="lg">
                                {child.props.userData === null ||
                                child.props.userData === '' ? (
                                  '-'
                                ) : child.props.name == 'dob' ? (
                                  dateFormat(
                                    new Date(`${child.props.userData}`),
                                    'dd/mm/yyyy',
                                  )
                                ) : child.props.name ==
                                  'expected_graduation' ? (
                                  dateFormat(
                                    new Date(`${child.props.userData}`),
                                    'dd/mm/yyyy',
                                  )
                                ) : child.props.name !== 'resume' ? (
                                  child.props.userData
                                ) : child.props.userData !== undefined ? (
                                  <HStack w="100%" alignItems="center">
                                    <Center
                                      w="100%"
                                      boxShadow="0px 4px 10px rgba(132, 132, 132, 0.25);"
                                      borderRadius="10px"
                                      backgroundColor="white"
                                      px="12px"
                                      py="7px"
                                      mr="10px"
                                    >
                                      <Image
                                        src={TickIcon}
                                        alt="icon"
                                        h="18px"
                                        w="18px"
                                        mr="10px"
                                      />
                                      <Text fontSize="md">Uploaded</Text>
                                    </Center>
                                  </HStack>
                                ) : (
                                  '-'
                                )}
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
