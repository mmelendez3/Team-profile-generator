const Employee = require('../lib/Employee.js');

test('creates new employee object', () => {
    const employee = new Employee('Manny', 3, 'mele0019@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

});

test('creates get name as an object', () => {
    const employee = new Employee('Manny', 3, 'mele0019@gmail.com');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()))
   

});

test('creates get id as an object', () => {
    const employee = new Employee('Manny', 3, 'mele0019@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number))
   

});

test('creates get email as an object', () => {
    const employee = new Employee('Manny', 3, 'mele0019@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()))
   

});






