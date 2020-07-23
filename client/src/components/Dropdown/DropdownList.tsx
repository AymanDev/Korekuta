import React from 'react';
import styled from 'styled-components';

import { BASIC_TRANSITION, BORDER, BORDER_RADIUS, BUTTON_BACKGROUND_COLOR } from '../../values';

export interface DropdownListWrapperProps {
    visible: boolean;
    offset?: number;
}
const DropdownListWrapper = styled.div<DropdownListWrapperProps>`
    position: absolute;
    top: ${props => props.offset || 36}px;
    left: 0;

    border: ${BORDER};
    border-radius: ${BORDER_RADIUS};

    background: ${BUTTON_BACKGROUND_COLOR};

    transition: ${BASIC_TRANSITION};

    max-height: ${props => (props.visible ? 500 : 0)}px;
    display: ${props => (props.visible ? 'block' : 'none')};
`;
export interface DropdownListProps {
    visible: boolean;
}
const DropdownList: React.FC<DropdownListProps> = ({ visible, children }) => {
    return <DropdownListWrapper visible={visible}>{children}</DropdownListWrapper>;
};

export default DropdownList;
