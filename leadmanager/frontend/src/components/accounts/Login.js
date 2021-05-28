import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

export class Login extends Component {
    state = {
        username: "",
        password: "",
    };

    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password);
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />;
        }
        const { username, password } = this.state;
        return (
            <div
                className="login bg-image"
                style={{
                    backgroundImage:
                        "url('../../../static/images/loginbackground.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "fixed",
                    top: "0",
                    left: "0",
                    height: "100vh",
                    width: "100vw"
                }}
            >
                <div className="col-md-6 m-auto" 
                    style = {{
                        position: "aboslute",
                        left: "25%",
                        top: "15%",
                        
                    }}>
                    <div className="card card-body mt-5">
                        <img 
                            src="../../../static/images/M.png"
                            width="100"
                            height="100"/>
                        <h2 className="text-center">Login</h2>
                        <form onSubmit={this.onSubmit} style = {{
                            textAlign:"center",
                        }}>
                            <div className="form-group">
                                <label>Username</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="username"
                                    onChange={this.onChange}
                                    value={username}
                                />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    className="form-control"
                                    type="password"
                                    name="password"
                                    onChange={this.onChange}
                                    value={password}
                                />
                            </div>

                            <div className="form-group">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    style={{
                                        backgroundColor: "#FF3399",
                                        width: "250px",
                                        height: "45px",
                                        borderRadius: "40px",
                                        color: "black",
                                        fontSize: "18px",
                                        

                                    }}
                                >
                                    Login
                                </button>
                            </div>
                            <p>
                                Don't have an account?{" "}
                                <Link to="/register">Register</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
