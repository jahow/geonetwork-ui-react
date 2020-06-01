import * as React from 'react';
import { Hello } from '@geonetwork/components';
import { RecordList } from '@geonetwork/components';
import { OpenModal } from '@geonetwork/components';

export const App = () => (
  <div>
    <Hello appName={'geonetwork-ui'} />
    <OpenModal />
    <RecordList
      geonetworkApiUrl={'https://www.geocat.ch/geonetwork/srv/fre/'}
    />
  </div>
);
