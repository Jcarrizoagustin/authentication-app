
export const Login = (key,id) => {
    sessionStorage.setItem('token',key)
    sessionStorage.setItem('id',id)
    sessionStorage.setItem('isAuthenticated',true)
}

export const Logout = () => {
    sessionStorage.setItem('token',null)
    sessionStorage.setItem('id',null)
    sessionStorage.setItem('isAuthenticated',false)
}

export const GetToken = () => {
    return sessionStorage.getItem('token')
}

export const GetId = () => {
    return sessionStorage.getItem('id')
}

export const isAuthenticated = () => {
    return sessionStorage.getItem('isAuthenticated')
}