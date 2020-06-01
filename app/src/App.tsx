import * as React from 'react';
import { Hello } from '@geonetwork/components';
import { RecordList } from '@geonetwork/components';

export const App = () => (
  <div>
    <Hello appName={'geonetwork-ui'} />
    <RecordList
      geonetworkApiUrl={'https://www.geocat.ch/geonetwork/srv/fre/'}
    />
  </div>
);
