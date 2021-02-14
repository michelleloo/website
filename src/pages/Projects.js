import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { MovieState } from '../projectState';
import { Link } from "react-router-dom";

//Animation
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
import { motion } from 'framer-motion';
import { ProjectState } from '../projectState';
import { pageAnimation, fade, photoAnim, lineAnim, slider, sliderContainer } from "../animation";

const Projects = () => {
    return (
        <Work
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
            style={{ background: "#1b1b1b" }}
        >
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>
            <Movie>
                <motion.h2 variants={fade}>React Music Player</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Movie>
                    <motion.h2 variants={fade}>The Athlete</motion.h2>
                    <motion.div variants={lineAnim} className="line"></motion.div>
                    <Link to="/work/the-athlete">
                        <Hide>
                            <motion.img variants={photoAnim} src={athlete} alt="athlete" />
                        </Hide>
                    </Link>
                </Movie>
                <Movie>
                    <motion.h2>The Racer</motion.h2>
                    <motion.div className="line" variants={lineAnim}></motion.div>
                    <Link to="/work/the-racer">
                        <img src={theracer} alt="athlete" />
                    </Link>
                </Movie>
                <Movie>
                    <motion.h2>Good Times</motion.h2>
                    <motion.div className="line" variants={lineAnim}></motion.div>
                    <Link to="/work/good-times">
                        <img src={goodtimes} alt="athlete" />
                    </Link>
                </Movie>
            </Movie>
        </Work>

    );
};


const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2{
        padding: 1rem 0rem;
        font-size:30px;
    }
    @media (max-width: 1300px){
        padding: 2rem 2rem;
    }
`;
const Movie = styled(motion.div)`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit:cover;
    }
    h2{
        color: #ffffff;
    }
`;
const Hide = styled.div`
    overflow:hidden;
`;
//Frame Animation
const Frame1 = styled(motion.div)`
    position:fixed;
    left:0;
    top:10%;
    width:100%;
    height:100vh;
    background:#162919;
    z-index:2;
`;
const Frame2 = styled(Frame1)`
    background:#2e5735;
`;
const Frame3 = styled(Frame1)`
    background: #61b46f;
`;
const Frame4 = styled(Frame1)`
    background: #8effa0 
`;
export default Projects;