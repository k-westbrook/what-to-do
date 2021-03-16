import styled from 'styled-components';

export const TextWrapper = styled.div<{
  textAlign?: string;
}>`
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'center')};
  width: 100%;
  padding: 1rem;
`;
