import React from 'react';
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb-logo.svg';
import { Wrapper, Content, LogoImg, TMDBLogoImg } from './header.style';

import { Link } from 'react-router-dom';

export const Header = () => (
    <Wrapper>
        <Content>
            <Link to = "/">
                <LogoImg src={RMDBLogo} alt='rmdb-logo'/>
            </Link>
            <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo'/>
        </Content>
    </Wrapper>
);