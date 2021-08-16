import axios from 'axios'
import { config } from './config'

const instance =  axios.create({
    baseURL:'https://fr1.api.radio-browser.info/json/stations/',
    responseType: "json"
})


export default {
    getStations: (category,count = config.count) => {
        return new Promise((res , rej) => {
            instance.get(`/${config.categories[category]}/${count}`)
            .then(res => res.data)
            .then(data => res(data))
            .catch(err => rej(err))
        })
    }
}