import axios from 'axios'
let baseURL = 'https://api.jikan.moe/v3'
// let defaultURL = 'https://api.jikan.moe/v3/season/2020/summer'

export default class AnimeModel {

    static show = async ({inputValue}) => {
        return axios.get(`${baseURL}/search/anime?q=${inputValue}&page=1`)}
    }
    
    // console.log(props.inputValue)
