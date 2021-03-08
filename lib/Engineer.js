const Employee = require('./Employee');

//Engineer class that extends employee class 
class Engineer extends Employee{
    // constructor with parameters for name, id, email and github
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
        this.role = 'Engineer';
    }
    // method to return github
    getGithub(){
        return this.github;
    }
    // method to return role
    getRole(){
        return this.role;
    }
}

module.exports = Engineer;