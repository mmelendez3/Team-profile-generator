const Manager = require('../lib/Manager')


test('creates new manager object', () => {
    const manager = new Manager('Manny', 3, 'mele0019@gmail.com', 100);

    expect(manager.officeNumber).toEqual(expect.any(Number));
    

});