import React from 'react';
import styled from 'styled-components';

export const DivWrapper = styled.div<{ position?: string; height?: string }>`
  padding: 1rem;
  display: flex;
  justify-content: ${(props) => (props.position ? props.position : 'center')};
  height: ${(props) => props.height};
`;
