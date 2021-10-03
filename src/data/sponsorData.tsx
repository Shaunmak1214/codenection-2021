import {
    CNFullLogo,
    TitleBG,
    PlatinumBG,
    GoldBG,
    SilverBG,
    BronzeBG,
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
            imageSrc: CNFullLogo,
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
            imageSrc: CNFullLogo,
        },

        {
            idx: 1,
            imageSrc: CNFullLogo,
        },

        {
            idx: 2,
            imageSrc: CNFullLogo,
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
            imageSrc: CNFullLogo,
        },
        {
            idx: 1,
            imageSrc: CNFullLogo,
        },
        {
            idx: 2,
            imageSrc: CNFullLogo,
        },
        {
            idx: 3,
            imageSrc: CNFullLogo,
        },
        {
            idx: 4,
            imageSrc: CNFullLogo,
        },
        {
            idx: 5,
            imageSrc: CNFullLogo,
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
            imageSrc: CNFullLogo,
        },
        {
            idx: 1,
            imageSrc: CNFullLogo,
        },
        {
            idx: 2,
            imageSrc: CNFullLogo,
        },
        {
            idx: 3,
            imageSrc: CNFullLogo,
        },
        {
            idx: 4,
            imageSrc: CNFullLogo,
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
            imageSrc: CNFullLogo,
        },
        {
            idx: 1,
            imageSrc: CNFullLogo,
        },
        {
            idx: 2,
            imageSrc: CNFullLogo,
        },
        {
            idx: 3,
            imageSrc: CNFullLogo,
        },
        {
            idx: 4,
            imageSrc: CNFullLogo,
        },
        {
            idx: 5,
            imageSrc: CNFullLogo,
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
