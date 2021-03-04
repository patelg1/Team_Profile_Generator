const Manager = require('../lib/Manager');

describe('getOfficeNumber', () => {
    it('Sets the office number using constuctor', () => {
        const officeNumber = 123;
        const employee = new Manager('Test', 1, 'test@email.com', officeNumber);
        expect(employee.officeNumber).toBe('officeNumber');
    });
    
    it('Returns the office number using getOfficeNumber()', () => {
        const officeNumber = 123;
        const employee = new Manager('Test', 1, email, 10);
        expect(employee.getOfficeNumber()).toBe(officeNumber);
    });
});

describe('getRole', () => {
    it('Returns role as Manager', () => {
        const role = 'Manager'
        const employee = new Manager('Test', 1, 'test@email.com');
        expect(employee.getRole).toBe(role);
    }); 
});