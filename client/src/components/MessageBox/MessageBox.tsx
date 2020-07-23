import React from 'react';
import styled from 'styled-components';

import Paragraph from '../../elements/Paragraph';

import { BORDER_RADIUS } from '../../values';

interface WrapperProps {
    background?: string;
}
const Wrapper = styled.div<WrapperProps>`
    display: flex;
    flex-direction: column;

    padding: 10px;
    border-radius: ${BORDER_RADIUS};

    background: ${props => props.background || 'none'};

    min-width: 200px;
    min-height: 10px;
`;

interface MessageBoxProps {
    title?: string;
    text?: string;
    type?: string;
    visible?: boolean;
}
const typeToColor: Record<string, string> = {
    info: 'white',
    warning: '#f8f882',
    error: 'red',
};
const MessageBox: React.FC<MessageBoxProps> = ({ title, text, type, visible }) => {
    return (
        <Wrapper background={typeToColor[type]} hidden={!visible}>
            <Paragraph fontSize="18" weight="600">
                {title}
            </Paragraph>
            <Paragraph fontSize="14">{text}</Paragraph>
        </Wrapper>
    );
};

export default MessageBox;
