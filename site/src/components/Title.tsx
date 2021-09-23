import React from 'react';
import styled from 'styled-components';

type Props = { small?: boolean };

const Wrapper = styled.h1<Props>`
    display: block;
    font-size: ${({ small }) => (small ? '100px' : '140px')};
    line-height: 1;
    margin: 0 auto;
`;

const Holder = styled.span`
    background: linear-gradient(
        to bottom right,
        rgba(208, 26, 124, 1),
        rgba(41, 40, 240, 1)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const Title: React.FC<Props> = ({ children, small }) => {
    return (
        <Wrapper small={small}>
            <Holder>{children}</Holder>
        </Wrapper>
    );
};
