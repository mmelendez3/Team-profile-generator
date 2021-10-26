const Engineer = require('../lib/Engineer')


test('creates new engineer object', () => {
    const engineer = new Engineer('Manny', 3, 'mele0019@gmail.com', 'mmelendez3');

    expect(engineer.gitHub).toEqual(expect.any(String));
    

});

test('creates get Github as an object', () => {
    const engineer = new Engineer('Manny', 3, 'mele0019@gmail.com', 'mmelendez');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.gitHub.toString()))
   

});
