import LoginPage from '../../support/pages/LoginPage';
import HomePage from '../../support/pages/HomePage';
import CommonPage from '../../support/pages/CommonPage';

describe('Login test cases', function () {
	const loginPage = new LoginPage();
	const homePage = new HomePage();
	const commonPage = new CommonPage();

	it('Login valid credentials and verify successful login', function () {
		loginPage.login(this.data.validEmail, this.data.validPassword);
		homePage.verifyURL('inventory');
		commonPage.clickMoreMenu();
	});

	it('login with invalid credentials and verify error message', function () {
		loginPage.login(this.data.invalidEmail, this.data.invalidPassword);
		loginPage.verifyErrorMessage();
	});

	it('login with empty values and verify error message', function () {
		loginPage.clickLoginButton();
		loginPage.verifyEmptyLogin();
	});
});
