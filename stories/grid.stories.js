import React from "react";
import { Column, Row } from '../src';

export default {
  title: "Example Grid Usage"
};

export const grid = () => (
  <div>
    <Row>
      <Column width={1} numCols={2}>
        col 1 of 2
      </Column>
      <Column width={1} numCols={2}>
        col 1 of 2
      </Column>
    </Row>
    <Row>
      <Column width={1} numCols={3}>
        col 1 of 3
      </Column>
      <Column width={2} numCols={3}>
        col 2 of 3
      </Column>
    </Row>
    <Row>
      <Column width={1} numCols={3}>
        col 1 of 3
      </Column>
      <Column width={1} numCols={3}>
        col 1 of 3
      </Column>
      <Column width={1} numCols={3}>
        col 1 of 3
      </Column>
    </Row>
    <Row>
      <Column width={1} numCols={4}>
        col 1 of 4
      </Column>
      <Column width={1} numCols={4}>
        col 1 of 4
      </Column>
      <Column width={1} numCols={4}>
        col 1 of 4
      </Column>
      <Column width={1} numCols={4}>
        col 1 of 4
      </Column>
    </Row>
    <Row>
      <Column width={1} numCols={4}>
        col 1 of 4
      </Column>
      <Column width={2} numCols={4}>
        col 2 of 4
      </Column>
      <Column width={1} numCols={4}>
        col 1 of 4
      </Column>
    </Row>
  </div>
);
