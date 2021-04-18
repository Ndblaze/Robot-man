 // first part pic import
import svg4 from '../../images/svg-5.svg';

// second part pic import
import svg2 from '../../images/svg-2.svg';

// third part pic import
import robot from '../../images/robotics.svg';

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'premium Analysis',
    headline: 'Real Time Data Analysis & Statistics ',
    discription: 'Get access to our exclusive real time data processing tool to scale and better understand the need of your customers.',
    buttonLabel: 'Get Started',
    imgStart: false,
    img: svg4,
    alt: 'car',
    dark: true,
    primary: true,
    darkText: false,
    
};

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Unlimited Access',
    headline: 'Login to your account at any time',
    discription: 'We have you covered no matter where you are located. All you need is an internet connection and a phone or computer',
    buttonLabel: 'Learn More',
    imgStart: true,
    img: svg2,
    alt: 'Piggybank',
    dark: false,
    primary: false,
    darkText: true,
    
};

export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Airtificial Intelligence (AI)',
    headline: 'Get access to our AI integrated tools',
    discription: 'Get support to your user experience with our AI systems, Also get to learn more about it',
    buttonLabel: 'Start Now',
    imgStart: false,
    img: robot,
    alt: 'paper',
    dark: false,
    primary: false,
    darkText: true,
    
};