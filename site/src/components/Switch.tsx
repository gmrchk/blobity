import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.button<{ isActive: boolean }>`
    display: block;
    position: relative;
    width: 50px;
    height: 24px;
    border-radius: 12px;
    border: none;
    box-shadow: none;
    z-index: 3;
    transition: background 0.3s ease;
    background: ${({ isActive }) => (isActive ? '#ddd' : '#222')};

    &:after {
        content: '';
        display: block;
        position: absolute;
        width: 16px;
        height: 16px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        background: linear-gradient(
            to bottom right,
            rgba(208, 26, 124, 1),
            rgba(41, 40, 240, 1)
        );
        top: 4px;
        left: 6px;
        transition: transform 0.3s ease, filter 0.3s ease;
        border-radius: 50%;
        ${({ isActive }) => (isActive ? 'transform: translateX(22px)' : '')};
    }
`;

export const Switch: React.FC<{
    initial?: boolean;
    onChange: (isActive: boolean) => void;
}> = ({ initial = false, onChange }) => {
    const [isActive, useIsActive] = useState(initial);

    const onClick = () => {
        useIsActive(!isActive);
    };

    useEffect(() => {
        onChange(isActive);
    }, [isActive]);

    return (
        <Wrapper
            data-blobity-radius="16"
            data-blobity-magnetic="false"
            isActive={isActive}
            onClick={onClick}
        />
    );
};
