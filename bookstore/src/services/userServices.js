import axios from 'axios'



export const login = (login) =>{
    let response = axios.post('https://bookstore.incubation.bridgelabz.com/bookstore_user/login',login)
    return response
}


export const signUp = (signUp) =>{
    console.log(signUp)
    let response = axios.post('https://bookstore.incubation.bridgelabz.com/bookstore_user/registration',signUp)
    return response
}

