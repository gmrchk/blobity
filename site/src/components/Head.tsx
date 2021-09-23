import React from 'react';
import { Helmet } from 'react-helmet';
import fav from '../images/icon.png';

export const Head: React.FC<{ title: string }> = ({ title }) => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="shortcut icon" href={fav} />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                // @ts-ignore copied from Google Fonts 🤷‍
                crossOrigin
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;900&display=swap"
                rel="stylesheet"
            />
        </Helmet>
    );
};
