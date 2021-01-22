import styled from 'styled-components';

const StyledDiv = styled.div`
    background-image:url('https://images.unsplash.com/photo-1606589368250-cefcd8b4e306?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80');
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    
    p {
        color:white;
        font-size:25px;
        position:absolute;
        left:20%;
        top:35%;
        max-width:450px;
        line-height:28px;
        letter-spacing: 1px;
    }
`;
// transform: rotate(360deg);
// transform-origin: top left;
const StyledDivTitle = styled.div`
/* position: absolute; */
/* right:20%;
top:30%; */
color: white;
h1 {
    background-color: rgb(224, 224, 224, 0.2);
    position: absolute;
    top: 35%;
    right: 20%;
    color: #fff;
    border:3px solid white;
    display: block;
    width: 300px;
    height: 250px;
    border-radius: 5px;
    transform: scale(1) rotate(40deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg);
      span{
      top: 35%;
      right: 10%;
      position: absolute;
      font-size: 50px;
      transform: scale(1) rotate(-40deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg);
      }
    }
h2 {
    background-color: rgb(224, 224, 224, 0.1);
    position: absolute;
    top: 25%;
    right: 13%;
    color: #fff;
    border:3px solid white;
    display: block;
    width: 200px;
    height: 150px;
    border-radius: 5px;
    transform: scale(1) rotate(40deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg);
      span{
      top: 15%;
      left: 10%;
      position: absolute;
      font-size: 30px;
      font-weight: 200;
      transform: scale(1) rotate(-40deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg);
      }
    }
h3 {
    background-color: rgb(224, 224, 224, 0.1);
    position: absolute;
    top: 55%;
    right: 32%;
    color: #fff;
    border:3px solid white;
    display: block;
    width: 200px;
    height: 150px;
    border-radius: 5px;
    transform: scale(1) rotate(40deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg);
      span{
      top: 35%;
      right: 18%;
      position: absolute;
      font-size: 30px;
      font-weight: 200;
      transform: scale(1) rotate(-40deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg);
      }
    }
`;

function Home() {
  return (
    <>
      <StyledDiv>
        <p>I have a passion for design and I always seek new opportunities and challenges. There is nothing I won't do to make your dream project come true. I love what I do!</p>
        <StyledDivTitle>
          <h2><span>Front end developer</span></h2>
          <h1><span>Sam Lopez</span></h1>
          <h3><span>JavaScript</span></h3>
        </StyledDivTitle>

      </StyledDiv>

    </>
  );
}
export default Home;
