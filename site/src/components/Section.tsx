import React from 'react';
import styled from 'styled-components';

type Props = {
    id?: string;
    hero?: boolean;
    thin?: boolean;
    center?: boolean;
};

const Wrapper = styled.section`
    display: block;
`;

const Inner = styled.div<{
    extraSpace?: boolean;
    thin?: boolean;
    center?: boolean;
}>`
    display: block;
    padding: 80px 20px;
    padding-top: ${({ extraSpace }) => (extraSpace ? '30vh' : '20vh')};
    margin: 0 auto;
    max-width: ${({ thin }) => (thin ? '840px' : '1480px')};
    text-align: ${({ center }) => (center ? 'center' : 'left')};
    ${({ extraSpace }) => (extraSpace ? 'max-height: 74vh' : '')};
`;

export const Section: React.FC<Props> = ({
    center,
    thin,
    hero,
    id,
    children,
}) => {
    return (
        <Wrapper id={id}>
            <Inner center={hero || center} thin={thin} extraSpace={hero}>
                {children}
            </Inner>
        </Wrapper>
    );
};
