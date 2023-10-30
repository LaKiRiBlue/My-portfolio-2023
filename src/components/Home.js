import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import myselfRED from './images/myselfRED.jpg';
import BeforeDigital from './BeforeDigital';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Digital from './Digital';
import FrontendProjects from './FrontendProjects';


// Your styled components for the parallax container
const ParallaxContainer = styled.div`
  background-image: url(${myselfRED});
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
  height: 200vh;
  overflow: hidden;
  /* Add any other styles here */
`;


const Title = styled.h1`
  font-size: 4em;
  text-shadow: 2px 2px black;
  text-align: center;
  margin: 0;
  background: rgba(255, 0, 0, 0.5);
  background-blend-mode: screen;
  color: white;
  width: 100%;
  padding: 10px;
`;

const Paragraph1 = styled.p`
  font-size: 1.8em;
  text-align: center;
  margin: 0;
  color: white;
  text-shadow: 1px 1px black;
  background: rgba(255, 0, 0, 0.5);
  background-blend-mode: screen;
`;

const About = styled.div`
  font-size: 1.3em;
  text-shadow: 1px 1px red;
  background: rgba(255, 255, 255, 0.5);
  background-blend-mode: screen;
  width: 100%;
  padding: 20px;
  text-align: center;
  margin-top: 280px;
`;

const Paragraph2 = styled.p`
  font-size: 1.3em;
  text-align: center;
  margin: 0; /* Fix typo: it should be 'margin: 0;' */
  color: white;
  text-shadow: 2px 3px black;
  padding: 0 150px 0 150px;
`;

const Paragraph3 = styled.p`
  font-size: 1.3em;
  text-align: center;
  margin-top: 300px;
  color: white;
  text-shadow: 2px 3px black;
  padding: 0 150px 0 150px;
  margin-bottom: 0;
  background: rgba(255, 0, 0, 0.5);
  background-blend-mode: screen;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -26px;
  margin-bottom: 20px;
  background: rgba(255, 0, 0, 0.5);
  background-blend-mode: screen;
  gap: 350px;
  button {
    background: none;
    border: none;
    font-size: 1.3em;
    font-weight: bold;
    text-shadow: 1px 1px black;
    color: white;
    cursor: pointer;
    padding: 10px;
    transition: 0.5s;
    &:hover {
      background: rgba(255, 255, 255, 0.5);
      background-blend-mode: screen;
      color: black;
    }
  }
`;
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
`;




const Menu = styled.div`
  display: block;
  position: fixed;
  top: 50px;
  left: 20px;
  box-shadow: 0 0 5px rgba(0,0,0,1);
  z-index: 9999;
  background: rgba(0, 0, 0, 0.5);
  max-height: ${props => (props.isOpen ? '200px' : '0')}; /* Set max-height to control slide effect */
  overflow: hidden; /* Hide overflowing content */
  transition: max-height 0.8s ease;

`;


const Line = styled.div`
  width: 100%;
  height: 3px;
  background-color: white;
  
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


const Home = () => {
  const titleRef = useRef();
  const paragraphRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Add this line

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigateToBeforeDigital = () => {
    navigate('/before-digital'); // Use the navigate function to go to the "/before-digital" route
  };
  const navigateToDigital = () => {
    navigate('/digital'); // Use the navigate function to go to the "/digital" route
  };
  const navigateToFrontendProjects = () => {
    navigate('/frontend-projects'); // Use the navigate function to go to the "/digital" route
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      titleRef.current.style.transform = `translateY(${scrollValue * 0.5}px)`;
      paragraphRef.current.style.transform = `translateY(${scrollValue * 0.2}px)`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <BurgerMenuIcon onClick={toggleMenu}>
        <Line />
        <Line />
        <Line />
      </BurgerMenuIcon>
      <Menu isOpen={isOpen}>
        <MenuItem><Link to="/before-digital">Before Digital</Link></MenuItem>
        <MenuItem><Link to="/digital">Digital</Link></MenuItem>
        <MenuItem><Link to="/frontend-projects">Frontend projects</Link></MenuItem>
      </Menu>
      <ParallaxContainer>
        <Title ref={titleRef}>ZUZANA DROPPOVA</Title>
        <Paragraph1 ref={paragraphRef}>
          Artist, UX/UI designer, Junior Frontend Developer
        </Paragraph1>
        <About>
          <h2>About Me</h2>
          <Paragraph2>
            Born and raised in Slovakia, living in Brussels since 2017. I'm
            known as a writer of sci-fi and horror. Better known as an
            illustrator. Since 2019, I only create digitally.
          </Paragraph2>
        </About>
        <Paragraph3>
          <h2>See My Artworks</h2>
        </Paragraph3>
        <Buttons>
          <button onClick={navigateToBeforeDigital}>Before Digital</button>
          <button onClick={navigateToDigital}>Digital</button>
          <button onClick={navigateToFrontendProjects}>Frontend projects</button>
        </Buttons>
      </ParallaxContainer>
    </>
  );
};

export default Home;