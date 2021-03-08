const Employee = require('./Employee');

// Manager class that extends employee class 
class Manager extends Employee{
    // constructor with param for name, id, email, and office number
    constructor (name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber;
        this.role = 'Manager';       
    }
    // method to return office number
    getOfficeNumber(){
        return this.officeNumber;
    }
    // method to return role
    getRole(){
        return this.role;
    }
}

module.exports = Manager;