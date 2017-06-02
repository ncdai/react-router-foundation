import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, showNotification } from '../action';
import axios from 'axios';

class SignIn extends Component {
    handleSubmit(e) {
        e.preventDefault();
        const { dispatch } = this.props;
        const { username, password } = this.refs;
        
        axios.post('/signin', {
            username: username.value,
            password: password.value
        })
        .then(res => {
            if (res.data === 'DANG_NHAP_THANH_CONG') {
                dispatch(login(username.value));
            } else {
                console.log(res.data);
                dispatch(showNotification(res.data));
            }
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="large-4 colunms small-centered">
                <h1 className="page-title text-center">Sign In</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref="username" placeholder="Username" />
                    <input type="password" ref="password" placeholder="Password" />
                    <button className="button expanded">Login</button>
                </form>
            </div>
        );
    }
}

module.exports = connect()(SignIn);
