// create Manager card
const generateManager = function (manager) {
    return `
    <div class="col-4">
                <div class="card mx-auto bg-primary text-white" style="width: 18rem">
                    <h5 class="card-header">${manager.name}<br /><br />Manager<i class="material-icons">content_paste</i></h5>
                    <ul class="list-group list-group-flush text-dark">
                        <li class="list-group-item">ID: ${manager.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                    </ul>
                </div>
            </div>
    `;
}

// create Engineer card
const generateEngineer = function (engineer) {
    return `
    <div class="col-4">
                <div class="card mx-auto bg-primary text-white" style="width: 18rem">
                    <h5 class="card-header">${engineer.name}<br /><br />Engineer<i class="material-icons">laptop_mac</i></h5>
                    <ul class="list-group list-group-flush text-dark">
                        <li class="list-group-item">ID: ${engineer.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                        <li class="list-group-item">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
                    </ul>
                </div>
            </div>
    `
}

// create Intern card 
const generateIntern = function (intern) {
    return `
    <div class="col-4">
                <div class="card mx-auto bg-primary text-white" style="width: 18rem">
                    <h5 class="card-header">${intern.name}<br /><br />Intern<i class="material-icons">assignment_ind</i></h5>
                    <ul class="list-group list-group-flush text-dark">
                        <li class="list-group-item">ID: ${intern.id}</li>
                        <li class="list-group-item">Email:<a href="mailto:${intern.email}">${intern.email}</a></li>
                        <li class="list-group-item">School: ${intern.school}</li>
                    </ul>
                </div>
            </div>
    `
};

