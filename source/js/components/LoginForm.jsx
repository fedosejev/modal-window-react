var React = require('react');
var Button = require('./Button.jsx');

var LoginForm = React.createClass({

  handleFormSubmit: function (submitEvent) {
    submitEvent.preventDefault();

    this.props.handleLoginForm();
  },

  render: function () {
    return (
      <div className="login">
        <div className="row">        
          <div className="col-sm-6 col-sm-offset-3">

            <form className="login-form" onSubmit={this.handleFormSubmit}>

              <h4>{this.props.header}</h4>

              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password" />
              </div>

              <button type="submit" className="btn btn-default">Log in</button>
            </form>

          </div>
        </div>
      </div>
    );
  }
});

module.exports = LoginForm;