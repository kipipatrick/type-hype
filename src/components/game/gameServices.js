import axios from 'axios';


class GameServices{

    static async getText(){
        let text = await axios.get(`https://baconipsum.com/api/?type=all-meat&start-with-lorem=1`)
        console.log(text.data[Math.floor(Math.random() * 4) +1])
        return text.data[Math.floor(Math.random() * 4) +1]
    }

    static saveScore(value){
     
    }

    static getScores(){
        const knownUsers = [
            {
                name: 'Rain Sindayen',
                email: 'rain@sindayen.com',
                password: 'P@ssw0rd123!',
                currentScore: 110
            },
            {
                name: 'Kipi Patrick',
                email: 'kipi@patrick.com',
                password: 'P@ssw0rd123!',
                currentScore:115
            }
        ]

        return knownUsers
    }
}

export default GameServices