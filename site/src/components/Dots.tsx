import React from 'react';
import styled, { keyframes } from 'styled-components';

const values: { [key: string]: number } = {};
const getRandomMemoNumber = (from: number, to: number, key: string) => {
    if (!values[key]) {
        values[key] = Math.round(Math.random() * (to - from) + from);
    }

    return values[key];
};

const slideUp = keyframes`
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100px);
    opacity: 0;
  }
`;

const Wrapper = styled.div`
    display: block;
    position: relative;
`;

const Dot = styled.div<{
    widthAndHeight: number;
    left: number;
    delay: number;
    duration: number;
}>`
    display: block;
    position: absolute;
    width: ${({ widthAndHeight }) => widthAndHeight}px;
    height: ${({ widthAndHeight }) => widthAndHeight}px;
    bottom: 0;
    left: ${({ left }) => left}%;
    border-radius: 50%;
    background: linear-gradient(
        to bottom right,
        rgb(208, 26, 124),
        rgba(41, 40, 240, 1)
    );
    z-index: 4;
    animation: ${({ duration }) => duration}s ${slideUp} -${({ delay }) =>
            delay}s ease-out infinite;
`;

export const Dots: React.FC<{ index: number }> = ({ index, children }) => {
    const isSSR = typeof window === 'undefined';

    return (
        <Wrapper suppressHydrationWarning>
            {children}
            {!isSSR &&
                [...Array(30)].map((x, i) => (
                    <Dot
                        key={`${index} ${i}`}
                        widthAndHeight={getRandomMemoNumber(4, 20, `${i}size`)}
                        left={getRandomMemoNumber(20, 80, `${i}left`)}
                        delay={getRandomMemoNumber(0, 100, `${i}delay`) / 100}
                        duration={
                            getRandomMemoNumber(80, 120, `${i}duration`) / 100
                        }
                    />
                ))}
        </Wrapper>
    );
};
