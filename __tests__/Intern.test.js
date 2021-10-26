const Intern = require('../lib/Intern')


test('creates new intern object', () => {
    const intern = new Intern('Manny', 3, 'mele0019@gmail.com', 'UofM');

    expect(intern.school).toEqual(expect.any(String));
    

});

test('creates get school as an object', () => {
    const intern = new Intern('Manny', 3, 'mele0019@gmail.com', 'UofM');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()))
   

});
