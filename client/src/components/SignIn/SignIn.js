import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { auth } from '../FirebaseUi/firebaseConfig';
import './SignIn.css';

const SignInPage = ({ history }) => {
    return(
        <SignInForm history={history} />
    );
}

class SignInForm extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    onSubmit(event) {
        event.preventDefault();

        const {
            email,
            password,
        } = this.state;

        const {
            history,
        } = this.props;
        auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({email: '', password: ''});
                history.push('/');
            })
            .catch(error => {
                alert(error);
                console.log(error);
            });
    }

    render() {
        console.log("Sign In");
        const {
            email,
            password,
        } = this.state;

        const isInvalid =
            password === '' ||
            email === '';
        return (
            <form onSubmit={this.onSubmit} className="signInForm">
            <div className="signInHeader">
                LOGIN
            </div>
            <input
              value={this.state.email}
              onChange={this.handleChange}
              name="email"
              type="text"
              placeholder="Email ID"
              className="emailField"
            /><br />
            <input
              value={this.state.password}
              onChange={this.handleChange}
              name="password"
              type="password"
              placeholder="Password"
              className="emailField"
            /><br />
            <button disabled={isInvalid} type="submit" className="signInButton">
              Sign In
            </button>
            </form>
        );
    }
}

export default withRouter(SignInPage);
export {
    SignInForm,
};