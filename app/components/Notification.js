import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hideNotification } from '../action';

class Notification extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        setTimeout(() => {
            dispatch(hideNotification());
        }, 3000);
    }
    render() {
        const { message } = this.props;
        return (
            <div>
                <p>{message}</p>
            </div>
        );
    }
}

module.exports = connect()(Notification);
