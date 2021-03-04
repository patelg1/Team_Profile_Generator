const Engineer = require('../lib/Engineer');

describe('getGithub', () => {
    it('Sets the github username using constuctor', () => {
        const github = 'GithubUser';
        const employee = new Engineer('Test', 1, 'test@email.com', github);
        expect(employee.github).toBe('GithubUser');
    });
    
    it('Returns the github username using getOfficeNumber()', () => {
        const github = 'GithubUser';
        const employee = new Engineer('Test', 1, 'test#email.com', 'githubusername');
        expect(employee.getGithub()).toBe(github);
    });
});

describe('getRole', () => {
    it('Returns role as Engineer', () => {
        const role = 'Engineer'
        const employee = new Engineer('Test', 1, 'test@email.com', 'githubusername');
        expect(employee.getRole).toBe(role);
    }); 
});