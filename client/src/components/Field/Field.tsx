import React from "react";
import styled from "styled-components";
import Paragraph from "../../elements/Paragraph";
import { BORDER, BORDER_RADIUS } from "../../values";

export interface FieldProps {
  title?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  border: ${BORDER};
  border-radius: ${BORDER_RADIUS};
  
  padding: 5px;
  margin-top: 5px;
`;
const Field: React.FC<FieldProps> = ({ title, value, onChange }) => {
  return (
    <Wrapper>
      <Paragraph fontSize="16">{title}</Paragraph>
      <Input value={value} onChange={onChange} />
    </Wrapper>
  );
};

export default Field;
