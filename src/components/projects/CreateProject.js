import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";
import { Redirect } from "react-router-dom";
import swal from "sweetalert";

class CreateProject extends Component {
    state = {
        title: "",
        content: "",
        title2: "This is your title",
        content2: "Try to write something... :)",
        change: false,
        error: false,
        create: false,
        like: false,
    };
    confirmMsg() {
        swal({
            title: "Good job!",
            text: "Your note have been published",
            icon: "success",
            button: "Good!",
        });
    }

    handleChange = (e) => {
        this.setState({ change: true });
        this.setState({
            [e.target.id]: e.target.value,
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        if (this.state.title === "" || this.state.content === "") {
            this.setState({
                error: true,
            });
        } else {
            this.props.createProject(this.state);
            this.props.history.push("/");
        }
    };
    errorMessage() {
        return (
            <p className="text-danger center">
                There is a fiel empty, please complete it.
            </p>
        );
    }
    render() {
        console.log(this.props);

        const { auth } = this.props;
        if (!auth.uid) return <Redirect to="/signin" />;

        return (
            <div className="container alto ">
                <div className="row">
                    <div className="col-8">
                        <form
                            onSubmit={this.handleSubmit}
                            className="white p-5 formRound"
                        >
                            <h5 className="textInput center">
                                Create a new project
                            </h5>
                            <div className="input-field">
                                <label htmlFor="title">Title</label>
                                <input
                                    type="text"
                                    id="title"
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="input-field">
                                <label htmlFor="content">Project Content</label>
                                <textarea
                                    id="content"
                                    className="materialize-textarea"
                                    onChange={this.handleChange}
                                ></textarea>
                            </div>
                            <div className="input-field">
                                <button
                                    onClick={this.confirmMsg}
                                    className="btnCreate"
                                >
                                    Add Note{" "}
                                    <i className="fas fa-plus-circle"></i>
                                </button>
                                <br />
                                {this.state.error ? this.errorMessage() : null}
                            </div>
                        </form>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <img
                                src="iconApp.png"
                                alt="cardImg"
                                className="card-img-top cardImg"
                            />
                            <div className="center titleDiv">
                                {this.state.change ? (
                                    <h4 className="textCard">
                                        {this.state.title}
                                    </h4>
                                ) : (
                                    <h4 className="textCard">
                                        {this.state.title2}
                                    </h4>
                                )}
                            </div>
                            <div className="card-body">
                                <i className="fas fa-quote-left"></i>{" "}
                                {this.state.change ? (
                                    <p className="textCard">
                                        {this.state.content}
                                    </p>
                                ) : (
                                    <p className="textCard">
                                        {this.state.content2}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
