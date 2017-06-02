function login(username) {
    return { type: 'LOGIN', username };
}

function logout() {
    return { type: 'LOGOUT' };
}

function showNotification(message) {
    return { type: 'SHOW_NOTIFICATION', message };
}

function hideNotification() {
    return { type: 'HIDE_NOTIFICATION' };
}

module.exports = {
    login,
    logout,
    showNotification,
    hideNotification
};
