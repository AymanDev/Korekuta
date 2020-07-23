import React from 'react';
import styled, { css } from 'styled-components';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BORDER, BUTTON_BACKGROUND_COLOR } from '../../values';
import { useModal } from '../../utils/hooks';
import DropdownList from './DropdownList';

const Wrapper = styled.div`
    position: relative;

    display: flex;
    align-items: center;
    width: max-content;
    min-height: 20px;
    padding: 7px;

    background: ${BUTTON_BACKGROUND_COLOR};
    border: ${BORDER};
    border-radius: 5px;

    font-size: 16px;

    cursor: pointer;

    & > svg {
        font-size: 18px;
    }
`;
const Title = styled.span`
    margin-left: 5px;
`;
export interface DropdownProps {
    title: string;
    open?: boolean;
    onClick?: (e: React.MouseEvent) => void;
}
const Dropdown: React.FC<DropdownProps> = ({ title, children, onClick, ...rest }) => {
    const { ref, open, setOpen } = useModal<HTMLDivElement>();

    const handleClick = (e: React.MouseEvent) => {
        setOpen(prev => !prev);
        onClick && onClick(e);
        e.preventDefault();
    };

    return (
        <Wrapper onClick={handleClick} ref={ref} {...rest}>
            <FontAwesomeIcon size="1x" icon={faAngleDown} />
            <Title>{title}</Title>
            <DropdownList visible={open}>{children}</DropdownList>
        </Wrapper>
    );
};

export default Dropdown;
