import styled from 'styled-components';

export const TextWrapper = styled.div<{
  textAlign?: string;
  padding?: string;
}>`
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'center')};
  width: 100%;
  padding: ${(props) => (props.padding ? props.padding : '1rem')};
`;
