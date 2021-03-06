import React from "react";

import styled from "styled-components";

const Container = styled.div`
  height: 120px;
  width: 80px;
  display: flex;
  border-radius: 10px;
  border: 1px solid #333;
  align-items: center;
  justify-content: center;
  cursor: ${({ onClick }) => (!!onClick ? "pointer" : "inherit")};

  background-color: ${({ hidden }) => (hidden ? "gray" : "transparent")};

  :hover {
    opacity: ${({ onClick }) => (!!onClick ? 0.7 : 1)};
  }
`;

const Card: React.FC<
  React.HTMLAttributes<HTMLDivElement> & { hidden?: boolean }
> = ({ children, ...props }) => {
  return <Container {...props}>{!props.hidden && children}</Container>;
};

export default Card;
