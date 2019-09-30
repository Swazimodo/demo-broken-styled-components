import React from 'react';
import styled from 'styled-components';

export const DemoDomComponent: React.FC<{values: string[]}> = (props) => {
  return <div data-cy="container">
    {props.values.map((x, i) => <div key={i} data-cy="item">{x}</div>)}
  </div>;
}

export const DemoStyledComponent: React.FC<{values: string[]}> = (props) => {
  return <WrapperDiv data-cy="container">
    {props.values.map((x, i) => <ItemDiv key={i} data-cy="item">{x}</ItemDiv>)}
  </WrapperDiv>;
}

const WrapperDiv = styled.div`
  background: blue;
`;

const ItemDiv = styled.div`
  background: green;
`;