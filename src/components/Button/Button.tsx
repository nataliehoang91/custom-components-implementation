import React, { MouseEvent, FocusEvent, ReactElement, ReactNode } from "react";

import { RepeatIcon } from "@chakra-ui/icons";

import {
  StyledLinkButton,
  StyledButton,
  getBtnTypeThemeVariant,
  ThemeVariants,
  BtnTypes,
  getThemeDisabled,
  SpinningIcon,
  LinkSpinningIcon,
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
    <>
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
        {loading === true && (
          <SpinningIcon
            btnTypeThemeVariant={getBtnTypeThemeVariant(variant, btnType)}
          >
            <RepeatIcon size="xl" />
          </SpinningIcon>
        )}
      </StyledButton>
    </>
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
      {loading === true && (
        <LinkSpinningIcon variant={variant}>
          <RepeatIcon size="xl" />
        </LinkSpinningIcon>
      )}
    </StyledLinkButton>
  );
};

export default Button;
