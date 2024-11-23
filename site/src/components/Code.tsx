import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from 'styled-components';
import Blobity from '../../../lib';

type Props = {
    language: 'jsx' | 'html';
    blobityInstance: React.MutableRefObject<Blobity | null>;
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
    z-index: 1;
`;

export const InlineCode = styled.code`
    background: rgba(255, 255, 255, 0.2);
    padding: 4px 6px;
    border-radius: 3px;
`;

export const htmlExample = `<script src="https://cdn.blobity.gmrchk.com/by.js?autoStart&licenseKey=..."></script>

<!-- or create instance manually to provide custom options -->
<script src="https://cdn.blobity.gmrchk.com/by.js"></script>
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

export const Code: React.FC<Props> = ({
    children,
    language,
    blobityInstance,
}) => {
    const onClick = () => {
        navigator.clipboard.writeText(String(children));
        if (blobityInstance.current) {
            blobityInstance.current.showTooltip('Copied!');

            setTimeout(() => {
                if (blobityInstance.current) {
                    blobityInstance.current.reset();
                    blobityInstance.current.bounce();
                }
            }, 1400);
        }
    };

    return (
        <Wrapper
            data-blobity-tooltip="Click to copy"
            data-blobity-magnetic="false"
            onClick={onClick}
        >
            <SyntaxHighlighter
                showLineNumbers={true}
                language={language}
                style={vscDarkPlus}
            >
                {children}
            </SyntaxHighlighter>
            <Label>{language}</Label>
        </Wrapper>
    );
};
