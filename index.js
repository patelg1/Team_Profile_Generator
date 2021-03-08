// Required node packages
const fs = require('fs');
const inquirer = require('inquirer');

// Required classes
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// Array to hold team info
let teamArray = [];

// Function to start application
function startApp(){
    inquirer.prompt([
        {
            message: 'Welcome to the Team Generator. Please write your team name:',
            name: 'teamName'
        }
    ])
    // Add team name to array and begin create manager
    .then(function(data){
        const teamName = data.teamName;
        teamArray.push(teamName);
        createMananger();
    })
}
// Function to ask prompts for user team creation
function askQuestions(){
    inquirer.prompt([
        {
            type: 'list',
            message: 'Which kind of employee would you like to add?',
            choices: ['Engineer', 'Intern', 'None'],
            name: 'employee'
        }
        // Switch case to see if engineer, intern or none selected
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
// Function to create manager based on prompt answers
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
        teamArray.push(manager)
        askQuestions();
    })
}
// Function to create engineer based on prompt answers
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
        teamArray.push(engineer);
        askQuestions();
    })
}
// Function to create intern based on prompt answers
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
        teamArray.push(intern);
        askQuestions();
    })
}
// Function to generate HTML with team name and team cards with info
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
    teamArray.forEach(employee => { 
        if (employee.name){
        let object = `
            <div class="card m-2 col-3 border-0">
                <div class="card-header bg-primary text-white">
                <h3 class="card-title">${employee.name}</h3>  
                        
        `
        if(employee.officeNumber) {
            object += `            
                <h4 class="card-title"><i class="fas fa-mug-hot"></i> ${employee.role}</h4>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group py-3">
                        <li class="list-group-item">ID: ${employee.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</li></a>
                        <li class="list-group-item">Office number: ${employee.officeNumber}</li>
                    </ul>                      
            `
        }
        if(employee.github) {
            object += `            
                <h4 class="card-title"><i class="fas fa-glasses"></i> ${employee.role}</h4>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group py-3">
                        <li class="list-group-item">ID: ${employee.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</li></a>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${employee.github}">${employee.github}</li></a>
                    </ul>                           
            `
        }
        if(employee.school){
            object += `            
                <h4 class="card-title"><i class="fas fa-user-graduate"></i> ${employee.role}</h4>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group py-3">
                        <li class="list-group-item">ID: ${employee.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</li></a>
                        <li class="list-group-item">School: ${employee.school}</li>
                    </ul>                        
            `
        } 
        object += `
                </div>
            </div>          
        ` 
        htmlArray.push(object); 
        }  
    });

    
    const htmlEnd = `
            </div>
        </div>
    </div>
</body>
</html> 
    `
    htmlArray.push(htmlEnd);
    // Write the info to html
    fs.writeFile(`./dist/${teamArray[0]}.html`, htmlArray.join(''), function(err){
        
    });
}
// Call the start application function
startApp();