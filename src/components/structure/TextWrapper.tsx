import styled from 'styled-components';

export const TextWrapper = styled.div<{
  textAlign?: string;
  padding?: string;
  backgroundColor?: string;
  borderRadius?: string;
  width?: string;
  height?: string;
}>`
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'center')};
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '')};
  padding: ${(props) => (props.padding ? props.padding : '1rem')};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : ''};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '')};
`;
