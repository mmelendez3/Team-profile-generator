// create Manager card
const generateManager = function (manager) {
    return `
    <div class="card mx-auto bg-primary text-white" style="width: 18rem"">
    <div class="card-header">
   ${manager.name} <br/>
   <i class="fas fa-mug-hot"></i>Manager</div>
   <ul class="list-group list-group-flush text-dark">
    <li class="list-group-item">ID: ${manager.id}</li>
    <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
    <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
    </ul>
</div>
    `
    
}

// create Engineer card
const generateEngineer = function (engineer) {
    return `
    <div class="card mx-auto bg-primary text-white" style="width: 18rem">
            <div class="card-header">
           ${engineer.name} <br/>
           <i class="fas fa-glasses"></i>Engineer</div>
           <ul class="list-group list-group-flush text-dark">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
            <li class="list-group-item">Github Username: <a target="_blank" href="https://github.com/${engineer.gitHub}">${engineer.gitHub}</a></li>
            </ul>
        </div>
    `
    
}

// create Intern card 
const generateIntern = function (intern) {
    return  `
    <div class="card mx-auto bg-primary text-white" style="width: 18rem">
            <div class="card-header">
           ${intern.name} <br/>
           <i class="fas fa-user-graduate"></i>Intern</div>
           <ul class="list-group list-group-flush text-dark">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
            <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
    `
    
}



// create a loop for all of the employees
generateHTML = (data) => {

    // array for cards 
    html = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole()


        // call manager function
        if (role === 'Manager') {
            const managerCard = generateManager(employee)

            html.push(managerCard);
        }

        // call engineer function
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee)

            html.push(engineerCard);
        }

        // call intern function 
        if (role === 'Intern') {
            const internCard = generateIntern(employee)

            html.push(internCard)
        }
        
    }
    // joining strings 
    const employeeCards = html.join('')

    // return to generated page
    const generateTeam = generateTeamPage(employeeCards)
    return generateTeam

}




// export function to generate entire page
const generateTeamPage = function (employeeCards) {

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/1e0a13a89f.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./style.css" />
    <title>Team Profile Generator</title>
</head>
<body>
<nav class="navbar navbar-dark bg-warning mb-5">
<span class="navbar-brand mb-0 h1 w-100 text-center">My Team</span>
</nav>
    <main> ${employeeCards} </main>
     
</body>
</html>
    `
}


// export to index
module.exports = generateHTML
