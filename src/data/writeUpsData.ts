import {
  PlatWriteUpBG,
  FusionexFullLogo,
  MoceanAPILogo,
  GoldWriteUpBG,
  VAimLogo,
  FlexLogo,
} from '../assets';

interface WriteUps {
  type: string;
  flags: string;
  data: dataObject[];
}

interface dataObject {
  idx: number;
  url: string;
  imageSrc: string;
  linkText: string;
  writeUps?: string;
}

// const TitleSponsorWriteUps: WriteUps = {
//   type: 'Title',
//   flags: TitleWriteUpBG,
//   data: [
//     {
//       idx: 0,
//       imageSrc: StockLogo,
//     },
//   ],
// };

const PlatSponsorWriteUps: WriteUps = {
  type: 'Platinum',
  flags: PlatWriteUpBG,
  data: [
    {
      idx: 0,
      imageSrc: FusionexFullLogo,
      url: 'https://www.fusionexgroup.com/',
      linkText: 'https://www.fusionexgroup.com/',
      writeUps: `Fusionex is an established multi-award-winning data technology leader specializing in Analytics, Big Data Management, IR 4.0, Internet of Things, Machine Learning and Artificial Intelligence. Its state-of-the-art offerings are focused on helping clients unlock value and derive insights from data.\n
      Featured on Forbes, Bloomberg, Gartner, IDC, Forrester, Edison, and Huffington Post, Fusionex is the largest Big Data Analytics company and market leader in ASEAN, bringing cutting-edge, innovative, and breakthrough data-driven platforms to its stable of clientele (including Fortune 500, FTSE companies, large conglomerates and SMEs that spans across the United States, Europe, as well as Asia Pacific. Fusionex is also a MDEC Global Acceleration and Innovation Network (GAIN) company as well as an MSC R&D MGS award recipient.\n
      Gartner’s report on Modern Analytics and Business Intelligence shortlisted and commended Fusionex’s data technology platform. In addition, Fusionex has been identified as a Major Player in IDC’s MarketScape Report for Big Data & Analytics. Fusionex is the only ASEAN-based company to be featured in both reports, cementing its credentials in the data technology market for this region. \n
      At Fusionex, we believe in discovering, nurturing, and unlocking the potential of individuals. Regardless if you are a fresh graduate or a seasoned professional, so long as you have a ‘can-do, do-it-well’ attitude, we will always provide the opportunities, support, and platform for you.\n
      We also believe that continuous learning is key to progress. As such, we encourage and support individuals who aspire to explore, learn and grow.\n
      To learn more about Fusionex, visit www.fusionex-international.com`,
    },
    {
      idx: 1,
      imageSrc: FlexLogo,
      url: 'https://flex.com/',
      linkText: 'https://flex.com/',
      writeUps: `Flex is the manufacturing partner of choice that helps a diverse customer base design and build products that improve the world. Through the collective strength of a global workforce across 30 countries and responsible, sustainable operations, Flex delivers technology innovation, supply chain, and manufacturing solutions to various industries and end markets. For more information, visit flex.com.`,
    },
  ],
};

const GoldSponsorWriteUps: WriteUps = {
  type: 'Gold',
  flags: GoldWriteUpBG,
  data: [
    {
      idx: 0,
      imageSrc: MoceanAPILogo,
      linkText: 'www.moceanapi.com',
      url: 'https://moceanapi.com/',
      writeUps: `MoceanAPI is a cloud communication platform for software developers to embed real-time messaging, voice, and 
      verification within their applications. \n\nMoceanAPI Web API and SDK provides instant access to all the communication infrastructures needed to reach 
      anyone around the globe.\n\n Visit www.moceanapi.com for the API info and sample codes to get you started`,
    },
    {
      idx: 1,
      imageSrc: VAimLogo,
      linkText: 'https://www.v-aim.com/',
      url: 'https://www.v-aim.com/',
      writeUps:
        '\n\n\nWe are a young and energetic team and specialise in cutting edge software development\n\n\n',
    },
  ],
};

export { PlatSponsorWriteUps, GoldSponsorWriteUps };
