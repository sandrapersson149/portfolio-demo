import { Link } from "react-router-dom";
import styled from 'styled-components';

const StyledNav = styled.nav`
position:relative;


ul {
  position:absolute;
  top:0;
  display:flex;
  left:50%;
  transform:translateX(-50%);
  list-style:none;
  /* background-color:blue; */
  justify-content:center;
  align-items:center;
  
  
}
li{
  font-family:Helvetica;
  font-weight:200;
  letter-spacing:1px;
  margin:15px 30px;
  font-size:30px;
  text-transform:uppercase;
  
}
a{
  text-decoration:none;
  color: white;
}
a:hover{
  color: #D84797;
}
`
const Navbar = () => {

  return (
    <StyledNav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/projects'>Projects</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </StyledNav>
  );
}

export default Navbar;