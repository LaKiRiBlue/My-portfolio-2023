import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Image1 from './images/BefoDigi/alien_1.jpg';
import Image2 from './images/BefoDigi/autoportret_Final_1.jpg';
import Image3 from './images/BefoDigi/autoportret2final_1.jpg';
import Image4 from './images/BefoDigi/autoportretCB_1.jpg';
import Image5 from './images/BefoDigi/beyond repair_1.jpg';
import Image6 from './images/BefoDigi/bloody hit.bmp_1.jpg';
import Image7 from './images/BefoDigi/Cyber_rage_Jup8Reboot_1.jpg';
import Image8 from './images/BefoDigi/dokonale stastie_1.jpg';
import Image9 from './images/BefoDigi/DSC02573_1.jpg';
import Image10 from './images/BefoDigi/DSCN0805_1.jpg';
import Image11 from './images/BefoDigi/fight till end_1.jpg';
import Image12 from './images/BefoDigi/FrankYello_1.jpg';
import Image13 from './images/BefoDigi/future city_1.jpg';
import Image14 from './images/BefoDigi/f-witcher-preliv-v2_1.jpg';
import Image15 from './images/BefoDigi/gatpar0001_1.jpg';
import Image16 from './images/BefoDigi/hladny tovar HD_1.jpg';
import Image17 from './images/BefoDigi/I will always love your head_1.jpg';
import Image18 from './images/BefoDigi/IMG_0454_1.jpg';
import Image19 from './images/BefoDigi/Janosik2011_1.jpg';
import Image20 from './images/BefoDigi/KamilaCyber_1.jpg';
import Image21 from './images/BefoDigi/KamilaFinal_1.jpg';
import Image22 from './images/BefoDigi/kvet_1.jpg';
import Image23 from './images/BefoDigi/killer_1.jpg';
import Image24 from './images/BefoDigi/KyberCislo14_1.jpg';
import Image25 from './images/BefoDigi/let the music in_1.jpg';
import Image26 from './images/BefoDigi/levia final_1.jpg';
import Image27 from './images/BefoDigi/Levia hiding_1.jpg';
import Image28 from './images/BefoDigi/Levia_1.jpg';
import Image29 from './images/BefoDigi/BadHorse_1.jpg';
import Image30 from './images/BefoDigi/memoryRaceFinal_1.jpg';
import Image31 from './images/BefoDigi/mrtva stetka_1.jpg';
import Image32 from './images/BefoDigi/Nelly_1.jpg';
import Image33 from './images/BefoDigi/binka_1.jpg';
import Image34 from './images/BefoDigi/No Future No Hope - Droppova.Zuzana_1.jpg';
import Image35 from './images/BefoDigi/NokCityWarrior1_1.jpg';
import Image36 from './images/BefoDigi/obalka_vyssiezaujmy_1.jpg';
import Image37 from './images/BefoDigi/pilipiuk_1.jpg';
import Image38 from './images/BefoDigi/rage_1.jpg';
import Image39 from './images/BefoDigi/reiki tree_1.jpg';
import Image40 from './images/BefoDigi/Reikiiii_1.jpg';
import Image41 from './images/BefoDigi/retro music_1.jpg';
import Image42 from './images/BefoDigi/Scifi-head_1.jpg';
import Image43 from './images/BefoDigi/Scream_1.jpg';
import Image44 from './images/BefoDigi/Scream2_1.jpg';
import Image45 from './images/BefoDigi/shroom_1.jpg';
import Image46 from './images/BefoDigi/Slabej-Droppova_1.jpg';
import Image47 from './images/BefoDigi/smrtakBLUE_1.jpg';
import Image48 from './images/BefoDigi/steamMRS.final_1.jpg';
import Image49 from './images/BefoDigi/steamTime_1.jpg';
import Image50 from './images/BefoDigi/stena detail_1.jpg';
import Image51 from './images/BefoDigi/stena_1.jpg';
import Image52 from './images/BefoDigi/Strato_1.jpg';
import Image53 from './images/BefoDigi/Toko1_1.jpg';
import Image54 from './images/BefoDigi/two_1.jpg';
import Image55 from './images/BefoDigi/valkyrie_1.jpg';
import Image56 from './images/BefoDigi/WIN version2018_1.jpg';
import Image57 from './images/BefoDigi/wonder glass_1.jpg';
import Image58 from './images/BefoDigi/zentangle1_1.jpg';
import Image59 from './images/BefoDigi/zina the warior_1.jpg';
import Image60 from './images/BefoDigi/Zina_1.jpg';
import Image61 from './images/BefoDigi/ZombieWoman_1.jpg';
import Image62 from './images/BefoDigi/Zotzilaah_1.jpg';
import Image63 from './images/BefoDigi/ZuzBlood1_1.jpg';
import Image64 from './images/BefoDigi/ZuzWildBlue_1.jpg';
import Image65 from './images/BefoDigi/zveroclovek_1.jpg';

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

// const GalleryImage = styled.img`
//   width: 200px;
//   height: 200px;
//   margin: 10px;
//   border: 1px solid #000;
//   box-sizing: border-box;
//   cursor: pointer;
//   transition: transform 0.5s;

//   &:hover {
//     transform: scale(1.1);
//   }
// `;




const BeforeDigital = () => {
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
        <MenuItem><Link to="/">Home</Link> </MenuItem>
        <MenuItem><Link to="/digital">Digital</Link></MenuItem>
        <MenuItem><Link to="/frontend-projects">Frontend Projects</Link></MenuItem>
        {/* Add more menu items as needed */}
      </Menu>
      <MainContainer>
  <div>
    <h1>Before Digital</h1>
    <p>
      Before 2019, I used to draw and paint with markers, pencils, and paints on the paper. <br />
      Here are some of my artworks from that era.
    </p>
  </div>
  <Gallery>
    
  <div className="gallery">
    <img src={Image1} alt="alien" />
    <img src={Image2} alt="autoportret" />
    <img src={Image3} alt="autoportret2" />
    <img src={Image4} alt="autoportretCB" />
    <img src={Image5} alt="beyond repair" />
    <img src={Image6} alt="bloody hit" />
    <img src={Image7} alt="Cyber rage" />
    <img src={Image8} alt="why body" />
    <img src={Image9} alt="DSC02573" />
    <img src={Image10} alt="DSCN0805" />
    <img src={Image11} alt="fight till end" />
    <img src={Image12} alt="FrankYello" />
    <img src={Image13} alt="future city" />
    <img src={Image14} alt="f-witcher-preliv-v2" />
    <img src={Image15} alt="gatpar0001" />
    <img src={Image16} alt="hladny tovar HD" />
    <img src={Image17} alt="I will always love your head" />
    <img src={Image18} alt="IMG_0454" />
    <img src={Image19} alt="Janosik2011" />
    <img src={Image20} alt="KamilaCyber" />
    <img src={Image21} alt="KamilaFinal" />
    <img src={Image22} alt="kvet" />
    <img src={Image23} alt="killer" />
    <img src={Image24} alt="KyberCislo14" />
    <img src={Image25} alt="let the music in" />
    <img src={Image26} alt="levia final" />
    <img src={Image27} alt="Levia hiding" />
    <img src={Image28} alt="Levia" />
    <img src={Image29} alt="BadHorse" />
    <img src={Image30} alt="memoryRaceFinal" />
    <img src={Image31} alt="mrtva stetka" />
    <img src={Image32} alt="Nelly" />
    <img src={Image33} alt="binka" />
    <img src={Image34} alt="No Future No Hope" />
    <img src={Image35} alt="NokCityWarrior1" />
    <img src={Image36} alt="obalka_vyssiezaujmy" />
    <img src={Image37} alt="pilipiuk" />
    <img src={Image38} alt="rage" />
    <img src={Image39} alt="reiki tree" />
    <img src={Image40} alt="Reikiiii" />
    <img src={Image41} alt="retro music" />
    <img src={Image42} alt="Scifi-head" />
    <img src={Image43} alt="Scream" />
    <img src={Image44} alt="Scream2" />
    <img src={Image45} alt="shroom" />
    <img src={Image46} alt="Slabej-Droppova" />
    <img src={Image47} alt="smrtakBLUE" />
    <img src={Image48} alt="steamMRS.final" />
    <img src={Image49} alt="steamTime" />
    <img src={Image50} alt="stena detail" />
    <img src={Image51} alt="stena" />
    <img src={Image52} alt="Strato" />
    <img src={Image53} alt="Toko1" />
    <img src={Image54} alt="two" />
    <img src={Image55} alt="valkyrie" />
    <img src={Image56} alt="WIN version2018" />
    <img src={Image57} alt="wonder glass" />
    <img src={Image58} alt="zentangle1" />
    <img src={Image59} alt="zina the warior" />
    <img src={Image60} alt="Zina" />
    <img src={Image61} alt="ZombieWoman" />
    <img src={Image62} alt="Zotzilaah" />
    <img src={Image63} alt="ZuzBlood1" />
    <img src={Image64} alt="ZuzWildBlue" />
    <img src={Image65} alt="zveroclovek" />

  </div>
  </Gallery>

</MainContainer>

    </>
  );
};

export default BeforeDigital;
