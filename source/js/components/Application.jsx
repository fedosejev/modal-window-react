var React = require('react');
var LoginForm = require('./LoginForm.jsx');
var Button = require('./Button.jsx');

var Application = React.createClass({

  getInitialState: function () {
    return {
      isLogin: false
    };
  },

  showLoginForm: function () {
    this.setState({
      isLogin: true
    });
  },

  hideLoginForm: function () {
    this.setState({
      isLogin: false
    });
  },

  render: function () {
    return (
      <div className="container text-center">
        <Button label="My profile" handleButtonClick={this.showLoginForm} styleClass="profile-button" />
        { this.state.isLogin ? <LoginForm handleLoginForm={this.hideLoginForm} header="You must login to see your profile." /> : null }
      </div>
    );
  }
});

module.exports = Application;
