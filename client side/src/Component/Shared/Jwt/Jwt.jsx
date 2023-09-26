import axios from "axios"

export const jwt=(email)=>{
    axios.post('http://localhost:3000/jwt',{email:email})
    .then(result=>{
       localStorage.setItem('token', result.data.token)
    })
}