import React from 'react';
import styled from 'styled-components';
import { Column, Row } from '../src';
import wideLandscape from './static/wide-landscape.jpg';
import square1 from './static/square-1.jpg';
import square2 from './static/square-2.jpg';
import square3 from './static/square-3.jpg';
import square4 from './static/square-4.jpg';
import rain from './static/rain.jpg';
import jelly1 from './static/jelly1v2.jpg';
import jelly2 from './static/jelly2v2.jpg';
import jelly3 from './static/jelly3v2.jpg';
import splash1 from './static/splash1.jpg';
import splash2 from './static/splash2.jpg';
import splash3 from './static/splash3.jpg';

export default {
  title: 'Example Usage'
};

const Wide = styled.img`
  width: 100%;
  position: relative;
  text-align: center;
  color: white;
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
`;

export const grid = () => (
  <div>
    <Row>
      <Column width={1} numCols={1}>
        <Wide src={wideLandscape} />
      </Column>
    </Row>
    <Row>
      <Column width={1} numCols={4}>
        <Image src={square1} />
      </Column>
      <Column width={1} numCols={4}>
        <Image src={square2} />
      </Column>
      <Column width={1} numCols={4}>
        <Image src={square3} />
      </Column>
      <Column width={1} numCols={4}>
        <Image src={square4} />
      </Column>
    </Row>
    <Row>
      <Column width={1} numCols={1}>
        <Image src={rain} />
      </Column>
    </Row>
    <Row>
      <Column width={2} numCols={3}>
        <Image src={jelly1} />
      </Column>
      <Column width={1} numCols={3}>
        <Image src={splash1} />
      </Column>
    </Row>
    <Row>
      <Column width={1} numCols={3}>
        <Image src={splash2} />
      </Column>
      <Column width={2} numCols={3}>
        <Image src={jelly2} />
      </Column>
    </Row>
    <Row>
      <Column width={2} numCols={3}>
        <Image src={jelly3} />
      </Column>
      <Column width={1} numCols={3}>
        <Image src={splash3} />
      </Column>
    </Row>
  </div>
);
