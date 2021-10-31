// link to page creation
const generateHTML = require("./src/generateHTML")

//node modules
const inquirer = require("inquirer")
const fs = require("fs")

//3 classes
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")


//team profile array
const teamMembers = []

//manaager prompt
const promptManager = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "What is the manager's name?", 
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log ("Please enter the manager's name!")
                    return false
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the manager's ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter the manager's ID!")
                    return false
                } else {
                    return true
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is the team manager's email address?",
            validate: nameInput => {
                if (nameInput === '') {
                    return "Please enter an email address."
                }
                else {
                    return true
                }
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Please enter the manager's office number",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter an office number!")
                    return false
                } else {
                    return true
                }
            }
        }
    ]).then(answers => {
        console.log(answers)
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        teamMembers.push(manager)
        promptMenu()
    })
}

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "menu",
            message: "Please select which option you would like to continue with:",
            choices: ["add an engineer", "add an intern", "finish building my team"]
            
        }])
        .then(userChoice => {
            switch (userChoice.menu) {
                case "add an engineer":
                    promptEngineer()
                    break
                case "add an intern":
                    promptIntern()
                    break
                default:
                    buildTeam()
            }
        })
    }

const promptEngineer = () => {
    console.log(`
  ===================
  Add a New Engineer
  ===================
  `)

  return inquirer.prompt([
    {
        type: "input",
            name: "name",
            message: "What is the engineer's name?", 
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log ("Please enter the engineer's name.")
                    return false
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the engineer's ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter the engineer's ID!")
                    return false
                } else {
                    return true
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email address?",
            validate: nameInput => {
                if (nameInput === '') {
                    return "Please enter an email address."
                }
                else {
                    return true
                }
            }
        },
        {
            type: "input",
            name: "githubUsername",
            message: "What is the engineer's gitHub username?",
            validate: nameInput => {
                if (nameInput === '') {
                    return "Please enter an gitHub username."
                }
                else {
                    return true
                }
            }
        }
    ]).then(answers => {
        console.log(answers)
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub)
        teamMembers.push(engineer)
        promptMenu()
    })

}

const promptIntern = () => {
    console.log(`
  =================
  Add a New Intern
  =================
  `)

  return inquirer.prompt([
    {
        type: "input",
            name: "name",
            message: "What is the interns name?", 
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log ("Please enter the interns name.")
                    return false
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the interns ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter the interns ID!")
                    return false
                } else {
                    return true
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is the interns email address?",
            validate: nameInput => {
                if (nameInput === '') {
                    return "Please enter an email address."
                }
                else {
                    return true
                }
            }
        },
        {
            type: "input",
            name: "school",
            message: "Enter the interns school name",
            validate: nameInput => {
                if (nameInput === '') {
                    return "Please enter an school name."
                }
                else {
                    return true
                }
            }
        }
    ]).then(answers => {
        console.log(answers)
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        teamMembers.push(intern)
        promptMenu()
    })
}

const buildTeam = (teamMembers) => {
    console.log(`
  ===========================
  Finished building my team!
  ===========================
  `)
  writeData = generateHTML(teamMembers)
  fs.writeFile('./dist/index.HTML', writeData, err => {
      if(err) {
          throw err
      }else {
          console.log("Team has been built!")
      }
  })
}

promptManager()