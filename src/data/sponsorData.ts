import {
  TitleBG,
  PlatinumBG,
  GoldBG,
  SilverBG,
  BronzeBG,
  StockLogo,
  FusionexFullLogo,
  DerivBlackLogo,
  GoldPlaceholder,
  MoceanAPILogo,
  VAimLogo,
  FlexLogo,
  SkyDrive,
} from '../assets';

interface SponsorsObject {
  type: string;
  level: number;
  flags: string;
  links?: string;
  data: dataObject[];
  placeholderSrc?: string;
}

interface dataObject {
  idx: number;
  imageSrc: string;
  url?: string;
  writeUpSection?: string;
}

const TitleSponsor: SponsorsObject = {
  type: 'Title',
  level: 1,
  flags: TitleBG,
  data: [
    {
      idx: 0,
      imageSrc: StockLogo,
    },
  ],
};

const PlatinumSponsor: SponsorsObject = {
  type: 'Platinum',
  level: 3,
  flags: PlatinumBG,
  data: [
    {
      idx: 0,
      imageSrc: FusionexFullLogo,
      url: 'https://www.fusionexgroup.com/',
      writeUpSection: '/write-ups#fusionex',
    },
    {
      idx: 1,
      imageSrc: FlexLogo,
      url: 'https://flex.com/',
      writeUpSection: '/write-ups#flex',
    },
  ],
};

const GoldSponsor: SponsorsObject = {
  type: 'Gold',
  level: 4,
  flags: GoldBG,
  placeholderSrc: GoldPlaceholder,
  data: [
    {
      idx: 0,
      imageSrc: MoceanAPILogo,
      url: 'https://moceanapi.com/',
      writeUpSection: '/write-ups#moceanapi',
    },
    {
      idx: 1,
      imageSrc: VAimLogo,
      url: 'https://www.v-aim.com/',
      writeUpSection: '/write-ups#vaim',
    },
  ],
};

const SilverSponsor: SponsorsObject = {
  type: 'Silver',
  level: 5,
  flags: SilverBG,
  data: [
    {
      idx: 0,
      imageSrc: DerivBlackLogo,
      url: 'https://deriv.com/',
    },
  ],
};

const BronzeSponsor: SponsorsObject = {
  type: 'Bronze',
  level: 6,
  flags: BronzeBG,
  data: [
    {
      idx: 0,
      imageSrc: SkyDrive,
      url: 'https://www.skydrivesolutions.com/',
    },
  ],
};

export {
  TitleSponsor,
  PlatinumSponsor,
  GoldSponsor,
  SilverSponsor,
  BronzeSponsor,
};
