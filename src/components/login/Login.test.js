import loginServices from './loginServices';
test('object assignment', () => {
    let login = loginServices.login('rain@sindayen.com', 'P@ssw0rd123!')
    expect(login).toEqual({
        "name": "Rain Sindayen",
      "email": "rain@sindayen.com",
    
   });
  });

