import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../action';
import axios from 'axios';

class AccountInfo extends Component {
    handleLogout() {
        const { dispatch } = this.props;
        axios.get('/logout')
        .then(err => {
            dispatch(logout());
        })
        .catch(err => console.log('LOI'));
    }
    render() {
        const { user } = this.props;
        return (
            <div>
                <h1>This is Account</h1>
                <p>Username: {user}</p>
                <button onClick={this.handleLogout.bind(this)}>Logout</button>
            </div>
        );
    }
}

module.exports = connect(function(state) {
    return {
        user: state.user
    }
})(AccountInfo);
