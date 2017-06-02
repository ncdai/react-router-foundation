const notification = (state = null, action) => {
    switch (action.type) {
        case 'SHOW_NOTIFICATION':
            return action.message;
        case 'HIDE_NOTIFICATION':
            return null;
        default:
            return state;
    }
}

module.exports = notification;
