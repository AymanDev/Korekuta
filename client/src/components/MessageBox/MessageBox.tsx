import React from "react";
import styled from "styled-components";
import { BORDER_RADIUS } from "../../values";
import Paragraph from "../../elements/Paragraph";

interface WrapperProps {
  background?: string;
}
const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;

  padding: 10px;
  border-radius: ${BORDER_RADIUS};

  background: ${props => props.background || "none"};

  min-width: 200px;
  min-height: 10px;
`;

const CloseBtn = styled.div`
  position: absolute;
`;
interface MessageBoxProps {
  title?: string;
  text?: string;
  type?: string;
  visible?: boolean;
}
const typeToColor = {
  info: "white",
  warning: "#f8f882",
  error: "red"
};
const MessageBox: React.FC<MessageBoxProps> = ({
  title,
  text,
  type,
  visible
}) => {
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
