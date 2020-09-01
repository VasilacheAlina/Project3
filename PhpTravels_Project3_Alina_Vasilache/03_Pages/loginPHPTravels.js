module.exports = (function (login) {
	
	login.loginPage = function(URL, email, password) {
		
		// open page 
		
		browser.get(URL);
		
		// click on email
		
		login.clickOnEmailField();
		browser.sleep(3000);
		
		// insert email
		
		login.insertEmail(email);
		browser.sleep(3000);
		
		// click on password
		login.clickOnPasswordField();
		browser.sleep(3000);
		
		// insert password
		login.insertPassword(password);
	
		
		// click on login 
		login.clickOnLoginButton();
		browser.sleep(3000);
		
		
	};
	

	return login;
	
})(require('../02_Functions/basePageObj.js'));