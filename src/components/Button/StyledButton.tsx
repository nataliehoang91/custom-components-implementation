import styled, { css } from "styled-components";

export type ThemeVariants = "primary" | "basic" | "success" | "error";
export type BtnTypes = "filled" | "link" | "outline";
export type BtnTypeThemeVariants =
  | "outline-primary"
  | "outline-success"
  | "outline-error"
  | "outline-basic"
  | "filled-primary"
  | "filled-success"
  | "filled-error"
  | "filled-basic";

const OUTLINE_VARIANTS = {
  primary: "outline-primary",
  success: "outline-success",
  error: "outline-error",
  basic: "outline-basic",
} as const;

const FILLED_VARIANTS = {
  primary: "filled-primary",
  success: "filled-success",
  error: "filled-error",
  basic: "filled-basic",
} as const;

export const getBtnTypeThemeVariant = (
  variant: ThemeVariants,
  btnType: BtnTypes
): BtnTypeThemeVariants => {
  switch (btnType) {
    case "outline":
      return OUTLINE_VARIANTS[variant];
    case "filled":
      return FILLED_VARIANTS[variant];
    default:
      return FILLED_VARIANTS[variant];
  }
};

export const StyledLinkButton = styled.a<{
  loading?: boolean;
  variant?: "primary" | "basic" | "success" | "error";
  disabled?: boolean;
}>`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }

  ${(props) => {
    switch (props.variant) {
      case "primary":
        return css`
          color: #0095ff;
          &:hover {
            color: #07c;
          }
        `;
      case "basic":
        return css`
          color: #2e3032;
          &:hover {
            color: #000000;
          }
        `;
      case "success":
        return css`
          color: #27ae60;
          &:hover {
            color: #2c974b;
          }
        `;
      case "error":
        return css`
          color: #e62143;
          &:hover {
            color: #b5122e;
          }
        `;
    }
  }};
`;

export const StyledButton = styled("button")<{
  loading?: boolean;
  variant?: "primary" | "basic" | "success" | "error";
  btnTypeThemeVariant: BtnTypeThemeVariants;
}>`
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
  width: 160px;

  &:focus {
    border-color: #008296;
    box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
    outline: 0;
  }

  ${(props) => {
    switch (props.btnTypeThemeVariant) {
      case "filled-primary":
        return css`
          border: 1px solid #d5d9d9;
          background-color: #0095ff;
          color: #fff;
          &:hover {
            background-color: #07c;
          }
        `;
      case "filled-basic":
        return css`
          border: 1px solid #d5d9d9;
          background-color: #fff;
          color: #111827;
          &:hover {
            background-color: #f7fafa;
          }
        `;
      case "filled-success":
        return css`
          border: 1px solid #d5d9d9;
          background-color: #27ae60;
          color: #fff;
          &:hover {
            background-color: #2c974b;
          }
        `;
      case "filled-error":
        return css`
          border: 1px solid #d5d9d9;
          background-color: #e62143;
          color: #fff;
          &:hover {
            background-color: #b5122e;
          }
        `;
      case "outline-primary":
        return css`
          border: 1px solid #0095ff;
          background-color: #e1ecf4;
          color: #0095ff;
        `;
      case "outline-basic":
        return css`
          background-color: #fff;
          color: #111827;
          &:hover {
            background-color: #f7fafa;
          }
        `;
      case "outline-success":
        return css`
          border: 1px solid #27ae60;
          background-color: #d3f1df;
          color: #27ae60;
          &:hover {
            background-color: #2c974b;
          }
        `;
      case "outline-error":
        return css`
          border: 1px solid #e62143;
          background-color: #fcdee3;
          color: #e62143;
          &:hover {
            background-color: #b5122e;
          }
        `;
    }
  }};
`;