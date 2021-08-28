import React from 'react';
import styled from 'styled-components';

type Props = {
    reversed?: boolean;
};

export const Half = styled.div`
    width: 50%;
`;

const Wrapper = styled.div<Props>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    ${Half} {
        &:nth-child(1) {
            padding-right: 30px;
        }

        &:nth-child(2) {
            padding-left: 30px;
        }
    }

    ${({ reversed }) =>
        reversed &&
        `
        &:nth-child(even) {
            flex-direction: row-reverse;
    
            ${Half} {
                &:nth-child(1) {
                    padding-right: 0;
                    padding-left: 40px;
                }
    
                &:nth-child(2) {
                    padding-left: 0;
                    padding-right: 40px;
                }
            }
        }
    `}
`;

export const Layout: React.FC<Props> = ({ reversed, children }) => {
    return <Wrapper reversed={reversed}>{children}</Wrapper>;
};
