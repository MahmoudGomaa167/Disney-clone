import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import db from './../firebase';
import { collection, query, doc, getDoc } from 'firebase/firestore';
import styled from 'styled-components'
import blackPlay from '../images/play-icon-black.png';
import whitePlay from '../images/play-icon-white.png';
import groupIcon from '../images/group-icon.png'

const Detail = () => {
    const { id } = useParams();
    const [detailData, setDetailData] = useState({});

    useEffect(() => {
        const docRef = doc(db, 'movies', id)
        const docSnap = getDoc(docRef).then(doc => {
            if (doc.exists()) {
                setDetailData(doc.data())
            } else {
                console.log('No such document in the firebase')
            }
        }).catch(error => {
            alert('Error Getting Document');
        })

    }, [id])

    return (
        <Container>
            <Background>
                <img src={detailData.backgroundImg} alt={detailData.title} />
            </Background>

            <ImgTitle>
                <img src={detailData.titleImg} alt={detailData.title} />
            </ImgTitle>

            <ContentMeta>
                <Controls>
                    <Play>
                        <img src={blackPlay} alt='play' />
                        <span>Play</span>
                    </Play>
                    <Trailer>
                        <img src={whitePlay} alt='white-play' />
                        <span>Trailer</span>
                    </Trailer>
                    <AddList>
                        <span />
                        <span />
                    </AddList>
                    <GroupWatch>
                        <div>
                            <img src={groupIcon} alt='group' />
                        </div>
                    </GroupWatch>
                </Controls>
                <Subtitle>
                    {detailData.subTitle}
                </Subtitle>
                <Description>
                    {detailData.description}
                </Description>
            </ContentMeta>

        </Container>
    )
}

const Container = styled.div`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow: hidden;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
`

const Background = styled.div`
    position: fixed;
    inset: 0;
    z-index: -1;
    opacity: 0.8;

    img{
        width: 100vw;
        height: 100vh;

        @media (max-width: 768px) {
            width: initial;
        }
    }
`

const ImgTitle = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    -webkit-box-pack: start;
    margin: 0 auto;
    height: 30vw;
    min-height: 176px;
    padding-bottom: 24px;
    width: 100%;

    img{
        max-width: 600px;
        min-width: 200px;
        width: 35vw;
    }
`

const ContentMeta = styled.div`
    max-width: 874px;
`

const Controls = styled.div`
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    margin: 24px 0;
    min-height: 56px;
`

const Play = styled.button`
    font-size: 15px;
    margin: 0 22px 0 0;
    padding: 0 24px;
    height: 56px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 1.8px;
    cursor: pointer;
    text-transform: uppercase;
    background-color: rgb(249, 249, 249);
    color: rgb(0, 0, 0);
    border: none;
    transition: background-color 0.25s ease-in-out;

    img{
        width: 32px;
    }

    &:hover{
        background-color: rgb(198, 198, 198);
    }

    @media (max-width: 768px){
        height: 45px;
        padding: 0 22px;
        font-size: 12px;
        margin: 0 10px 0 0;

        img{
            width: 25px;
        }
    }
`

const Trailer = styled(Play)`
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`

const AddList = styled.div`
    width: 44px;
    height: 44px;
    margin-right: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    border: 2px solid #fff;
    cursor: pointer;

    span{
        background-color: rgb(249, 249, 249);
        display: inline-block;
        &:first-child{
            height: 2px;
            transform: translate(1px, 0) rotate(0deg);
            width: 16px;
        }

        &:nth-child(2){
            height: 16px;
            transform: translateX(-8px) rotate(0deg);
            width: 2px;
        }
    }
`

const GroupWatch = styled.div`
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: #fff;

    div{
        width: 40px;
        height: 40px;
        background-color: rgb(0, 0, 0);
        border-radius: 50%;

        img{
            width: 100%;
        }
    }
`

const Subtitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    padding: 16px 0;
    color: rgb(249, 249, 249);

    @media (max-width: 768px) {
        font-size: 14px;
    }
`

export default Detail
