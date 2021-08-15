import axios from 'axios'

const instance =  axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/',
    responseType: "json"
})


export default {
    getData: (url,params) => {
        return new Promise((res , rej) => {
            instance.get(url)
            .then(res => res.data)
            .then(data => res(data))
            .catch(err => rej(err))
        })
    }
}