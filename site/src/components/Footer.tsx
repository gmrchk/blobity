import React from 'react';
import styled from 'styled-components';
import github from '../images/github.svg';

const Circle = styled.div`
    display: block;
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #666;
    z-index: 2;

    &:before {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 50%;
        background: linear-gradient(
            to bottom right,
            rgba(208, 26, 124, 1),
            rgba(41, 40, 240, 1)
        );
        opacity: 0;
        transition: opacity 0.2s;
    }
`;

const Wrapper = styled.header`
    display: block;
    position: relative;
    text-align: center;
    width: 100%;
    padding: 20px;
    margin: 100px auto 0;
    z-index: 10;
    font-size: 14px;
    color: #666;
    transition: color 0.2s;

    a {
        transition: color 0.2s;
        font-size: 14px;
        color: #666;
    }

    &:hover {
        color: #ccc;

        a {
            color: #ccc;
        }

        ${Circle}:before {
            opacity: 1;
        }
    }
`;

const Holder = styled.nav`
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Footer = () => {
    return (
        <Wrapper>
            <Holder>
                <div>Blobity © {new Date().getFullYear()}</div>
                <div>
                    Built in Prague by{' '}
                    <a href="https://github.com/gmrchk">Georgy</a>
                </div>
                <Circle />
            </Holder>
        </Wrapper>
    );
};
