import React from 'react';
import styled from 'styled-components';
import { gridWidth, gutterVertical } from '../constants';

const Row = styled.div`
  max-width: ${gridWidth};
  margin: 0 auto;
  &:not(:last-child) {
    margin-bottom: ${gutterVertical};
  }
  &::after {
    content: '';
    display: table;
    clear: both;
  }
`;

export default Row;