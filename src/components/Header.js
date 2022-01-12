import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { selectUsername, setUserLoginDetails, selectUserPhoto, setSignoutState } from '../features/user/userSlice';
import { signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg'
import homeIcon from '../images/home-icon.svg';
import searchIcon from '../images/search-icon.svg'
import originalIcon from '../images/original-icon.svg'
import movieIcon from '../images/movie-icon.svg'
import watchIcon from '../images/watchlist-icon.svg'
import seriesIcon from '../images/series-icon.svg'

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const username = useSelector(selectUsername);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                setUser(user);
                navigate('/home')
            }
        })
    }, [username])


    const handleAuth = () => {
        if (!username) {
            signInWithPopup(auth, provider).then((result) => {
                setUser(result.user)
            }).catch((error) => alert(error.message))
        } else if (username) {
            signOut(auth).then(() => {
                dispatch(setSignoutState());
                navigate('/')
            }).catch(error => {
                alert(error.message)
            })
        }

    }

    const setUser = (user) => {
        dispatch(setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL
        }))
    }

    return (
        <Nav>
            <Logo>
                <img src={logo} alt='Disney+' />
            </Logo>

            {!username ? (<Login onClick={handleAuth}>Login</Login>) :
                (<>
                    <NavMenu>
                        <Link to='/home'>
                            <img src={homeIcon} alt='Home' />
                            <span>HOME</span>
                        </Link>
                        <Link to='/home'>
                            <img src={searchIcon} alt='Search' />
                            <span>SEARCH</span>
                        </Link>
                        <Link to='/home'>
                            <img src={watchIcon} alt='Watchlist' />
                            <span>WATCHLIST</span>
                        </Link>
                        <Link to='/home'>
                            <img src={originalIcon} alt='Original' />
                            <span>ORIGINALS</span>
                        </Link>
                        <Link to='/home'>
                            <img src={movieIcon} alt='Movies' />
                            <span>MOVIES</span>
                        </Link>
                        <Link to='/home'>
                            <img src={seriesIcon} alt='Series' />
                            <span>SERIES</span>
                        </Link>
                    </NavMenu>

                    <Signout>
                        <UserImg src={userPhoto} alt={username} />
                        <DropDown onClick={handleAuth}>Sign out</DropDown>
                    </Signout>
                </>)

            }

        </Nav>
    )
}

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;
`

const Logo = styled.a`
    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    font-size:0;
    display: inline-block;
    img{
        display: block;
        width: 100%
    }
`

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
    flex-wrap: nowrap;
    height: 100%;
    margin: 0;
    padding: 0;
    position: relative;
    margin-right: auto;
    margin-left: 25px;

    a{
        display: flex;
        align-items: center;
        padding: 0 12px;

        img{
            height: 20px;
            min-width: 20px;
            width: 20px;
        }

        span{
            color: rgb(249, 249, 249);
            font-size: 13px;
            letter-spacing: 1.42px;
            line-height: 1.08;
            padding: 2px 0;
            position: relative;

            &:before{
                content: '';
                background-color: rgb(249, 249, 249);
                position: absolute;
                bottom: -6px;
                right: 0;
                left: 0;
                height: 2px;
                opacity: 0;
                transform-origin: left center;
                border-radius: 0 0 4px 4px;
                transform: scaleX(0);
                transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                visibility: hidden;
                width: auto;
            }
        }
        &:hover{
            span:before{
                opacity: 1 !important;
                visibility: visible;
                transform: scaleX(1);
            }
        }
        
    }

    @media (max-width: 768px){
        display: none;
    }
`

const Login = styled.a`
    background-color: rgba(0, 0, 0, 0.6);
    text-transform: uppercase;
    padding: 8px 16px;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transition: all 0.2s ease-out;
    cursor: pointer;
    &:hover{
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`

const UserImg = styled.img`
    height: 100%;
    border-radius: 50%
`

const DropDown = styled.div`
    position: absolute;
    top: 48px;
    right: 0;
    background-color: rgb(19, 19, 19);
    border: 1px solid rgba(151, 151, 151, 0.34);
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 50%) 0 0 18px 0;
    font-size: 14px;
    letter-spacing: 3px;
    padding: 10px;
    opacity: 0;
    width: 100px;
    transition: opacity 0.6s ease-in-out;
`

const Signout = styled.div`
    position: relative;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    jsutify-content: center;
    cursor: pointer;

    &:hover{
        ${DropDown} {
            opacity: 1;
            transition: opacity 0.6s ease-in-out;
        }
    }
`



export default Header
