const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

let teamArray = [];

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
                //renderHTML();
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
        teamArray.push(manager)
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
        teamArray.push(engineer);
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
        teamArray.push(intern);
        askQuestions();
    })
}

createMananger()