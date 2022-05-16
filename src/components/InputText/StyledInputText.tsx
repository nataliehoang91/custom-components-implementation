import styled, { css } from 'styled-components';
import { isError } from 'util';

export type InputTextTypes = 'text' | 'password';

export const StyledInputText = styled.input<{
  isError?: boolean;
}>`
  width: 100%;
  height: 30px;
  font-size: 16px;
  padding: 0 10px 0 11px;
  border-radius: 5px;
  border: 1px solid rgb(114, 116, 120);
  outline: none;

  ${(props) => {
    let customStyle = '';
    if (props.isError) customStyle += 'border-color: red;';
    if (props.disabled) customStyle += 'background-color: rgb(218, 219, 222);';
    return css`
      ${customStyle}
    `;
  }}
`;

export const StyledInputLabel = styled.label<{
  for?: string;
  isError?: boolean;
  disabled?: boolean;
}>`
  ${(props) => {
    let customStyle = '';
    if (props.isError) customStyle += 'color: red;';
    if (props.disabled) customStyle += 'color: rgb(218, 219, 222);';
    return css`
      ${customStyle}
    `;
  }}
`;
export const StyledInputError = styled.span<{}>`
  color: red;
`;
