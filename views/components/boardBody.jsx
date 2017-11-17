var React = require('react');

class boardBody extends React.Component {
  render() {
    return (
      <div>
        <p><h2>body</h2></p>
        {this.props.body}
      </div>
    );
  }
}

module.exports = boardBody;
