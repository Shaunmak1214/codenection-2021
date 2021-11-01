import React from 'react';
import { Center, Container, HStack, SimpleGrid } from '@chakra-ui/layout';
import { SponsorsBlock } from '../../molecules';
import { PrimaryText, SecondaryText } from '../../atoms/';
import {
  TitleSponsor,
  PlatinumSponsor,
  GoldSponsor,
  SilverSponsor,
  BronzeSponsor,
} from '../../../data/sponsorData';
import { SecondaryButton } from '../../atoms';
import {
  BecomeOurSponsorIcon,
  SponsorProposal,
  StockSponsor,
} from '../../../assets';
import { Image } from '@chakra-ui/image';
const SponsorSection = () => {
  const sponsorVisible = false;

  return (
    <Center bg="#EFF8F7" py="100px" id="sponsors">
      <Container maxW="container.xl" textAlign="center">
        <SecondaryText
          fontWeight="bold"
          fontSize={['2xl', '3xl', '4xl']}
          mb={['30px', '40px', '50px']}
        >
          SPONSORS AND PARTNERS
        </SecondaryText>
        {sponsorVisible ? (
          <>
            <SponsorsBlock sponsorData={TitleSponsor} />
            <SponsorsBlock sponsorData={PlatinumSponsor} />
            <SponsorsBlock sponsorData={GoldSponsor} />
            <SponsorsBlock sponsorData={SilverSponsor} />
            <SponsorsBlock sponsorData={BronzeSponsor} />
            <SimpleGrid mt="15px" columns={1} spacing={[2, 5, 10]} w="100%">
              <SecondaryButton
                bg="linear-gradient(90deg, #002A97 0%, #2054AC 50.52%, #407DC1 100%);"
                _hover={{
                  bg: 'linear-gradient(90deg, #001549 0%, #0b2e69 50.52%, #213347 100%);',
                }}
                color="#FFFFFF"
                border="none"
                px="20"
                py="25px"
                borderRadius="15px"
                onClick={() => {
                  window.open(
                    'https://00f74ba44b8d608dcb2724e664b4ca224c384745ac-apidata.googleusercontent.com/download/storage/v1/b/codenection-resumes/o/sponsorship_proposal.pdf?jk=AFshE3WZ-xJ898_Dfnse1-ia1c-IxvORJKeIkInFdxnaHc50Hac2bhEze-0CnoKo-qspqnFROn8wRkGQmyMJdE_DrtuJ9cxXIi6eUZ1jWRiCsXIcA67Qtet94Kt1mItFuuVEcaLoHsfkwuPJEkjB74OYYGl3VV2092sjfA8ev6JYMGwNRjsEbgtU-AGl0432X9CQWtWrwy8E2-_qH3aplI2Zl0i_T5ywVXqqjfNknX3QAJMAOljGiGT8vH1u8YV8h-Y5oisveHfc6t5JvZyuXiOgO4pdMK27lhW1KOQ-ByBg4UUDFFT1i0AFq41WEMbsPVo1-4Dzwm3WvUGlD7r4PTALJfW89NiIF2E38WjXTlgkatPXNthNjJhZj5NzbOCDtFrTg9TyHM11D_sCrOmfRAYIvp4AT23iaTk2ZyWGQLHORppKuGonevpkodZtAfn5lEzmhC46AUNDF6suJbNyx8aXIR-yPGF2_iNSozb7IkqCyFws6XeN3HDnUS17shUxWa9Bfkk_lCaRhToiyznlF_HFiRy18UrYhpRczL0-qBmVkavyu5yxZj16-tRu0x4NuGFseS3DzKbJz0hG-3sjzW00UIl583GsObFGYvtJZl9i0vCek2pU3iK5Tmn8XGyn4jBJXZPtJek88l9H6HNoxQRVPX-138AwgeuCm4Po5QaMmL5_Xc4XUYxwIulJEHjLvCFKfGBJo9aEZd6iY1N-gXeHpg9imSlt9pSOF5SRxsAT50Sri-aW2gWEOfDhxOEAQQ_Xe4-fZB25zIAWPbpGR2aACVGGxLx1VT757oogbjZuxc4DCvmgdqUWB5wGxcdGTV6Q8gG-bFplO2glWLwEBhRX2-7ZRnF3fYuv5teiSNv_bWu4P39A_w3EntCMg1GazstO5Yog2Zgz3FamzKB02FdI3K6Z7MfmPtuOD-8YVKwjdC86o6Clfy1r9x3ckvQMOZwJbiuzet8uZd37yrZax9fk&isca=1',
                    '_blank',
                  );
                }}
              >
                <HStack alignItems="center">
                  <BecomeOurSponsorIcon
                    style={{
                      marginTop: '-2px',
                      marginRight: '10px',
                      height: '18px',
                    }}
                  />
                  <PrimaryText fontSize="md">Become a Sponsor</PrimaryText>
                </HStack>
              </SecondaryButton>
              {/* <SecondaryButton
            bg="linear-gradient(90deg, #002A97 0%, #2054AC 50.52%, #407DC1 100%);"
            _hover={{
              bg: 'linear-gradient(90deg, #001549 0%, #0b2e69 50.52%, #213347 100%);',
            }}
            color="#FFFFFF"
            border="none"
            px="20"
            py="25px"
            borderRadius="15px"
          >
            <HStack alignItems="center">
              <PrimaryText fontSize="md">
                Read more about our sponsor
              </PrimaryText>
              <ArrowRight
                style={{
                  marginTop: '5px',
                  marginRight: '10px',
                  height: '18px',
                }}
              />
            </HStack>
          </SecondaryButton> */}
            </SimpleGrid>
          </>
        ) : (
          <Center w="100%" d="flex" flexDir="column">
            <Image src={StockSponsor} />

            <SecondaryButton
              bg="linear-gradient(90deg, #002A97 0%, #2054AC 50.52%, #407DC1 100%);"
              _hover={{
                bg: 'linear-gradient(90deg, #001549 0%, #0b2e69 50.52%, #213347 100%);',
              }}
              color="#FFFFFF"
              border="none"
              w={['90%', '75%', '60%']}
              px="20"
              py="25px"
              borderRadius="15px"
              onClick={() => {
                window.open(SponsorProposal, '_blank');
              }}
            >
              <HStack alignItems="center">
                <BecomeOurSponsorIcon
                  style={{
                    marginTop: '-2px',
                    marginRight: '10px',
                    height: '18px',
                  }}
                />
                <PrimaryText fontSize="md">Become a Sponsor</PrimaryText>
              </HStack>
            </SecondaryButton>
          </Center>
        )}
      </Container>
    </Center>
  );
};

export default SponsorSection;
