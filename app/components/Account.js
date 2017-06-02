import React, { Component } from 'react';
import SignIn from './SignIn';
import AccountInfo from './AccountInfo';
import { connect } from 'react-redux';

class Account extends Component {
    render() {
        const { user } = this.props;
        const jsx = user === null ? <SignIn /> : <AccountInfo />;
        return jsx;
    }
}

module.exports = connect(function(state) {
    return {
        user: state.user
    }
})(Account);
