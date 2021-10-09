import React from 'react';
import styled from 'styled-components';
import { media } from './Layout';
import { Text } from './Text';
import danger from '../images/danger.svg';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    font-size: 180px;
    font-weight: 700;
    width: 100%;
    text-align: left;
    height: 100%;
    text-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
    padding: 20px 20px 20px 20px;
    background: #f0cd0c;
    color: #000;

    @media ${media.midUp} {
        display: none;
    }

    ${Text} {
        font-weight: 700;
        margin: 0;
        font-size: 12px;
    }

    img {
        width: 30px;
        margin: 0 20px 0 0;
        display: block;
    }
`;

export const Notice: React.FC = ({}) => {
    return (
        <Wrapper>
            <img alt="warning" src={danger} />
            <Text>
                Note that Blobity is a library focused on improving experience
                browsing the site with a cursor based navigation (eg. mouse).
                Smartphones or touch based devices might not be the best way to
                see what it does or test it out.{' '}
            </Text>
        </Wrapper>
    );
};
