import React from 'react';
import { RecordSummary } from '../components';

import 'bootstrap/dist/css/bootstrap.min.css';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'RecordSummary',
  decorators: [withA11y],
};

const abstract = `This is a long abstract...

spanning over several lines.`;

export const RecordWithoutThumbnail = () => (
  <RecordSummary
    abstract={abstract}
    name="A nice title for this record!"
    thumbnailUrl=""
    url="https://www.abcd.com"
  />
);

export const RecordWithThumbnail = () => (
  <RecordSummary
    abstract={abstract}
    name="A nice title for this record!"
    thumbnailUrl="https://sextant.ifremer.fr/var/storage/images/_aliases/listitem_thumbnail/medias-ifremer/medias-sextant/accueil/cartes-thematiques/adcp/1595636-3-fre-FR/ADCP.png"
    url="https://www.abcd.com"
  />
);
