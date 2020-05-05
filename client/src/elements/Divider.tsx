import styled from "styled-components";

export interface DividerProps {
  color?: string;
  vertical?: boolean;
}
const Divider = styled.div<DividerProps>`
  background: ${props => props.color};
  width: ${props => (props.vertical ? "1px" : "100%")};
  height: ${props => (props.vertical ? "100%" : 0)};
`;
Divider.defaultProps = {
  color: "rgba(255,255,255,0.5)",
  vertical: true
};

export default Divider;
