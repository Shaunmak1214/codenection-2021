import { PlatWriteUpBG, FusionexFullLogo } from '../assets';

interface WriteUps {
  type: string;
  flags: string;
  data: dataObject[];
}

interface dataObject {
  idx: number;
  url: string;
  imageSrc: string;
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
    },
  ],
};

export { PlatSponsorWriteUps };
