import React from 'react';
import styled from 'styled-components';

type Props = {
    id?: string;
    hero?: boolean;
};

const Wrapper = styled.section`
    display: block;
`;

const Inner = styled.div<{ extraSpace?: boolean }>`
    display: block;
    padding: 80px 20px;
    padding-top: ${({ extraSpace }) => (extraSpace ? '200px' : '80px')};
    margin: 0 auto;
    max-width: 1280px;
`;

export const Section: React.FC<Props> = ({ hero, id, children }) => {
    return (
        <Wrapper id={id}>
            <Inner extraSpace={hero}>{children}</Inner>
        </Wrapper>
    );
};
