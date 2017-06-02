import React, { Component } from 'react';
import Nav from '../components/Nav';
import Notification from '../components/Notification';
import axios from 'axios';
import { connect } from 'react-redux'; 
import { login, showNotification } from '../action';

class Main extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        axios.get('/getInfo')
        .then(res => {
            if (res.data !== 'CHUA_DANG_NHAP') {
                dispatch(login(res.data));
            } else {
                console.log(res.data);
            }
        })
        .catch(err => console.log('LOI'));
    }
    render() {
        const { notification } = this.props;
        const notificationJSX = notification !== null ? <Notification message={notification} /> : null;
        return (
            <div>
                <Nav />
                {notificationJSX}
                <div className="row">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

module.exports = connect(function(state) {
    return {
        notification: state.notification
    }
})(Main);
