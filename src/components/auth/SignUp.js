import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";

class SignUp extends Component {
    state = {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
    };
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.signUp(this.state);
    };
    render() {
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to="/" />;
        return (
            <div className="container fondo">
                <form
                    onSubmit={this.handleSubmit}
                    className="text-center h4 mb-4 "
                >
                    <h5 className="h4 mb-4 center">Sig In</h5>
                    <div className="form-row">
                        <div className="col">
                            <div className="input-field">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div class="col">
                            <div className="input-field">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <button className="btn btn-success h4 btn-block">
                            Sign Up
                        </button>
                        <div className="red-text center">
                            {authError ? <p> {authError} </p> : null}
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
