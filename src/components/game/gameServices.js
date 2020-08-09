import axios from 'axios';


class GameServices{

    static async getText(){
        let text = await axios.get(`https://baconipsum.com/api/?type=all-meat&start-with-lorem=1`)
        console.log(text.data[Math.floor(Math.random() * 4) +1])
        return text.data[Math.floor(Math.random() * 4) +1]
    }

    static async saveScore(value){
        let saveStore = await axios.post(`http://localhost:3001/scores`, {
            id: new Date().getTime(),
            name: 'Rain Sindayen',
            score: 40
        })
        return saveStore.data
        
    }

    static  async getScores(){
        let scores = await axios.get(`http://localhost:3001/scores`)
        this.saveScore()
        return scores.data
    }
}

export default GameServices