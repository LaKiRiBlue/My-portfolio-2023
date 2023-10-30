import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BurgerMenuIcon = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  width: 37px;
  height: 26px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 999; /* Ensures the icon is above other content */
  svg {
    fill: black; /* Set the fill color to black for the SVG (burger icon) */
  }
`;

const Line = styled.div`
  width: 100%;
  height: 3px;
  background-color: black;
`;

const Menu = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 50px;
  left: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 1);
  z-index: 9999;
  background: rgba(0, 0, 0, 0.5);
  max-height: ${props => (props.isOpen ? '200px' : '0')}; /* Set max-height to control the slide effect */
  overflow: hidden; /* Hide overflowing content */
  transition: max-height 0.8s ease;
`;



const MenuItem = styled.div`
  width: 200px;
  background-color: #fff;
  padding: 15px;
  margin-top: 2px;
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
`;
const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 0 auto;
    background-color: #fff;
    width: 100%;
    height: 100%;
    padding: 0 0 0 0;
    border: 1px solid #000;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    color: #000;
    text-align: center;
    h1 {
        font-size: 2.5em;
        font-weight: 700;
        margin: 30 0 0 0;
        padding: 0 0 0 0;
        }
    p {
        font-size: 1.5em;
        font-weight: 400;
        margin: 20 0 0 0;
        padding: 0 0 0 0;
    }
}
`;



const FrontendProjects = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <BurgerMenuIcon onClick={toggleMenu}>
        <Line />
        <Line />
        <Line />
      </BurgerMenuIcon>
      <Menu isOpen={isOpen}>
        <MenuItem>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem><Link to="/before-digital">Before Digital</Link></MenuItem>
        <MenuItem><Link to="/digital">Digital</Link></MenuItem>
        {/* Add more menu items as needed */}
      </Menu>
      <MainContainer>
  <div>
    <h1> Frontend Projects</h1>
    <p>
      In 2023, I decided to change my life and become a Frontend Developer/UX/UI Designer. 
      I started to learn HTML, CSS, JavaScript, React, and other technologies. 
      I am still learning and I am looking for a job as a Frontend Developer/UX/UI Designer.
    </p>
  </div>
</MainContainer>

    </>
  );
};

export default FrontendProjects;
