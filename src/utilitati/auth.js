function auth() {
    const token = localStorage.getItem('token') 
    console.log(token)
    return token
}
export default auth;