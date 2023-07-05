const email='input[type="email"]'
const
class login {
    email() {
        return cy.get(email)
    }
    password() {
        return cy.get('input[type="password"]')
    }
    signInButton() {
        return cy.get('.btn').contains('Sign in')
    }
}
export default login