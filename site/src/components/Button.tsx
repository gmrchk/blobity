import React from 'react';
import styled from 'styled-components';

export const Button = styled.a<{ ghost?: boolean }>`
    display: inline-block;
    padding: 20px 20px;
    background: none;
    appearance: none;
    font-weight: 700;
    max-width: 100%;
    font-size: 14px;
    text-transform: uppercase;
    text-align: left;
    line-height: 1.2;
    min-width: 60px;
    position: relative;
    background: linear-gradient(
        to bottom right,
        rgba(208, 26, 124, 1),
        rgba(41, 40, 240, 1)
    );
    ${({ ghost }) => (ghost ? 'background: transparent;' : '')}
    ${({ ghost }) => (ghost ? 'border: 2px solid #ddd;' : '')}
    color: #fff;
    border-radius: 4px;
    margin-top: 20px;
    z-index: 3;
    letter-spacing: 1px;

    & + & {
        margin-left: 30px;
    }
`;

export const Link = styled.a`
    position: relative;

    &:after {
        transition: height 0.2s, background 0.2s, right 0.2s, left 0.2s,
            opacity 0.2s;
        content: '';
        left: -4px;
        right: -4px;
        bottom: 3px;

        display: block;
        position: absolute;
        z-index: 1;

        height: 4px;
        background: #aaa;
    }

    &:hover:after {
        opacity: 0;
    }
`;
