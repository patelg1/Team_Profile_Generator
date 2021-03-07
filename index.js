const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

let teamArray = [];

function startApp(){
    inquirer.prompt([
        {
            message: 'Welcome to the Team Generator. Please write your team name:',
            name: 'teamName'
        }
    ])
    .then(function(data){
        const teamName = data.teamName;
        teamArray.push(teamName);
        createMananger();
    })
}

function askQuestions(){
    inquirer.prompt([
        {
            type: 'list',
            message: 'Which kind of employee would you like to add?',
            choices: ['Engineer', 'Intern', 'None'],
            name: 'employee'
        }
    ]).then((answers) => {
        switch (answers.employee){
            case ('Engineer'):
                createEngineer();
                break;
            case ('Intern'):
                createIntern();
                break;
            default:
                renderHTML();
        }

    });
}

function createMananger(){
    inquirer.prompt([
        {
            type: 'input',
            message: "Enter the manager's name:",
            name: 'managerName',
            validate: function(input){
                if (!isNaN(parseFloat(input))){
                    return false;
                }else{
                    return true
                }
            }
        },
        {
            type: 'input',
            message: "Enter the manager's id:",
            name: 'managerId'
        },
        {
            type: 'input',
            message: "Enter the manager's  email adress:",
            name: 'managerEmail'
        },
        {
            type: 'input',
            message: "Enter the manager's office number:",
            name: 'managerOffice'
        },
    ]).then((answers) => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice);
        const role = manager.getRole();
        teamArray.push(manager, role)
        askQuestions();
    })
}

function createEngineer(){
    inquirer.prompt([
        {
            type: 'input',
            message: "Enter the engineer's name:",
            name: 'engineerName',
            validate: function(input){
                if (!isNaN(parseFloat(input))){
                    return false;
                }else{
                    return true
                }
            }
        },
        {
            type: 'input',
            message: "Enter the engineer's id:",
            name: 'engineerId'
        },
        {
            type: 'input',
            message: "Enter the engineer's email adress:",
            name: 'engineerEmail'
        },
        {
            type: 'input',
            message: "Enter the engineer's Github username:",
            name: 'github'
        },
    ]).then((answers) => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.github);
        const role = engineer.getRole();
        teamArray.push(engineer, role);
        askQuestions();
    })
}

function createIntern(){
    inquirer.prompt([
        {
            type: 'input',
            message: "Enter the intern's name:",
            name: 'internName',
            validate: function(input){
                if (!isNaN(parseFloat(input))){
                    return false;
                }else{
                    return true
                }
            }
        },
        {
            type: 'input',
            message: "Enter the intern's id:",
            name: 'internId'
        },
        {
            type: 'input',
            message: "Enter the intern's email adress:",
            name: 'internEmail'
        },
        {
            type: 'input',
            message: "Enter the intern's school:",
            name: 'school'
        },
    ]).then((answers) => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.school);
        let role = intern.getRole();
        teamArray.push(intern, role);
        askQuestions();
    })
}

function renderHTML(){
    console.log("//////You have done it!!!//////")
    const htmlArray = [];
    const htmlBegin = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">   
    <title>${teamArray[0]}</title>      
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous"> 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />
</head>
<body>
    <header class="bg-danger">
        <h1 class="text-center mb-5 p-5 text-white">${teamArray[0]}</h1>
    </header>

    <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
                
    `
    htmlArray.push(htmlBegin);
    for (let i = 1; i < teamArray.length; i++) {
        let object = `
                
                    
        `
        if(teamArray[i].officeNumber) {
            object += `
            <div class="card m-2 col-3 border-0">
                <div class="card-header bg-primary text-white">
                <h3 class="card-title">${teamArray[i].name}</h3>
                <h4 class="card-title"><i class="fas fa-mug-hot"></i> ${teamArray[i].getRole()}</h4>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group py-3">
                        <li class="list-group-item">ID: ${teamArray[i].id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${teamArray[i].email}">${teamArray[i].email}</li></a>
                        <li class="list-group-item">Office number: ${teamArray[i].officeNumber}</li>
                    </ul>
                </div>
            </div>            
            `
        }
        if(teamArray[i].github) {
            object += `
            <div class="card m-2 col-3 border-0">
                <div class="card-header bg-primary text-white">
                <h3 class="card-title">${teamArray[i].name}</h3>
                <h4 class="card-title"><i class="fas fa-glasses"></i> ${teamArray[i].getRole()}</h4>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group py-3">
                        <li class="list-group-item">ID: ${teamArray[i].id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${teamArray[i].email}">${teamArray[i].email}</li></a>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${teamArray[i].github}">${teamArray[i].github}</li></a>
                    </ul>
                </div>
            </div>                
            `
        }
        if(teamArray[i].school){
            object += `
            <div class="card m-2 col-3 border-0">
                <div class="card-header bg-primary text-white">
                <h3 class="card-title">${teamArray[i].name}</h3>
                <h4 class="card-title"><i class="fas fa-user-graduate"></i> ${teamArray[i].getRole()}</h4>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group py-3">
                        <li class="list-group-item">ID: ${teamArray[i].id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${teamArray[i].email}">${teamArray[i].email}</li></a>
                        <li class="list-group-item">School: ${teamArray[i].school}</li>
                    </ul>
                </div>
            </div>            
            `
        } 
        object += `
                    
        ` 
        htmlArray.push(object);   
    }

    
    const htmlEnd = `
            </div>
        </div>
    </div>
</body>
</html> 
    `
    htmlArray.push(htmlEnd);
    fs.writeFile(`./dist/${teamArray[0]}.html`, htmlArray.join(''), function(err){
        
    });
}

startApp();