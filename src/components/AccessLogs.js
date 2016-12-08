import React from 'react';

class AccessLogs extends React.Component {
  constructor () {
    super();
    this.state = {
      redirectToReferrer: false
    };
  }
  componentDidMount () {
    this.props.getLogs();
  }
  renderLog (log) {
    return (
      <li>{log.user}</li>
    );
  }
  render () {
    return (
      <div>
        <h2>Access Logs</h2>
        <ul>
          { this.props.logs.map((log) => this.renderLog(log)) }
        </ul>
      </div>
    );
  }
}

AccessLogs.propTypes = {
  getLogs: React.PropTypes.func.isRequired,
  logs: React.PropTypes.array.isRequired,
};

AccessLogs.defaultProps = {
  logs: []
};

export default AccessLogs;
