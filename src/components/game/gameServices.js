import axios from 'axios';

let URL = process.env.NODE_ENV === 'development' ? "http://localhost:3001" : 'https://my-json-server.typicode.com/kipipatrick/type-hype';

class GameServices{


    static async getText(){
        let text = await axios.get(`https://baconipsum.com/api/?type=all-meat&start-with-lorem=1`)
        console.log(text.data[Math.floor(Math.random() * 4) +1])
        return text.data[Math.floor(Math.random() * 4) +1]
    }

    static async saveScore(value){
        let user = JSON.parse(sessionStorage.getItem('CURRENT_USER'))
        console.log(value)
        let saveStore = await axios.post(`${URL}/scores`, {
            id: new Date().getTime(),
            name: user['name'],
            score:value
        }, {
            headers: {
                "Content-header": 'application/json'
            }
        })
        return saveStore.data
        
    }

    static  async getScores(){
        let user = JSON.parse(sessionStorage.getItem('CURRENT_USER'))
        let scores = await axios.get(`${URL}/scores`)
        return scores.data.filter(item => item.name === user['name'])
    }
}

export default GameServices