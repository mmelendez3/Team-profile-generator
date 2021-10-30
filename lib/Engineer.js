const Employee = require("../lib/Employee")

class Engineer extends Employee {
    constructor(name, id, email, github) {
      // call parent constructor here:
      super(name, id, email);
      
      this.gitHub = github
      
    }

    getGithub() {
        return this.gitHub
    }

    getRole() {
        return `Engineer`

    }
}


module.exports = Engineer