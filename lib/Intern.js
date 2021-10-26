const Employee = require("../lib/Employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
      // call parent constructor here:
      super(name, id, email);
      
      this.school = school
      
    }

    getSchool() {
        return `The employee's school is ${this.school}`
    }

    getRole() {
        return `Intern`

    }
}


module.exports = Intern