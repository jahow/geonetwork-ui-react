import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { RecordList } from '@geonetwork/components';

// @ts-ignore
import * as bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

class GeonetworkSearchResults extends HTMLElement {
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });

    const mountPoint = document.createElement('span');
    shadowRoot.appendChild(mountPoint);

    const style = document.createElement('style');
    style.textContent = bootstrap;
    shadowRoot.append(style);

    const apiUrl = this.getAttribute('gn-url');
    ReactDOM.render(<RecordList geonetworkApiUrl={apiUrl} />, mountPoint);
  }
}
customElements.define('gn-search-results', GeonetworkSearchResults);
