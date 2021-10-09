import React from 'react';
import styled from 'styled-components';
import { media } from './Layout';
import { Link as GatsbyLink } from 'gatsby';

export const Button = styled.a<{ ghost?: boolean; tiny?: boolean }>`
    display: inline-block;
    background: none;
    appearance: none;
    font-weight: 900;
    max-width: 100%;
    font-size: 12px;
    padding: 14px;
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
    ${({ ghost }) => (ghost ? 'padding: 12px 14px;' : '')}
    ${({ tiny }) => (tiny ? 'padding: 6px 8px;' : '')}
    color: #fff;
    border-radius: 4px;
    margin-top: 20px;
    z-index: 3;
    letter-spacing: 2px;
    ${({ tiny }) => (tiny ? 'margin-top: 0;' : '')}

    & + & {
        margin-left: 20px;

        @media ${media.midUp} {
            margin-left: 30px;
        }
    }

    @media ${media.midUp} {
        font-size: 14px;
        padding: 20px;
        ${({ ghost }) => (ghost ? 'padding: 18px 20px;' : '')}
        ${({ tiny }) => (tiny ? 'font-size: 12px;' : '')}
        ${({ tiny }) => (tiny ? 'padding: 6px 8px;' : '')}
        ${({ tiny }) => (tiny ? 'margin-top: 0;' : '')}
    }
`;

export const GatsbyButton = styled(GatsbyLink)<{ ghost?: boolean }>`
    display: inline-block;
    padding: 14px;
    background: none;
    appearance: none;
    font-weight: 700;
    max-width: 100%;
    font-size: 12px;
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
    ${({ ghost }) => (ghost ? 'padding: 12px 14px;' : '')}
    color: #fff;
    border-radius: 4px;
    margin-top: 20px;
    z-index: 3;
    letter-spacing: 1px;

    & + & {
        margin-left: 20px;

        @media ${media.midUp} {
            margin-left: 30px;
        }
    }

    @media ${media.midUp} {
        font-size: 14px;
        padding: 20px;
        ${({ ghost }) => (ghost ? 'padding: 18px 20px;' : '')}
    }
`;

export const Link = styled.a`
    position: relative;

    &:after {
        transition: height 0.2s, background 0.2s, right 0.2s, left 0.2s,
            opacity 0.2s;
        content: '';
        left: -1px;
        right: -1px;
        bottom: 3px;

        display: block;
        position: absolute;
        z-index: 1;

        height: 4px;
        background: #aaa;

        @media ${media.midUp} {
            left: -4px;
            right: -4px;
        }
    }

    font-size: 16px;

    @media ${media.midUp} {
        font-size: 18px;
    }

    @media ${media.largeUp} {
        font-size: 22px;
    }

    &:hover:after {
        opacity: 0;
    }
`;
