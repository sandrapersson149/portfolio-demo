import styled from 'styled-components';

const ProjectWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
max-width: 1300px;
margin: 0 auto;
position: relative;
top: 100px;
`

const ImgCard = styled.div`
margin: 50px;

p{
  position: absolute;
  width: 35%;
  margin:-20px;
  color:white;
  background-color: #D84797;
  padding: 10px;
  font-size:24px;
  font-weight:600;
  letter-spacing:2px;
  z-index:2;
  animation-name: moveInleft;
  animation-duration: 3s;
}
div {
  height: 500px;
  width: 500px;
  
  overflow: hidden;
  animation-name: moveInRight;
  animation-duration: 3s;
}
img {
  width: auto;
  height:100%;
}
@keyframes moveInleft {
    0% {
        opacity: 0.4;
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

@keyframes moveInRight {
    0% {
        opacity: 0.4;
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

function Projects() {
  return (
    <ProjectWrapper>
      {/* <h2>My Work</h2> */}

      <ImgCard>
        <p>UX-design</p>
        <div>
          <img src='https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'></img>
        </div>
      </ImgCard>

      <ImgCard>
        <p>Responsive layouts</p>
        <div>
          <img src='https://images.unsplash.com/photo-1545235617-9465d2a55698?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njl8fGRlc2lnbiUyMHV4fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'></img>
        </div>
      </ImgCard>

      <ImgCard>
        <p>Designing mobile-app</p>
        <div>
          <img src='https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'></img>
        </div>
      </ImgCard>
      <ImgCard>
        <p>Website for "The Alliance"</p>
        <div>
          <img src='https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1902&q=80'></img>
        </div>
      </ImgCard>

    </ProjectWrapper>

  );
}
export default Projects;







