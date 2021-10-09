import React from 'react';
import styled from 'styled-components';
import { media } from './Layout';

const Wrapper = styled.div`
    display: flex;
    position: relative;
    font-size: 180px;
    font-weight: 700;
    width: 100%;
    text-align: center;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
    font-family: 'Montserrat', 'Inter', 'Source Sans Pro', -apple-system,
        BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;

    @media ${media.largeUp} {
        font-size: 240px;
    }

    strong {
        position: absolute;
        font-size: 20%;
        display: inline-block;
        bottom: 20px;
        right: -40px;

        @media ${media.midUp} {
            right: -60px;
        }
    }
`;

const Holder = styled.div`
    position: relative;
    z-index: 3;
    pointer-events: none;
`;

export const BigText: React.FC = ({ children }) => {
    return (
        <Wrapper>
            <Holder>{children}</Holder>
        </Wrapper>
    );
};
