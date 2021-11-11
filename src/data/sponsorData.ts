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
  BronzePlaceholder,
  MoceanAPILogo,
  VAimLogo,
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
    },
    {
      idx: 1,
      imageSrc: VAimLogo,
      url: 'https://www.v-aim.com/',
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
  placeholderSrc: BronzePlaceholder,
  data: [
    {
      idx: 0,
      imageSrc: StockLogo,
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
