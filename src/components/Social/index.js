import React from 'react'

import './styles.css';
import facebookIcon from '../../assets/images/icons/facebook_icon.svg';
import twitterIcon from '../../assets/images/icons/twitter_icon.svg';
import instagramIcon from '../../assets/images/icons/instagram_icon.svg';
import pinterestIcon from '../../assets/images/icons/pinterest_icon.svg';

const Social = () => {
    return (
        <>
            <div id="social">
                <header>
                    <h1>Redes Sociais</h1>
                </header>
                <div className="icons">
                    <img src={ facebookIcon } alt="Facebook"/>
                    <img src={ twitterIcon } alt="Twitter"/>
                    <img src={ instagramIcon } alt="Instagram"/>
                    <img src={ pinterestIcon } alt="Pinterest"/>
                </div>
            </div>
        </>
    )
}

export default Social;
