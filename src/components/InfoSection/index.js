import React from 'react'
import { Button } from '../ButtonElement';
import { InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    BtnWrap, 
    Column2, 
    Img, 
    ImgWrap
 } from './InfoElements';

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, discription, buttonLabel, img, alt, dark, dark2, primary}) => {
    return (
        <>
          <InfoContainer  lightBg={lightBg} id={id}>
               <InfoWrapper>
                   <InfoRow imgStart={imgStart}>
                       <Column1>
                          <TextWrapper>
                              <TopLine>{topLine}</TopLine>
                              <Heading lightText={lightText} >{headline}</Heading>
                              <Subtitle darkText={darkText} >{discription}</Subtitle>
                              <BtnWrap>
                                  <Button to='home' 
                                    smooth={true} 
                                    duration={500} 
                                    spy={true} 
                                    exact='true'
                                    offset={-80} 
                                    primary= {primary ? 1 : 0 }
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}
                                    > {buttonLabel} 
                                    
                                  </Button>
                              </BtnWrap>
                          </TextWrapper>
                       </Column1>
                       <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                       </Column2>
                   </InfoRow>
               </InfoWrapper>
          </InfoContainer>  
        </>
    )
}

export default InfoSection

