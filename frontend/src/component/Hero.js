import React from "react";
import "./HeroStyles.css";
import HeroImage from '../images/CarouselImage.png'
import { Link } from 'react-router-dom';

import DiseaseSection from './DiseaseSection';
import Footer from "./Footer";
import { useNavigate } from 'react-router-dom';
import MyNavbar from "./MyNavbar";
import UploadImage from "./UploadImage";


const Hero = () =>{


  return (
    <>
    <MyNavbar/>
      <div className="hero">
        <img
          alt="HeroImg"
          src={HeroImage}
        />
          <div className="hero-text">
            <h1>Keep Your Aloe Vera Plants Healthy</h1>
            <p>
              Detect Plant Diseases with Our Easy-to-Use
              Website
            </p>
          
  {/* <button onClick={routeChange} className="hero-btn">Upload Image</button> */}

          </div>
        </div>
        <DiseaseSection/>
        <UploadImage/>
      <Footer/>
    </>
  );
}

export default Hero;
