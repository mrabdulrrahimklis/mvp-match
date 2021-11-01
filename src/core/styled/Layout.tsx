import styled from "@emotion/styled";

export interface LayoutProps {
  fullWidth?: boolean;
  padding?: number;
  border?: string;
  display?: "flex" | "block" | "inline-block" | "inline";
  justifyContent?: string;
}

export const Layout = styled.div<LayoutProps>`
  width: ${(props) => (props.fullWidth ? "100%" : "")};
  border: ${(props) => (props.border ? props.border : "")};
  padding: ${(props) => (props.padding ? `${props.padding}px` : "")};
  display: ${(props) => (props.display ? props.display : "flex")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : ""};
`;
