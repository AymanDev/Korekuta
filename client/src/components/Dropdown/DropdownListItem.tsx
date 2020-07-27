import styled from 'styled-components';
import { lighten } from 'polished';

import { BASIC_TRANSITION, BORDER_RADIUS, BUTTON_BACKGROUND_COLOR } from '../../values';
import { withLink } from '../../utils/hocs';

export const DropdownListItemComponent = styled.div`
    height: 40px;
    color: white;
    padding: 10px;

    white-space: pre-wrap;

    transition: ${BASIC_TRANSITION};

    :first-child {
        border-top-left-radius: ${BORDER_RADIUS};
        border-top-right-radius: ${BORDER_RADIUS};
    }
    :last-child {
        border-bottom-left-radius: ${BORDER_RADIUS};
        border-bottom-right-radius: ${BORDER_RADIUS};
    }

    :hover {
        background: ${lighten(0.1, BUTTON_BACKGROUND_COLOR)};
    }
`;


export default withLink(DropdownListItemComponent);
