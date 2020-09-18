import axios from 'axios'
let baseURL = 'https://api.jikan.moe/v3'

export default class AnimeModel {

    static show = async () => {
        return axios.get(`${baseURL}/search/anime?q=`)}
    
    }

