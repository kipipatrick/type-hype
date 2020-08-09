import axios from 'axios';


class GameServices{

    static async getText(){
        let text = await axios.get(`https://baconipsum.com/api/?type=all-meat&start-with-lorem=1`)
        console.log(text.data[Math.floor(Math.random() * 4) +1])
        return text.data[Math.floor(Math.random() * 4) +1]
    }

    static async saveScore(value){
        let user = JSON.parse(sessionStorage.getItem('CURRENT_USER'))
        let saveStore = await axios.post(`http://localhost:3001/scores`, {
            id: new Date().getTime(),
            name: user['name'],
            score:value
        })
        return saveStore.data
        
    }

    static  async getScores(){
        let user = JSON.parse(sessionStorage.getItem('CURRENT_USER'))
        let scores = await axios.get(`http://localhost:3001/scores`)
        return scores.data.filter(item => item.name === user['name'])
    }
}

export default GameServices