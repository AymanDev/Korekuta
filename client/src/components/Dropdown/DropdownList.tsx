import React from 'react';
import styled from 'styled-components';

import { BASIC_TRANSITION, BORDER, BORDER_RADIUS, BUTTON_BACKGROUND_COLOR, DROPDOWN_MAX_HEIGHT } from '../../values';

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

    overflow: hidden;
    max-height: ${props => (props.visible ? DROPDOWN_MAX_HEIGHT : 0)}px;
    visibility: ${props => (props.visible ? 'visible' : 'hidden')};
    transition: ${BASIC_TRANSITION};
`;
export interface DropdownListProps {
    visible: boolean;
}
const DropdownList: React.FC<DropdownListProps> = ({ visible, children }) => {
    return <DropdownListWrapper visible={visible}>{children}</DropdownListWrapper>;
};

export default DropdownList;
