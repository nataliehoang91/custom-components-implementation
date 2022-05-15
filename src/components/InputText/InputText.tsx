import React, { ReactElement } from 'react';

import {
  StyledInputText,
  StyledInputLabel,
  StyledInputError,
} from './StyledInputText';

export interface InputTextProps {
  id?: string;
  name?: string;
  placeholder?: string;
  label?: string;
  type?: string;
  value?: string;
  isError?: boolean;
  errorMessage?: string;
  disabled?: boolean;
}

const InputText = ({
  id,
  name,
  placeholder,
  label = '',
  type = 'text',
  value,
  isError = false,
  errorMessage = '',
  disabled = false,
}: InputTextProps): ReactElement => {
  return (
    <>
      {label && (
        <StyledInputLabel for={id} isError={isError} disabled={disabled}>
          {label}
        </StyledInputLabel>
      )}
      <StyledInputText
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        isError={isError}
        disabled={disabled}
      />
      {isError && <StyledInputError>{errorMessage}</StyledInputError>}
    </>
  );
};

export default InputText;
