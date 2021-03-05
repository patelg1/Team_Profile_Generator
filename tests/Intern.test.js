const Intern = require('../lib/Intern');

describe('Testing for Intern', () => {
    describe('getSchool', () => {
        it('Sets the school name using constuctor', () => {
            const school = 'UPENN';
            const employee = new Intern('Test', 1, 'test@email.com', school);
            expect(employee.school).toBe(school);
        });
        
        it('Returns the school name using getOfficeNumber()', () => {
            const school = 'UPENN';
            const employee = new Intern('Test', 1, 'test#email.com', 'UPENN');
            expect(employee.getSchool()).toBe(school);
        });
    });
    
    describe('getRole', () => {
        it('Returns role as Intern', () => {
            const role = 'Intern'
            const employee = new Intern('Test', 1, 'test@email.com', 'UPENN');
            expect(employee.getRole()).toBe(role);
        }); 
    });
})



