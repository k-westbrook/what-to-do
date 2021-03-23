import React from 'react';
import styled from 'styled-components';
import { FileExtensionInfo } from 'typescript';

export const DivWrapper = styled.div<{
  position?: string;
  height?: string;
  padding?: string;
  flexDirection?: string;
  display?: string;
}>`
  padding: ${(props) => (props.padding ? props.padding : '1rem')};
  display: ${(props) => (props.display ? props.display : 'flex')};
  justify-content: ${(props) => (props.position ? props.position : 'center')};
  height: ${(props) => props.height};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : 'row'};
  height: ${(props) => props.height};
`;
