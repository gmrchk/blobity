import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from 'styled-components';

type Props = {
    language: 'jsx' | 'html';
};
const Wrapper = styled.div`
    position: relative;
`;
const Label = styled.div`
    position: absolute;
    background: #111;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    font-size: 14px;
    padding: 4px 8px;
    text-transform: uppercase;
    border-radius: 4px;
    bottom: 0;
    right: 15px;
    transform: translateY(50%);
`;

export const htmlExample = `<script src="https://blobity.dev/bt.js?licenseKey=..."></script>`;
export const htmlCustomExample = `<script src="https://blobity.dev/bt.js"></script>
<script>
    const blobity = new Blobity({
        licenseKey: '...'
    });
</script>`;
export const reactExample = `import { useBlobity } from 'blobity';

const Component = () => {
    const blobity = useBlobity({
        licenseKey: '...'
    });
    
    return <div />; 
};`;

export const Code: React.FC<Props> = ({ children, language }) => {
    return (
        <Wrapper
            data-blobity-tooltip="Click to copy"
            data-blobity-magnetic="false"
        >
            <SyntaxHighlighter
                showLineNumbers={true}
                language={language}
                style={darcula}
            >
                {children}
            </SyntaxHighlighter>
            <Label>{language}</Label>
        </Wrapper>
    );
};
