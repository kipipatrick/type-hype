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


class LoginServices {
   static login(email, password){
      let user = knownUsers.filter(user => user['email'] === email)
      if(user[0]){
        if(user[0]['password']=== password){
            sessionStorage.setItem('CURRENT_USER', JSON.stringify(user[0]))
            return user[0]
        } else {
            throw new Error('Username or Password may be incorrect. Please try again.') 
        }
      } else {
        console.log('error')
        throw new Error('User Not Found')
      }
    }
}

export default LoginServices