var React = require('react');

class boardTitle extends React.Component {
  render() {
    return (
      <div>
        <h1>
          title [{this.props.title}]
        </h1>
      </div>
    );
  }
}

module.exports = boardTitle;
