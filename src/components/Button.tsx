import React from "react";
import styled from "styled-components";

const Container = styled.button`
  padding: 1em 2em;
  border: 0;
  cursor: pointer;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.light.primary};
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.2em;
`;

const Button: React.FC<React.HTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return <Container {...props}>{children}</Container>;
};

export default Button;
