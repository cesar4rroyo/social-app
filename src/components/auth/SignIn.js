import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";

class SignIn extends Component {
    state = {
        email: "",
        password: "",
    };
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.signIn(this.state);
    };
    render() {
        const { authError, auth } = this.props;
        if (auth.uid) return <Redirect to="/" />;
        return (
            <div className="container fondo">
                <form onSubmit={this.handleSubmit} className="h4 mb-4">
                    <h5 className="h4 mb-4 center">Log-in to your account</h5>
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
                            Login
                        </button>
                        <h6 className="center">
                            Not a member? <Link to="/signup">Register</Link>
                        </h6>
                        <div className="red-text center">
                            {authError ? <p>{authError}</p> : null}
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
