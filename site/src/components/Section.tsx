import React from 'react';
import styled from 'styled-components';
import { Text } from './Text';
import { media } from './Layout';

type Props = {
    id?: string;
    hero?: boolean;
    thin?: boolean;
    center?: boolean;
    notFound?: boolean;
    last?: boolean;
};

const Inner = styled.div<{
    notFound?: boolean;
    extraSpace?: boolean;
    thin?: boolean;
    thiner?: boolean;
    center?: boolean;
    last?: boolean;
}>`
    display: block;
    padding: 40px 20px;
    padding-top: ${({ extraSpace }) => (extraSpace ? '20vh' : '10vh')};
    margin: 0 auto;
    max-width: ${({ thin }) => (thin ? '840px' : '1480px')};
    text-align: ${({ center }) => (center ? 'center' : 'left')};

    @media ${media.midUp} {
        padding: 80px 20px;
        padding-top: ${({ extraSpace }) => (extraSpace ? '24vh' : '20vh')};
        ${({ extraSpace }) => (extraSpace ? 'max-height: 74vh' : '')};
    }

    ${Text} {
        ${({ notFound }) => (notFound ? 'max-width: 720px;' : '')};
        margin-left: auto;
        margin-right: auto;
    }

    ${({ last }) =>
        last
            ? `
              padding-bottom: 10vh;

              @media ${media.midUp} {
                  padding-bottom: 10vh;
              }
            `
            : ''}
`;

const Wrapper = styled.section`
    display: block;
    overflow: hidden;
    max-width: 100%;
`;

export const Section: React.FC<Props> = ({
    last,
    notFound,
    center,
    thin,
    hero,
    id,
    children,
}) => {
    return (
        <Wrapper id={id}>
            <Inner
                center={hero || center}
                thin={thin}
                notFound={notFound}
                last={last}
                extraSpace={hero}
            >
                {children}
            </Inner>
        </Wrapper>
    );
};
