# React Styled Components Grid

A simple React grid component built with Styled Components, adapted from Udemy course 'Advanced CSS and Sass: Flexbox, Grid, Animations and More!'.

View example here: https://react-sc-grid-storybook.s3-eu-west-1.amazonaws.com/storybookS3/index.html?path=/story/example-usage--grid

## Installation

`npm i react-sc-grid`

## Usage

```javascript
import { Column, Row } from 'react-sc-grid';

const App = () => {
  <>
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
  </>;
};
```
