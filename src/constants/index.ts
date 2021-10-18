import EmailGifData from '../assets/lottie/verify-email-gif.json';
import WarningGifData from '../assets/lottie/warning.json';

export const EmailLoader = {
  loop: true,
  autoplay: true,
  animationData: EmailGifData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export const Warning = {
  loop: true,
  autoplay: true,
  animationData: WarningGifData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
