var React = require('react');
var DefaultLayout = require('./layouts/default');
var Board = require('./components/board');


class IndexPage extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <Board title={this.props.boardTitle} body={this.props.boardBody}/>
      </DefaultLayout>
    );
  }
}

module.exports = IndexPage;
