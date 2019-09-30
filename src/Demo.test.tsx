import React from 'react';
import renderer from 'react-test-renderer';
import { DemoDomComponent, DemoStyledComponent } from './Demo';

describe('Show issue testing styled-components', () => {
  test(`should have one container for dom example`, () => {
    const output = renderer.create(<DemoDomComponent
      values={['foo', 'bar']}
    />);

    const selection = output!.root.findAllByProps({ 'data-cy': 'container' });

    expect(selection.length).toEqual(1);
  });

  test(`should have one container for styled example`, () => {
    const output = renderer.create(<DemoStyledComponent
      values={['foo', 'bar']}
    />);

    const selection = output!.root.findAllByProps({ 'data-cy': 'container' });

    expect(selection.length).toEqual(1);
  });

  test(`should have one row per string in dom example`, () => {
    const output = renderer.create(<DemoDomComponent
      values={['foo', 'bar']}
    />);

    const selection = output!.root.findAllByProps({ 'data-cy': 'item' });

    expect(selection.length).toEqual(2);
  });

  test(`should have one row per string in styled example`, () => {
    const output = renderer.create(<DemoStyledComponent
      values={['foo', 'bar']}
    />);

    const selection = output!.root.findAllByProps({ 'data-cy': 'item' });

    expect(selection.length).toEqual(2);
  });
});
