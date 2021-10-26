import React from 'react';
import {
  Center,
  Container,
  VStack,
  HStack,
  Box,
  SimpleGrid,
} from '@chakra-ui/react';
import { Text, Button } from '@chakra-ui/react';
import { BoxIcons } from '../../molecules';
import { EditProfileIcon, SaveIcon, ReturnIcon } from '../../../assets';
import { ProfileBoxTitle } from '../../atoms';
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
  console.log(formikProps);
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
                      <SimpleGrid
                        columns={2}
                        spacing={0}
                        margin="30px auto"
                        alignItems="center"
                      >
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
                              <Text fontSize="lg">
                                {child.props.userData === null
                                  ? '-'
                                  : child.props.name == 'dob'
                                  ? new Date(
                                      `${child.props.userData}`,
                                    ).toLocaleDateString('en-US')
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
