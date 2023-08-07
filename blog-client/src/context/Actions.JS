export const LoginStart = (userInfo) => ({
    type: "LOGIN_START"
});

export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user
})

export const LoginFailure = () => ({
    type: "LOGIN_FAILED"
})

export const LogOut = () => ({
    type: 'LOGOUT'
})