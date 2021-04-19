import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'



const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () =>{
        setHover(!hover);
    };  
    return (
        <HeroContainer id='home'>
           <HeroBg>
               <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
           </HeroBg>
           <HeroContent>
               <HeroH1>Big On Data Science & AI</HeroH1>
               <HeroP> Empowering Your Business with Data Science and AI Technology World Wide </HeroP>
               <HeroBtnWrapper>
                   <Button to='signup'
                   onMouseLeave={onHover}
                   onMouseEnter={onHover}
                   primary = 'true'
                   dark = 'true'
                   smooth={true} duration={500} spy={true} exact= 'true' offset={-80}
                   >
                       Get Started  {hover ? <ArrowForward /> : <ArrowRight />}
                   </Button>
               </HeroBtnWrapper>

           </HeroContent>
        </HeroContainer>
    );
}

export default HeroSection
