import styled from 'styled-components';

export interface ParagraphProps {
    fontSize?: number | string;
    weight?: number | string;
}
const Paragraph = styled.p<ParagraphProps>`
    font-size: ${props => props.fontSize}px;
    font-weight: ${props => props.weight};

    margin: 0;
    padding: 0;
`;
Paragraph.defaultProps = {
    fontSize: 12,
    weight: '400',
};
export default Paragraph;
