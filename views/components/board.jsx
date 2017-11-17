var React = require('react');
var BoardBody = require('./boardBody');
var BoardTitle = require('./boardTitle');

class board extends React.Component {
  render() {
    return (
      <div>
        <BoardTitle title={this.props.title}/>
        <BoardBody body={this.props.body}/>
      </div>
    );
  }
}

module.exports = board;
