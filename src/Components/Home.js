import styled from 'styled-components';

const StyledDiv = styled.div`
    background-image:url('https://images.unsplash.com/photo-1606589368250-cefcd8b4e306?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80');
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;

    p {
        color:white;
        font-size:20px;
        position:absolute;
        left:20%;
        top:40%;
        max-width:350px;
        line-height:25px;
    }
`;

function Home() {
  return (
    <StyledDiv>
      <p>"Posuere ac ut consequat semper. Eget sit amet tellus cras adipiscing enim eu. Leo vel orci porta non. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. Odio tempor orci dapibus ultrices in iaculis nunc. Dignissim suspendisse in est ante in nibh mauris." - Namn Efternamn</p>
    </StyledDiv>
  );
}
export default Home;
