import axios from 'axios'
let baseURL = 'https://api.jikan.moe/v3'

export default class AnimeModel {

    static show = async () => {
        await axios.get(`${baseURL}/search/anime?q=Naruto&page=1`)
            .then(response => {
                let animeData = response.data
                // console.log(animeData)
                return animeData
            })
            .catch(err => console.log(err))

    }

}