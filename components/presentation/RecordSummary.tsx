import * as React from 'react';
import { RecordSimple } from '../model';

export const RecordSummary = (props: RecordSimple) => (
  <div className="card card-body container">
    <div className="row">
      <div
        className="col-3"
        style={{
          background: `url(${props.thumbnailUrl})`,
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="col-9">
        <strong>{props.name}</strong>
        <p className="text-secondary" style={{ whiteSpace: 'pre-line' }}>
          {props.abstract}
        </p>

        <div>
          <a href={props.url} type="button" className="btn btn-sm btn-success">
            Go to full page
          </a>
        </div>
      </div>
    </div>
  </div>
);
