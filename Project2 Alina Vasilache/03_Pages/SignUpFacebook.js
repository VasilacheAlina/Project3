/**********************************************************************************
* 
*Created by: Alina Vasilache
*
*Description: Facebook sign-up functionality
*
*
*
**********************************************************************************/


module.exports = (function (signUpPage) {
	
	signUpPage.newSignUpPage = function (URL){
		
		//open page
		browser.get(URL);

		
	};

	return signUpPage;
	
})(require('../02_Functions/basePageObjFb.js'));