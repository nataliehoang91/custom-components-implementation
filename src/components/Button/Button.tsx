import React, { MouseEvent, FocusEvent, ReactElement, ReactNode } from "react";
import {
  StyledLinkButton,
  StyledButton,
  getBtnTypeThemeVariant,
  ThemeVariants,
  BtnTypes,
  getThemeDisabled,
} from "./StyledButton";

export interface ButtonProps {
  onBlur?: (e: FocusEvent) => void;
  onClick?: (e: MouseEvent) => void;
  text: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  variant?: ThemeVariants;
  href?: string;
  btnType?: BtnTypes;
}

const Button = ({
  text,
  onClick,
  onBlur,
  loading = false,
  disabled = false,
  variant = "basic",
  btnType = "filled",
  href,
}: ButtonProps): ReactElement => {
  return btnType !== "link" ? (
    <StyledButton
      onClick={onClick}
      onBlur={onBlur}
      disabledType={getThemeDisabled(disabled, btnType)}
      loading={loading}
      variant={variant}
      disabled={disabled}
      btnTypeThemeVariant={getBtnTypeThemeVariant(variant, btnType)}
    >
      {text}
    </StyledButton>
  ) : (
    <StyledLinkButton
      onClick={onClick}
      onBlur={onBlur}
      disabled={disabled}
      loading={loading}
      variant={variant}
      href={href}
    >
      {text}
    </StyledLinkButton>
  );
};

export default Button;
