    function redirect(){
        if(localStorage.getItem('token')){
            window.location.href = '../pages/index.jsx'
        }
    }
    export default redirect;