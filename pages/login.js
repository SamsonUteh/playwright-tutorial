export class LoginPage {
    constructor(page) {
        this.page = page;
        this.username =  page.getByRole('textbox', { name: 'Username' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: ' Login' })
        this.logoutButton = page.getByRole('link', { name: 'Logout' })
    }

    async baseUrl() {
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }
}