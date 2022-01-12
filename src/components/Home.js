import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from '../features/movie/movieSlice';
import { selectUsername } from '../features/user/userSlice';
import { collection, query, onSnapshot } from 'firebase/firestore';
import db from '../firebase';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Recommends from './Recommends';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Trending from './Trending';
import HomeBg from '../images/home-background.png'

const Home = () => {
    const dispatch = useDispatch();
    const username = useSelector(selectUsername);
    let recommend = [];
    let newDisney = [];
    let original = [];
    let trending = [];

    useEffect(() => {
        const q = query(collection(db, 'movies'));
        onSnapshot(q, (querySnapShot) => {
            querySnapShot.docs.map(doc => {
                switch (doc.data().type) {
                    case 'recommend':
                        recommend = [...recommend, { id: doc.id, ...doc.data() }];
                        break;
                    case 'new':
                        newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
                        break;
                    case 'original':
                        original = [...original, { id: doc.id, ...doc.data() }];
                        break;
                    case 'trending':
                        trending = [...trending, { id: doc.id, ...doc.data() }];
                        break;
                }
            })
            dispatch(setMovies({
                recommend: recommend,
                newDisney: newDisney,
                original: original,
                trending: trending
            }))
        });

    }, [username])

    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Recommends />
            <NewDisney />
            <Originals />
            <Trending />
        </Container>
    )
}

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);

    &::after{
        content: '';
        position: absolute;
        opacity: 1;
        z-index: -1;
        inset: 0px;
        background-image: url("${HomeBg}");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        background-attatchment: fixed;
    }
`

export default Home
