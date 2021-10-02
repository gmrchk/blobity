import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Headline, Text } from './Text';
import { media } from './Layout';

const Wrapper = styled.section<{ isDisplayed: boolean }>`
    display: block;
    position: fixed;
    top: 50%;
    left: 50%;
    max-width: calc(100vw - 40px);
    text-align: center;
    width: 600px;
    padding: 20px;
    z-index: 20;
    transform: translate3d(-50%, -50%, 0);
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.6);

    backdrop-filter: blur(10px);
    background: rgba(0, 0, 0, 0.7);
    border: 1px solid #222;
    pointer-events: none;
    transition: opacity 0.8s;
    opacity: ${({ isDisplayed }) => (isDisplayed ? '1' : '0')};

    @media ${media.midUp} {
        padding: 20px 40px;
    }
`;

export const Thanks = () => {
    const [isDisplayed, setIsDisplayed] = useState(false);

    useEffect(() => {
        if (window.location.hash === '#thanks') {
            setIsDisplayed(true);

            setTimeout(() => {
                setIsDisplayed(false);
            }, 5000);
        }
    }, []);

    return (
        <Wrapper isDisplayed={isDisplayed}>
            <Headline>Thank you!</Headline>
            <Text>Your payment was successful. You're all set.</Text>
            <Text>
                Please check your email for license number, but that's really
                just a formality. You can follow the installation instructions
                on this page.
            </Text>
        </Wrapper>
    );
};
