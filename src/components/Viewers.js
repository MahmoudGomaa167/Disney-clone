import React from 'react'
import styled from 'styled-components'
import disney from '../images/viewers-disney.png';
import marvel from '../images/viewers-marvel.png';
import national from '../images/viewers-national.png';
import pixar from '../images/viewers-pixar.png';
import starwars from '../images/viewers-starwars.png';
import disneyVideo from '../videos/1564674844-disney.mp4'
import marvelVideo from '../videos/1564676115-marvel.mp4';
import nationalVideo from '../videos/1564676296-national-geographic.mp4';
import pixarVideo from '../videos/1564676714-pixar.mp4';
import starwarsVideo from '../videos/1608229455-star-wars.mp4';



const Viewers = () => {
    return (
        <Container>
            <Wrap>
                <img src={disney} alt='Disney' />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src={disneyVideo} type='video/mp4' />
                </video>
            </Wrap>
            <Wrap>
                <img src={marvel} alt='Marvel' />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src={marvelVideo} type='video/mp4' />
                </video>
            </Wrap>
            <Wrap>
                <img src={national} alt='National' />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src={nationalVideo} type='video/mp4' />
                </video>
            </Wrap>
            <Wrap>
                <img src={pixar} alt='Pixar' />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src={pixarVideo} type='video/mp4' />
                </video>
            </Wrap>
            <Wrap>
                <img src={starwars} alt='Starwars' />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src={starwarsVideo} type='video/mp4' />
                </video>
            </Wrap>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 30px;
    padding: 30px 0 26px;
    display: grid;
    gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));

    @media(max-width: 768px){
        grid-template-columns: repeat(1, minmax(0, 1fr))
    }
`

const Wrap = styled.div`
    padding-top: 56.25%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
                rgb(0 0 0 / 73%) 0 16px 10px -10px;
    position: relative;
    cusror: pointer;
    overflow: hidden;
    transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border: 3px solid rgba(249, 249, 249, 0.1);

    img{
        position: absolute;
        inset: 0;
        height: 100%;
        object-fit: cover;
        transition: opacity 0.5s ease-in-out;
        z-index: 1;
    }

    video{
        width: 100%;
        height: 100%;
        position: absolute;
        inset: 0;
        opacity: 0;
        z-index: 0;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0 40px 58px -16px,
        rgb(0 0 0 / 72%) 0 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);

        video{
            opacity: 1;
        }
    }
`

export default Viewers
