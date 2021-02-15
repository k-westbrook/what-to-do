import styled from 'styled-components';

export const FormItem = styled.div<{ flex?: boolean }>`
  display: ${(props) => (props.flex ? 'flex' : '')};
  margin-left: 1rem;
`;
