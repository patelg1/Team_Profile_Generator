// Employee class
class Employee {
    // constructor with parameter for name, id and email
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
    }
    // method to return name
    getName(){
        return this.name;
    }
    // method to return id
    getId(){
        return this.id;
    }
    // method to return email
    getEmail(){
        return this.email;
    }
    // method to return role
    getRole(){
        return this.role;
    }
}

module.exports = Employee;