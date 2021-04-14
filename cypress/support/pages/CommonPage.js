/// <reference types="Cypress"/>

class CommonPage {
	//PageObjects
	get moreMenu() {
		return '.bm-burger-button';
	}
	get logoutOption() {
		return '#logout_sidebar_link';
	}
	get cartIcon() {
		return '.shopping_cart_link';
	}

	//PageActions
	//Click on more menu located in top left
	clickMoreMenu() {
		cy.clickElement(this.moreMenu);
	}

	//Click logout from the options of more menu
	clickLogout() {
		cy.clickElement(this.logoutOption);
	}

	//Click cart icon located in top right
	clickCartIcon() {
		cy.clickElement(this.cartIcon);
	}
}
export default CommonPage;
