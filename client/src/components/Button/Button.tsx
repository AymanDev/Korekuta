import styled from "styled-components";
import { BORDER, BORDER_RADIUS, BUTTON_BACKGROUND_COLOR } from "../../values";

const Button = styled.button`
  padding: 5px;

  background: ${BUTTON_BACKGROUND_COLOR};
  border: ${BORDER};
  border-radius: ${BORDER_RADIUS};
  color: white;

  cursor: pointer;
`;

export default Button;
