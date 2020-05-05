import styled from "styled-components";

export interface ParagraphProps {
  fontSize?: number;
  weight?: string;
}
const Paragraph = styled.p<ParagraphProps>`
  font-size: ${props => props.fontSize}px;
  font-weight: ${props => props.weight};

  margin: 0;
  padding: 0;
`;
Paragraph.defaultProps = {
  fontSize: 12,
  weight: "normal"
};
export default Paragraph;
