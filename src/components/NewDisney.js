import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectNewDisney } from '../features/movie/movieSlice'
const NewDisney = () => {
    const movies = useSelector(selectNewDisney)
    return (
        <Container>
            <h4>New to Disney+</h4>
            <Content>
                {movies && movies.map(movie => (
                    <Wrap key={movie.id}>
                        <Link to={`/detail/${movie.id}`}>
                            <img src={movie.cardImg} alt={movie.title} />
                        </Link>
                    </Wrap>
                ))}
            </Content>
        </Container>
    )
}

const Container = styled.div`
    padding: 0 0 26px;
`

const Content = styled.div`
    display: grid;
    gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));

    @media(max-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`

const Wrap = styled.div`
    padding-top: 56.25%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
    rgb(0 0 0 / 73%) 0 16px 10px -10px;
    cursor: pointer;
    position: relative;
    transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border: 3px solid rgba(249, 249, 249, 0.1);

    img{
        position: absolute;
        inset: 0;
        height: 100%;
        width: 100%;
        object-fit: cover;
        transition: opacity 0.5s ease-in-out;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0 40px 58px -16px,
        rgb(0 0 0 / 72%) 0 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }
`


export default NewDisney;
