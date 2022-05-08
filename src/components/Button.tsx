import React, { MouseEvent, FocusEvent, ReactElement, ReactNode } from "react";
import styled, { css } from "styled-components";

const StyledButton = styled("button")<{
  loading?: boolean;
  variant?: "primary" | "basic" | "success" | "error";
  btnType?: "filled" | "link";
}>`
  border: 1px solid #d5d9d9;
  border-radius: 8px;
  box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  line-height: 29px;
  padding: 0 10px 0 11px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  width: 100px;

  &:hover {
    background-color: #f7fafa;
  }

  &:focus {
    border-color: #008296;
    box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
    outline: 0;
  }

  ${(props) => {
    switch (props.variant) {
      case "primary":
        return css`
          background-color: #0095ff;
          color: #fff;
        `;
      case "basic":
        return css`
          background-color: #fff;
          color: #111827;
        `;
      case "success":
        return css`
          background-color: #27ae60;
          color: #fff;
        `;
      case "error":
        return css`
          background-color: #e62143;
          color: #fff;
        `;
    }
  }};
`;

interface ButtonProps {
  onBlur?: (e: FocusEvent) => void;
  onClick?: (e: MouseEvent) => void;
  text: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  btnType?: "filled" | "link";
  variant?: "primary" | "basic" | "success" | "error";
}

const Button = ({
  text,
  onClick,
  onBlur,
  loading = false,
  disabled = false,
  variant = "basic",
  btnType = "filled",
}: ButtonProps): ReactElement => {
  return loading === false ? (
    <StyledButton
      onClick={onClick}
      onBlur={onBlur}
      disabled={disabled}
      loading={loading}
      variant={variant}
      btnType={btnType}
    >
      {text}
    </StyledButton>
  ) : (
    <div />
  );
};

export default Button;
