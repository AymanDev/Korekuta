import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div``;
export interface LoaderProps {
    loading: boolean;
}
const Loader: React.FC<LoaderProps> = () => {
    return (
        <Wrapper>
            <FontAwesomeIcon icon={faSpinner} spin />
        </Wrapper>
    );
};

export default Loader;
