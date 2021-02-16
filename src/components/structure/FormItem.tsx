import styled from 'styled-components';

export interface FormItemProps {
  flex?: boolean;
  alignItems?: string;
}

export const FormItem = styled.div<FormItemProps>`
  display: ${(props: FormItemProps) => (props.flex ? 'flex' : '')};
  margin-left: 1rem;
  align-items: ${(props: FormItemProps) =>
    props.alignItems ? props.alignItems : ''};
`;
