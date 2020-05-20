// @flow

import * as React from 'react';

type Props = {|
  +title: string,
  +as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
|}

export default function Heading(props: Props): React.Node {
  const Component = props.as;
  return (
    <Component>{props.title}</Component>
  )
}