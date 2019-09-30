import React from 'react';
import styled, { css } from 'styled-components';
import { gutterHorizontal } from '../constants';

const BaseCol = styled.div`
  float: left;
  &:not(:last-child) {
    margin-right: ${gutterHorizontal};
  }
`;

const Column = styled(BaseCol)`
  ${({ numCols, width }) => {
    return css`
      width: calc(
        ${width} * ((100% - ${numCols - 1} * ${gutterHorizontal}) / ${numCols}) +
          ((${width} - 1) * ${gutterHorizontal})
      );
    `;
  }}
`;

export default Column;
