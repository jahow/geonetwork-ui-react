import * as React from 'react';
import { RecordSimple } from '../model';

const containerStyle = {
  border: '1px solid gray',
  borderRadius: 4,
  padding: '0.5rem',
};

export const RecordSummary = (props: RecordSimple) => (
  <div style={containerStyle}>
    <strong>{props.name}</strong>
    <p style={{ whiteSpace: 'pre-line' }}>{props.abstract}</p>
    <p>
      <a href={props.url} type="button">
        Go to full page
      </a>
    </p>
  </div>
);
