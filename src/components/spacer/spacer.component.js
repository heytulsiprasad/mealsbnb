import React from "react";
import styled, { useTheme } from "styled-components/native";

const sizeVariants = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariants = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const SpacerView = styled.View`
  ${({ variant }) => variant};
`;

const getVariant = (position, size, theme) =>
  `${positionVariants[position]}: ${theme.space[sizeVariants[size]]}`;

const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);

  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: "left",
  size: "large",
};

export default Spacer;
