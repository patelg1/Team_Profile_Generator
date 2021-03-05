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
                //createEngineer();
                break;
            case ('Intern'):
                //createIntern();
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
            message: 'Enter the manager name:',
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
            message: 'Enter the manager id:',
            name: 'managerId'
        },
        {
            type: 'input',
            message: 'Enter the manager email adress:',
            name: 'managerEmail'
        },
        {
            type: 'input',
            message: 'Enter the manager office number:',
            name: 'managerOffice'
        },
    ]).then((answers) => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice);
        teamArray.push(manager)
        askQuestions();
    })
}

createMananger()