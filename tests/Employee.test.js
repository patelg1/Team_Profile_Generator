const Employee = require('../lib/Employee');

describe('Employee class', () => {
    it('Creates a new employee', () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe('object');
    }); 
});

describe('getName', () => {
    it('Sets the name of employee using constuctor', () => {
        const name = 'Gopal';
        const employee = new Employee(name);
        expect(employee.name).toBe('name');
    });
    
    it('Returns the name using getName()', () => {
        const name = 'Gopal';
        const employee = new Employee(name);
        expect(employee.getName()).toBe(name);
    });
});

describe('getId', () => {
    it('Sets the id of employee using constuctor', () => {
        const id = 123;
        const employee = new Employee('Test', id);
        expect(employee.id).toBe('id');
    });
    
    it('Returns the id using getId()', () => {
        const id = 123;
        const employee = new Employee('Test', id);
        expect(employee.getId()).toBe(id);
    });
});

describe('getEmail', () => {
    it('Sets the email of employee using constuctor', () => {
        const email = 'test@email.com';
        const employee = new Employee('Test', 1, email);
        expect(employee.name).toBe('name');
    });
    
    it('Returns the email using getEmail()', () => {
        const email = 'test@email.com';
        const employee = new Employee('Test', 1, email);
        expect(employee.getEmail()).toBe(email);
    });
});

describe('getRole', () => {
    it('Returns role of Employee', () => {
        const role = 'Employee'
        const employee = new Employee('Test', 1, 'test@email.com');
        expect(employee.getRole).toBe(role);
    }); 
});