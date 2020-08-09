import GameServices from './gameServices'

test('Get Text must get an Object', async () => {
    let login = await GameServices.getText()
    expect(typeof login).toEqual('string');
});

test('Get Score must get an array', async () => {
    let login = await GameServices.getScores()
    expect(typeof login).toEqual('object');
});
