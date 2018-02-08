export const login = (username, password) => ({
    type: 'ACCOUNT_LOGIN',
    payload: {
        username,
        password
    }
});

export const logout = () => ({
    type: 'ACCOUNT_LOGOUT',
    payload: {}
});
