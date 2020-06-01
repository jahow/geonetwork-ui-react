import * as React from 'react';
import { RecordSummary } from '../presentation/RecordSummary';
import { RecordSimple } from '../model';

interface Props {
  geonetworkApiUrl: string;
}

interface State {
  records: RecordSimple[];
}

export class RecordList extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      records: [],
    };
  }

  componentDidMount() {
    fetch(
      `${this.props.geonetworkApiUrl}q?_content_type=json&fast=index&from=1&to=10`
    )
      .then((response) => response.json())
      .then((response) =>
        this.setState({
          records: response.metadata.map((m) => ({
            name: m.title,
            abstract: m.abstract,
            url: `${this.props.geonetworkApiUrl}catalog.search#/metadata/${m['geonet:info'].uuid}`,
          })),
        })
      );
  }

  render() {
    return this.state.records.map((record) => (
      <p>
        <RecordSummary {...record} />
      </p>
    ));
  }
}
