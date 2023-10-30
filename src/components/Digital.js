import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Image1 from './images/Digi/Audrey2022_1.jpg';
import Image2 from './images/Digi/az me povolaji k sobe_1.jpg';
import Image3 from './images/Digi/2-KiRi-Cal2023_1.jpg';
import Image4 from './images/Digi/2 girls in Tokyo - Copy_1.jpg';
import Image5 from './images/Digi/albert - Copy_1.jpg';
import Image6 from './images/Digi/angel under - Copy_1.jpg';
import Image7 from './images/Digi/apocalypse forest - Copy_1.jpg';
import Image8 from './images/Digi/blue dragons - Copy_1.jpg';
import Image9 from './images/Digi/BLUE flower - Copy_1.jpg';
import Image10 from './images/Digi/Blue urban vector - Copy_1.jpg';
import Image11 from './images/Digi/bros_1.jpg';
import Image12 from './images/Digi/catwoman- Copy_1.jpg';
import Image13 from './images/Digi/Certosa from Hell_1.jpg';
import Image14 from './images/Digi/Charon 3 obalka by KiRi_1.jpg';
import Image15 from './images/Digi/Chick - Copy_1.jpg';
import Image16 from './images/Digi/chick killa1 - Copy_1.jpg';
import Image17 from './images/Digi/city sunset - Copy_1.jpg';
import Image18 from './images/Digi/clockwork birdie_1.jpg';
import Image19 from './images/Digi/Conan a kraska z Khitaie_1.jpg';
import Image20 from './images/Digi/crow_1.jpg';
import Image21 from './images/Digi/cyber goth girl - Copy_1.jpg';
import Image22 from './images/Digi/cyberpunk street_1.jpg';
import Image23 from './images/Digi/dolly - Copy_1.jpg';
import Image24 from './images/Digi/double tree - Copy_1.jpg';
import Image25 from './images/Digi/Dragons_1.jpg';
import Image26 from './images/Digi/dreamgirl - Copy_1.jpg';
import Image27 from './images/Digi/Edward - Copy_1.jpg';
import Image28 from './images/Digi/error_1.jpg';
import Image29 from './images/Digi/fire troll_1.jpg';
import Image30 from './images/Digi/green universe - Copy_1.jpg';
import Image31 from './images/Digi/hejkal - Copy_1.jpg';
import Image32 from './images/Digi/her_1.jpg';
import Image33 from './images/Digi/Hermina Cat - Copy_1.jpg';
import Image34 from './images/Digi/jellyfish_1.jpg';
import Image35 from './images/Digi/jill_1.jpg';
import Image36 from './images/Digi/joker in tokyo- Copy_1.jpg';
import Image37 from './images/Digi/JUPcover11 - Copy_1.jpg';
import Image38 from './images/Digi/jupiter14cover - Copy_1.jpg';
import Image39 from './images/Digi/just a lil boy_1.jpg';
import Image40 from './images/Digi/king of this wood_1.jpg';
import Image41 from './images/Digi/kitty- Copy_1.jpg';
import Image42 from './images/Digi/let it be light - Copy_1.jpg';
import Image43 from './images/Digi/lollyB - Copy_1.jpg';
import Image44 from './images/Digi/LOVEisLOVE_1.jpg';
import Image45 from './images/Digi/Lucka1_1.jpg';
import Image46 from './images/Digi/man of my dreams_1.jpg';
import Image47 from './images/Digi/marais - Copy_1.jpg';
import Image48 from './images/Digi/marais2 - Copy_1.jpg';
import Image49 from './images/Digi/Maria2_1.jpg';
import Image50 from './images/Digi/Miguel Fractal_1.jpg';
import Image51 from './images/Digi/mouse_1.jpg';
import Image52 from './images/Digi/mummy_1.jpg';
import Image53 from './images/Digi/my world_1.jpg';
import Image54 from './images/Digi/Nasleduj bieleho kralika_1.jpg';
import Image55 from './images/Digi/NEUROMANCER_1.jpg';
import Image56 from './images/Digi/night sky_1.jpg';
import Image57 from './images/Digi/Nula sa rovna jednej_1.jpg';
import Image58 from './images/Digi/Obalka 1_1.jpg';
import Image59 from './images/Digi/Obalka Bazina2_1.jpg';
import Image60 from './images/Digi/obey_1.jpg';
import Image62 from './images/Digi/octopi_1.jpg';
import Image63 from './images/Digi/odtlacok-Kozak_1.jpg';
import Image64 from './images/Digi/papa-legba_1.jpg';
import Image65 from './images/Digi/pastel killer_1.jpg';
import Image66 from './images/Digi/Pilipiuk ilustr.Obalka4_1.jpg';
import Image67 from './images/Digi/post apo baby_1.jpg';
import Image68 from './images/Digi/PTRSLV12345_1.jpg';
import Image69 from './images/Digi/purple cat_1.jpg';
import Image70 from './images/Digi/red postapo_1.jpg';
import Image71 from './images/Digi/run sharky_1.jpg';
import Image72 from './images/Digi/RUN_1.jpg';
import Image73 from './images/Digi/Sesivance 2 obalka od KiRi_1.jpg';
import Image74 from './images/Digi/skyline7.3_1.jpg';
import Image75 from './images/Digi/SLOVENSKE TEMNO final1_1.jpg';
import Image76 from './images/Digi/space kitty1_1.jpg';
import Image77 from './images/Digi/space monster_1.jpg';
import Image78 from './images/Digi/Ti co prichadzaju v tme_1.jpg';
import Image79 from './images/Digi/twins1_1.jpg';
import Image80 from './images/Digi/type_writerBrowFinal_1.jpg';
import Image81 from './images/Digi/ukraine FINAL COVER_1.jpg';
import Image82 from './images/Digi/Under-sea_1.jpg';
import Image83 from './images/Digi/urban_1.jpg';
import Image84 from './images/Digi/Vila_1.jpg';
import Image85 from './images/Digi/violet trouble_1.jpg';
import Image86 from './images/Digi/Violet1_1.jpg';
import Image87 from './images/Digi/virtual_1.jpg';
import Image88 from './images/Digi/We rather leave_1.jpg';
import Image89 from './images/Digi/whale_1.jpg';
import Image90 from './images/Digi/Z popola_1.jpg';
import Image91 from './images/Digi/zilinska nemocnica_1.jpg';


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
const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const GalleryImage = styled.img`
  width: 200px;
  height: 200px;
  margin: 10px;
  border: 1px solid #000;
  box-sizing: border-box;
  cursor: pointer;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.1);
  }
`;



const Digital = () => {
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
        <MenuItem><Link to="/frontend-projects">Frontend Projects</Link></MenuItem>
        {/* Add more menu items as needed */}
      </Menu>
      <MainContainer>
  <div>
    <h1> Digital</h1>
    <p>
      Starting October 2019, I fell in love in using pen tablet.
    </p>
  </div>
  <Gallery>
    <div className="gallery">
      <img src={Image1} alt="Audrey2022" />
      <img src={Image2} alt="az me povolaji k sobe" />
      <img src={Image3} alt="KiRi Cal2023" />
      <img src={Image4} alt="2 girls in Tokyo" />
      <img src={Image5} alt="albert" />
      <img src={Image6} alt="angel under" />
      <img src={Image7} alt="apocalypse forest" />
      <img src={Image8} alt="blue dragons" />
      <img src={Image9} alt="BLUE flower" />
      <img src={Image10} alt="Blue urban vector" />
      <img src={Image11} alt="bros" />
      <img src={Image12} alt="catwoman" />
      <img src={Image13} alt="Certosa from Hell" />
      <img src={Image14} alt="Charon 3 obalka by KiRi" />
      <img src={Image15} alt="Chick" />
      <img src={Image16} alt="chick killa1" />
      <img src={Image17} alt="city sunset" />
      <img src={Image18} alt="clockwork birdie" />
      <img src={Image19} alt="Conan a kraska z Khitaie" />
      <img src={Image20} alt="crow" />
      <img src={Image21} alt="cyber goth girl" />
      <img src={Image22} alt="cyberpunk street" />
      <img src={Image23} alt="dolly" />
      <img src={Image24} alt="double tree" />
      <img src={Image25} alt="Dragons" />
      <img src={Image26} alt="dreamgirl" />
      <img src={Image27} alt="Edward" />
      <img src={Image28} alt="error" />
      <img src={Image29} alt="fire troll" />
      <img src={Image30} alt="green universe" />
      <img src={Image31} alt="hejkal" />
      <img src={Image32} alt="her" />
      <img src={Image33} alt="Hermina Cat" />
      <img src={Image34} alt="jellyfish" />
      <img src={Image35} alt="jill" />
      <img src={Image36} alt="joker in tokyo" />
      <img src={Image37} alt="JUPcover11" />
      <img src={Image38} alt="jupiter14cover" />
      <img src={Image39} alt="just a lil boy" />
      <img src={Image40} alt="king of this wood" />
      <img src={Image41} alt="kitty" />
      <img src={Image42} alt="let it be light" />
      <img src={Image43} alt="lollyB" />
      <img src={Image44} alt="LOVEisLOVE" />
      <img src={Image45} alt="Lucka1" />
      <img src={Image46} alt="man of my dreams" />
      <img src={Image47} alt="marais" />
      <img src={Image48} alt="marais2" />
      <img src={Image49} alt="Maria2" />
      <img src={Image50} alt="Miguel Fractal" />
      <img src={Image51} alt="mouse" />
      <img src={Image52} alt="mummy" />
      <img src={Image53} alt="my world" />
      <img src={Image54} alt="Nasleduj bieleho kralika" />
      <img src={Image55} alt="NEUROMANCER" />
      <img src={Image56} alt="night sky" />
      <img src={Image57} alt="Nula sa rovna jednej" />
      <img src={Image58} alt="Obalka 1" />
      <img src={Image59} alt="Obalka Bazina2" />
      <img src={Image60} alt="obey" />
      <img src={Image62} alt="octopi" />
      <img src={Image63} alt="odtlacok-Kozak" />
      <img src={Image64} alt="papa-legba" />
      <img src={Image65} alt="pastel killer" />
      <img src={Image66} alt="Pilipiuk ilustr.Obalka4" />
      <img src={Image67} alt="post apo baby" />
      <img src={Image68} alt="PTRSLV12345" />
      <img src={Image69} alt="purple cat" />
      <img src={Image70} alt="red postapo" />
      <img src={Image71} alt="run sharky" />
      <img src={Image72} alt="RUN!!!!!" />
      <img src={Image73} alt="Sesivance 2 obalka od KiRi" />
      <img src={Image74} alt="skyline7.3" />
      <img src={Image75} alt="SLOVENSKE TEMNO final1" />
      <img src={Image76} alt="space kitty1" />
      <img src={Image77} alt="space monster" />
      <img src={Image78} alt="Ti co prichadzaju v tme" />
      <img src={Image79} alt="twins1" />
      <img src={Image80} alt="type writerBrowFinal" />
      <img src={Image81} alt="ukraine FINAL COVER" />
      <img src={Image82} alt="Under-sea" />
      <img src={Image83} alt="urban" />
      <img src={Image84} alt="Vila" />
      <img src={Image85} alt="violet trouble" />
      <img src={Image86} alt="Violet1" />
      <img src={Image87} alt="virtual" />
      <img src={Image88} alt="We rather leave" />
      <img src={Image89} alt="whale" />
      <img src={Image90} alt="Z popola" />
      <img src={Image91} alt="zilinska nemocnica" />
    </div>

  </Gallery>
</MainContainer>

    </>
  );
};

export default Digital;
