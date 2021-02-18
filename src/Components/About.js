// import Weather from './Weather';
// import Github from './Github';
import styled from 'styled-components';
// import styled, { keyframes } from 'styled-components';

const AboutWrapper = styled.div`
position:absolute;
left:25%;
top:25%;
color:white;
display:flex;

`
const TextContainer = styled.div`
   animation-name: moveInleft;
    animation-duration: 3s;
max-width:600px;
h3{
  color: #D84797;
  font-size:90px;
}
p{
  font-size:24px;
  line-height:30px;
  letter-spacing:1px;
  font-weight:100;
  margin-top:20px;
}
@keyframes moveInleft {
    0% {
        opacity: 0;
        transform: translateX(-100px);
    }

    80% {
        transform: translateX(10px);
    }
    100% {
        opacity: 1;
        transform: translate(0);
    }
}
`


const ImgContainer = styled.div`
img {
  width: 50%;
  margin-left:20px;
  animation-name: moveInRight;
    animation-duration: 3s;
}
@keyframes moveInRight {
    0% {
        opacity: 0;
        transform: translateX(100px);
    }

    80% {
        transform: translateX(-10px);
    }
    
    100% {
        opacity: 1;
        transform: translate(0);
    }

}

`

function About() {

  return (
    <AboutWrapper>
      {/* <Weather />
    <Github /> */}
      <TextContainer>
        <h3>Hi, I´m Sam!</h3>
        <p>I’ve spent the past 5+ years working with digital design; front-end development, marketing site pages, app UI/UX, to my current role designing products for mobile platforms.</p>
        <p>I enjoy researching, designing, prototyping, and coding. Out of the office you’ll find me traveling, playing piano, and hanging out with my family.</p>
      </TextContainer>
      <ImgContainer>
        <img src='https://images.unsplash.com/photo-1552504462-0c6b5fef0925?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTg3fHxtYW4lMjBpdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt='Sam Lopez'></img>
      </ImgContainer>
    </AboutWrapper>
  );
}

export default About;
