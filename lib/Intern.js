const Employee = require('./Employee');

// Intern class that extends employee class
class Intern extends Employee{
    // constructor with param for name, id, email, and school
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
        this.role = 'Intern';
    }
    // method to return school
    getSchool(){
        return this.school;
    }
    // method to return role
    getRole(){
        return this.role;
    }
}

module.exports = Intern;