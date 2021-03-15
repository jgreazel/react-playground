import React, {FC, ReactNode} from "react";
import {Button as AntButton} from "antd";

type ButtonProps = {
  danger?: boolean;
  disabled?: boolean;
  href?: string;
  icon?: ReactNode;
  loading?: boolean;
  shape?: "circle" | "round";
  target?: "_blank" | "_parent" | "_self" | "_top" | string;
  text?: string;
  type?:
    | "primary"
    | "dashed"
    | "text"
    | "link"
    | "default"
    | "ghost"
    | undefined;
  onClick?: (event: React.MouseEvent) => void;
};

const Button: FC<ButtonProps> = (props) => (
  <AntButton {...props}>{props.text}</AntButton>
);

export default Button;
