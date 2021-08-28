import React from 'react';
import styled from 'styled-components';

export const StyledHeadline = styled.h2`
    font-size: 32px;
    margin: 0 auto 20px;
`;

export const Text = styled.p<{ small?: boolean }>`
    font-size: ${({ small }) => (small ? '16px' : '22px')};
`;

export const Holder = styled.span`
    margin: 0 auto;
    max-width: 1024px;
    display: block;
`;

export const Headline: React.FC = ({ children }) => {
    return (
        <StyledHeadline>
            <Holder>{children}</Holder>
        </StyledHeadline>
    );
};
