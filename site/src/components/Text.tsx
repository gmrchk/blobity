import React from 'react';
import styled from 'styled-components';
import { media } from './Layout';

export const StyledHeadline = styled.h2`
    font-size: 26px;
    margin: 0 auto 20px;
    padding: 0 20px 0 0;

    @media ${media.midUp} {
        font-size: 32px;
    }
`;

export const SubHeadline = styled.h2`
    font-size: 20px;
    margin: 0 auto 20px;
    padding: 0 20px 0 0;

    @media ${media.midUp} {
        font-size: 16px;
    }
`;

export const Text = styled.p<{ small?: boolean }>`
    font-size: ${({ small }) => (small ? '13px' : '16px')};

    @media ${media.midUp} {
        font-size: ${({ small }) => (small ? '14px' : '18px')};
    }

    @media ${media.largeUp} {
        font-size: ${({ small }) => (small ? '16px' : '22px')};
    }
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
