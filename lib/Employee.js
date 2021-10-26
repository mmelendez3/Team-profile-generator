class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return `The employee's name is ${this.name}`
        }
        
    

    getId() {
        return `The employee's id is ${this.id}`
        }


    getEmail() {
        return `The employee's email is ${this.email}`
        }


    getRole() {
        return `Employee`
        } // Returns 'Employee'
}



module.exports = Employee