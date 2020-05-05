import React from "react";
import styled from "styled-components";

const NotFoundImage = require("./images/404.jpg");
const Wrapper = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const NotFoundPage = () => {
  return (
    <Wrapper>
      <img src={NotFoundImage} alt="404 Not Found" />
    </Wrapper>
  );
};

export default NotFoundPage;
