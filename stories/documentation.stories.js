import React from "react";
import styled from 'styled-components';
import { Column, Row } from '../src';

export default {
  title: "Documentation"
};

const Col = styled(Column)`
  background-color: blue;
`

export const grid = () => (
  <div>
    <Row>
      <Col width={1} numCols={2}>
        col 1 of 2
      </Col>
      <Col width={1} numCols={2}>
        col 1 of 2
      </Col>
    </Row>
    <Row>
      <Col width={1} numCols={3}>
        col 1 of 3
      </Col>
      <Col width={2} numCols={3}>
        col 2 of 3
      </Col>
    </Row>
    <Row>
      <Col width={1} numCols={3}>
        col 1 of 3
      </Col>
      <Col width={1} numCols={3}>
        col 1 of 3
      </Col>
      <Col width={1} numCols={3}>
        col 1 of 3
      </Col>
    </Row>
    <Row>
      <Col width={1} numCols={4}>
        col 1 of 4
      </Col>
      <Col width={1} numCols={4}>
        col 1 of 4
      </Col>
      <Col width={1} numCols={4}>
        col 1 of 4
      </Col>
      <Col width={1} numCols={4}>
        col 1 of 4
      </Col>
    </Row>
    <Row>
      <Col width={1} numCols={4}>
        col 1 of 4
      </Col>
      <Col width={2} numCols={4}>
        col 2 of 4
      </Col>
      <Col width={1} numCols={4}>
        col 1 of 4
      </Col>
    </Row>
  </div>
);
