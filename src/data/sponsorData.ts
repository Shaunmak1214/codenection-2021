import {
  TitleBG,
  PlatinumBG,
  GoldBG,
  SilverBG,
  BronzeBG,
  StockLogo,
} from '../assets';

interface SponsorsObject {
  type: string;
  level: number;
  flags: string;
  links?: string;
  data: dataObject[];
}

interface dataObject {
  idx: number;
  imageSrc: string;
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
      imageSrc: StockLogo,
    },

    {
      idx: 1,
      imageSrc: StockLogo,
    },

    {
      idx: 2,
      imageSrc: StockLogo,
    },
  ],
};

const GoldSponsor: SponsorsObject = {
  type: 'Gold',
  level: 4,
  flags: GoldBG,
  data: [
    {
      idx: 0,
      imageSrc: StockLogo,
    },
    {
      idx: 1,
      imageSrc: StockLogo,
    },
    {
      idx: 2,
      imageSrc: StockLogo,
    },
    {
      idx: 3,
      imageSrc: StockLogo,
    },
    {
      idx: 4,
      imageSrc: StockLogo,
    },
    {
      idx: 5,
      imageSrc: StockLogo,
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
      imageSrc: StockLogo,
    },
    {
      idx: 1,
      imageSrc: StockLogo,
    },
    {
      idx: 2,
      imageSrc: StockLogo,
    },
    {
      idx: 3,
      imageSrc: StockLogo,
    },
    {
      idx: 4,
      imageSrc: StockLogo,
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
      imageSrc: StockLogo,
    },
    {
      idx: 1,
      imageSrc: StockLogo,
    },
    {
      idx: 2,
      imageSrc: StockLogo,
    },
    {
      idx: 3,
      imageSrc: StockLogo,
    },
    {
      idx: 4,
      imageSrc: StockLogo,
    },
    {
      idx: 5,
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
