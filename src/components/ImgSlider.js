import React from 'react'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick'
import SliderImgOne from '../images/slider-scale.jpg'
import SliderImgTwo from '../images/slider-scales.jpg'
import SliderImgThree from '../images/slider-badag.jpg'
import SliderImgFour from '../images/slider-badging.jpg'

const ImgSlider = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };


    return (
        <Carousel {...settings}>
            <Wrap>
                <a>
                    <img src={SliderImgOne} alt='imageOne' />
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src={SliderImgTwo} alt='imageTwo' />
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src={SliderImgThree} alt='imageThree' />
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src={SliderImgFour} alt='imageFour' />
                </a>
            </Wrap>

        </Carousel>
    )
}

const Carousel = styled(Slider)`
    margin-top: 20px;

    & > button {
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;
        transition: opacity 0.2s ease;

        &:hover {
            opacity: 1;
        }
    }

    ul li button::before {
        font-size: 10px;
        color: rgb(150, 158, 171);
    }

    li.slick-active button::before{
        color: #fff;
    }

    .slick-list{
        overflow: initial;
    }

    .slick-prev{
        left: -75px;
    }

    .slick-next{
        right: -75px
    }
`

const Wrap = styled.div`
    border-radius: 4px;
    position: relative;

    a {
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px, rgb(0 0 0 / 73%) 0 16px 10px -10px;
        display: block;
        position: relative;
        border: 4px solid transparent;
        transition: border 0.4s ease;

        img{
            width: 100%;
            height: 100%;
        }

        &:hover{
            border: 4px solid rgba(249, 249, 249, 0.8);
        }
    }
`



export default ImgSlider
