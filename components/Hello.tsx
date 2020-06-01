import * as React from 'react';

export interface HelloProps {
  appName: string;
}

export const Hello = (props: HelloProps) => (
  <h1>Welcome on {props.appName}!</h1>
);
